/* Service worker — cache hors-ligne du cœur pédagogique (Lot 9).
   Stratégie : pré-cache de la coquille, puis « cache-first » avec mise en cache
   à la volée des ressources même-origine (assets hachés, polices KaTeX, pages
   légales). Fonctionne hors-ligne après la première visite. */
const CACHE = 'atelier-des-maths-v1';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/favicon.svg', '/icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(
      (cached) =>
        cached ||
        fetch(req)
          .then((res) => {
            if (res && res.status === 200 && res.type === 'basic') {
              const clone = res.clone();
              caches.open(CACHE).then((c) => c.put(req, clone));
            }
            return res;
          })
          // Hors-ligne : pour une navigation, on retombe sur la coquille.
          .catch(() => (req.mode === 'navigate' ? caches.match('/index.html') : undefined))
    )
  );
});
