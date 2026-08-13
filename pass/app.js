/* QCM Santé — PASS.
   SPA sans dépendance : routeur par hash, données JSON chargées à la demande,
   progression et carnet d'erreurs persistés en localStorage.
   CSP du site : pas de script inline → tout vit ici. */
(function () {
  'use strict';

  var STORE_KEY = 'qcm-pass-v1';
  var app = document.getElementById('app');
  var manifest = null; // contenu de data/ues.json
  var chapterCache = {}; // "ue1/ch01" -> données du fichier chapitre
  var session = null; // session de QCM en cours (en mémoire)

  /* ---------- Persistance ---------- */

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* stockage indisponible : on repart de zéro */ }
    return { stats: {}, carnet: {}, chapDone: {} };
  }
  var store = loadStore();

  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* plein ou bloqué */ }
  }

  /* ---------- Données ---------- */

  function fetchJSON(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' sur ' + url);
      return r.json();
    });
  }

  function chapterKey(ueId, chId) { return ueId + '/' + chId; }

  function loadChapter(ueId, chId) {
    var key = chapterKey(ueId, chId);
    if (chapterCache[key]) return Promise.resolve(chapterCache[key]);
    return fetchJSON('./data/' + ueId + '/' + chId + '.json').then(function (d) {
      chapterCache[key] = d;
      return d;
    });
  }

  function loadChapters(ueId, chIds) {
    return Promise.all(chIds.map(function (c) { return loadChapter(ueId, c); }));
  }

  function getUe(ueId) {
    for (var i = 0; i < manifest.ues.length; i++) if (manifest.ues[i].id === ueId) return manifest.ues[i];
    return null;
  }

  function getChap(ue, chId) {
    for (var i = 0; i < ue.chapitres.length; i++) if (ue.chapitres[i].id === chId) return ue.chapitres[i];
    return null;
  }

  /* qid "ue1-ch01-q05" -> {ue:"ue1", ch:"ch01"} */
  function parseQid(qid) {
    var m = /^(ue\d)-(ch\d\d)-q\d+$/.exec(qid);
    return m ? { ue: m[1], ch: m[2] } : null;
  }

  /* ---------- Utilitaires ---------- */

  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') el.textContent = attrs[k];
      else if (k === 'dataset') Object.keys(attrs[k]).forEach(function (d) { el.dataset[d] = attrs[k][d]; });
      else el.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) el.appendChild(c); });
    return el;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function letter(i) { return 'ABCDE'[i]; }

  function carnetCount() { return Object.keys(store.carnet).length; }

  function questionStats(qid) {
    return store.stats[qid] || { ok: 0, ko: 0 };
  }

  /* ---------- Rendu commun ---------- */

  function topbar(crumbText) {
    var bar = h('div', { class: 'topbar' }, [
      h('a', { href: '#/', class: 'home-link', text: 'QCM Santé · PASS' }),
      crumbText ? h('span', { class: 'crumb', text: '› ' + crumbText }) : null
    ]);
    var n = carnetCount();
    var carnetLink = h('a', { href: '#/carnet', class: 'btn', text: 'Carnet d’erreurs' + (n ? ' (' + n + ')' : '') });
    carnetLink.style.marginLeft = 'auto';
    bar.appendChild(carnetLink);
    return bar;
  }

  function render(nodes) {
    app.textContent = '';
    nodes.forEach(function (n) { if (n) app.appendChild(n); });
    window.scrollTo(0, 0);
  }

  function footerNote() {
    return h('p', { class: 'footer-note', text: 'Banque de questions originales « type annales » — objectif : ' + manifest.objectifParChapitre + ' questions par chapitre, enrichie par lots. Le découpage en chapitres sera aligné sur le syllabus officiel de la rentrée.' });
  }

  /* ---------- Vues ---------- */

  function viewHome() {
    var totalQ = 0, seenQ = 0;
    manifest.ues.forEach(function (ue) {
      ue.chapitres.forEach(function (c) { totalQ += c.n || 0; });
    });
    Object.keys(store.stats).forEach(function (qid) {
      var s = store.stats[qid];
      if (s.ok + s.ko > 0) seenQ++;
    });

    var cards = manifest.ues.map(function (ue) {
      var nq = ue.chapitres.reduce(function (s, c) { return s + (c.n || 0); }, 0);
      var badge = h('span', { class: 'ue-num', text: ue.numero });
      badge.style.background = ue.couleur;
      return h('a', { href: '#/ue/' + ue.id, class: 'card' }, [
        badge,
        h('h3', { text: ue.nom }),
        h('div', { class: 'meta', text: ue.chapitres.length + ' chapitres · ' + nq + ' questions' })
      ]);
    });

    var nCarnet = carnetCount();
    return render([
      topbar(null),
      h('div', { class: 'hero' }, [
        h('h2', { text: 'Entraînement QCM — les 7 UE' }),
        h('p', { text: totalQ + ' questions type annales corrigées et justifiées. ' + (seenQ ? seenQ + ' déjà travaillées.' : 'Choisis une UE pour commencer.') }),
        nCarnet ? h('p', {}, [
          h('a', { href: '#/carnet', text: nCarnet + ' question' + (nCarnet > 1 ? 's' : '') + ' à rejouer dans le carnet d’erreurs' })
        ]) : null
      ]),
      h('div', { class: 'grid' }, cards),
      footerNote()
    ]);
  }

  function viewUe(ueId) {
    var ue = getUe(ueId);
    if (!ue) return viewHome();
    var rows = ue.chapitres.map(function (c) {
      var qids = [];
      Object.keys(store.carnet).forEach(function (qid) {
        var p = parseQid(qid);
        if (p && p.ue === ueId && p.ch === c.id) qids.push(qid);
      });
      return h('a', { href: '#/ue/' + ueId + '/' + c.id, class: 'row' }, [
        h('span', { class: 't', text: c.titre }),
        h('span', { class: 'meta' }, [
          qids.length ? h('span', { class: 'badge carnet', text: qids.length + ' à revoir' }) : null,
          document.createTextNode(' ' + (c.n || 0) + ' questions')
        ])
      ]);
    });

    var blancBtn = h('button', { class: 'btn primary', type: 'button', text: 'Concours blanc ' + ue.numero + ' (30 questions)' });
    blancBtn.addEventListener('click', function () { startBlanc(ue); });

    return render([
      topbar(ue.numero),
      h('div', { class: 'hero' }, [
        h('h2', { text: ue.numero + ' — ' + ue.nom }),
        h('p', { text: 'Choisis un chapitre, ou lance un concours blanc tiré au sort dans toute l’UE.' })
      ]),
      h('div', { class: 'btn-row' }, [blancBtn]),
      h('div', { class: 'list' }, rows),
      footerNote()
    ]);
  }

  function viewChapter(ueId, chId) {
    var ue = getUe(ueId);
    var chap = ue && getChap(ue, chId);
    if (!chap) return viewHome();

    render([topbar(ue.numero), h('p', { class: 'empty', text: 'Chargement du chapitre…' })]);

    loadChapter(ueId, chId).then(function (data) {
      var qs = data.questions;
      var seen = 0, mastered = 0;
      qs.forEach(function (q) {
        var s = questionStats(q.id);
        if (s.ok + s.ko > 0) seen++;
        if (s.ok > 0 && !store.carnet[q.id]) mastered++;
      });
      var inCarnet = qs.filter(function (q) { return store.carnet[q.id]; });

      function sessionBtn(label, n, primary) {
        var b = h('button', { class: 'btn' + (primary ? ' primary' : ''), type: 'button', text: label });
        b.addEventListener('click', function () {
          startSession({
            titre: ue.numero + ' · ' + chap.titre,
            questions: shuffle(qs).slice(0, n || qs.length),
            retour: '#/ue/' + ueId + '/' + chId
          });
        });
        return b;
      }

      var btns = [sessionBtn('Série de 10', 10, true), sessionBtn('Série de 20', 20, false), sessionBtn('Tout le chapitre (' + qs.length + ')', 0, false)];
      if (inCarnet.length) {
        var b = h('button', { class: 'btn danger', type: 'button', text: 'Rejouer mes ' + inCarnet.length + ' erreurs' });
        b.addEventListener('click', function () {
          startSession({ titre: ue.numero + ' · ' + chap.titre + ' — erreurs', questions: shuffle(inCarnet), retour: '#/ue/' + ueId + '/' + chId });
        });
        btns.push(b);
      }

      var pct = qs.length ? Math.round((100 * mastered) / qs.length) : 0;
      var barFill = h('div');
      barFill.style.width = pct + '%';
      barFill.style.background = ue.couleur;

      render([
        topbar(ue.numero + ' › ' + chap.titre),
        h('div', { class: 'hero' }, [
          h('h2', { text: chap.titre }),
          h('p', { text: qs.length + ' questions disponibles · ' + seen + ' déjà vues · ' + mastered + ' maîtrisées (' + pct + ' %)' }),
          h('div', { class: 'progressbar' }, [barFill])
        ]),
        h('div', { class: 'btn-row' }, btns),
        footerNote()
      ]);
    }).catch(function () {
      render([
        topbar(ue.numero),
        h('p', { class: 'empty', text: 'Ce chapitre n’est pas encore disponible : la banque de questions arrive dans un prochain lot.' }),
        h('p', { class: 'empty' }, [h('a', { href: '#/ue/' + ueId, class: 'btn', text: '← Retour à l’UE' })])
      ]);
    });
  }

  function startBlanc(ue) {
    render([topbar(ue.numero), h('p', { class: 'empty', text: 'Préparation du concours blanc…' })]);
    loadChapters(ue.id, ue.chapitres.map(function (c) { return c.id; })).then(function (chaps) {
      var all = [];
      chaps.forEach(function (c) { all = all.concat(c.questions); });
      startSession({
        titre: 'Concours blanc ' + ue.numero,
        questions: shuffle(all).slice(0, 30),
        retour: '#/ue/' + ue.id,
        blanc: true
      });
    }).catch(function () {
      render([
        topbar(ue.numero),
        h('p', { class: 'empty', text: 'Impossible de charger tous les chapitres de cette UE pour le concours blanc.' }),
        h('p', { class: 'empty' }, [h('a', { href: '#/ue/' + ue.id, class: 'btn', text: '← Retour à l’UE' })])
      ]);
    });
  }

  /* ---------- Session de QCM ---------- */

  function startSession(cfg) {
    session = {
      titre: cfg.titre,
      questions: cfg.questions,
      retour: cfg.retour || '#/',
      blanc: !!cfg.blanc,
      index: 0,
      exact: 0,
      ratees: [],
      debut: Date.now()
    };
    location.hash = '#/session';
    renderSession();
  }

  function gradeQuestion(q, checked) {
    /* Notation type concours : la question est « juste » si les 5 propositions
       sont correctement classées. */
    var exact = true;
    q.props.forEach(function (p, i) { if (!!checked[i] !== !!p.v) exact = false; });
    return exact;
  }

  function updateMemory(q, exact) {
    var s = store.stats[q.id] || { ok: 0, ko: 0 };
    if (exact) s.ok++; else s.ko++;
    store.stats[q.id] = s;

    var entry = store.carnet[q.id];
    if (exact) {
      if (entry) {
        entry.streak = (entry.streak || 0) + 1;
        /* Deux succès consécutifs → la question sort du carnet. */
        if (entry.streak >= 2) delete store.carnet[q.id];
        else store.carnet[q.id] = entry;
      }
    } else {
      store.carnet[q.id] = { fails: (entry ? entry.fails : 0) + 1, streak: 0, notion: q.notion };
    }
    saveStore();
  }

  function renderSession() {
    if (!session) { location.hash = '#/'; return; }
    if (session.index >= session.questions.length) return renderSessionEnd();

    var q = session.questions[session.index];
    var checked = {}; // index de proposition -> bool
    var validated = false;

    var props = q.props.map(function (p, i) {
      var btn = h('button', { class: 'prop', type: 'button', 'aria-pressed': 'false' }, [
        h('span', { class: 'letter', text: letter(i) + '.' }),
        h('span', { class: 'ptext', text: p.t })
      ]);
      btn.addEventListener('click', function () {
        if (validated) return;
        checked[i] = !checked[i];
        btn.setAttribute('aria-pressed', checked[i] ? 'true' : 'false');
      });
      return btn;
    });

    var validateBtn = h('button', { class: 'btn primary', type: 'button', text: 'Valider ma réponse' });
    var quitBtn = h('button', { class: 'btn', type: 'button', text: 'Quitter la série' });
    quitBtn.addEventListener('click', function () {
      var back = session.retour; session = null; location.hash = back;
    });

    var card = h('div', { class: 'question-card' }, [
      h('div', { class: 'qtags' }, [
        h('span', { class: 'badge', text: q.notion }),
        h('span', { class: 'badge', text: 'Difficulté ' + '★★★'.slice(0, q.diff || 1) })
      ]),
      h('p', { class: 'enonce', text: 'Q' + (session.index + 1) + '. ' + q.enonce })
    ]);
    props.forEach(function (p) { card.appendChild(p); });
    var actions = h('div', { class: 'btn-row' }, [validateBtn, quitBtn]);
    card.appendChild(actions);

    validateBtn.addEventListener('click', function () {
      if (validated) return;
      validated = true;
      var exact = gradeQuestion(q, checked);
      if (exact) session.exact++; else session.ratees.push(q);
      updateMemory(q, exact);

      /* Correction proposition par proposition. */
      q.props.forEach(function (p, i) {
        var el = props[i];
        var userSaidTrue = !!checked[i];
        var good = userSaidTrue === !!p.v;
        el.classList.add(good ? 'correct' : 'wrong');
        el.appendChild(h('span', { class: 'verdict', text: (p.v ? 'VRAI' : 'FAUX') + (good ? ' ✓' : ' ✗') }));
        el.querySelector('.ptext').appendChild(h('span', { class: 'expl', text: p.e }));
        el.setAttribute('disabled', 'disabled');
      });

      card.insertBefore(
        h('div', { class: 'result-banner ' + (exact ? 'ok' : 'ko'), text: exact ? 'Question juste — les 5 propositions sont bien classées.' : 'Question comptée fausse — au moins une proposition est mal classée. Elle rejoint le carnet d’erreurs.' }),
        actions
      );

      var isLast = session.index + 1 >= session.questions.length;
      var nextBtn = h('button', { class: 'btn primary', type: 'button', text: isLast ? 'Voir le résultat' : 'Question suivante →' });
      nextBtn.addEventListener('click', function () { session.index++; renderSession(); });
      actions.textContent = '';
      actions.appendChild(nextBtn);
      actions.appendChild(quitBtn);
      nextBtn.focus();
    });

    render([
      topbar(session.titre),
      h('div', { class: 'session-head' }, [
        h('h2', { text: session.titre }),
        h('span', { class: 'count', text: 'Question ' + (session.index + 1) + ' / ' + session.questions.length })
      ]),
      card
    ]);
  }

  function renderSessionEnd() {
    var total = session.questions.length;
    var exact = session.exact;
    var ratees = session.ratees;
    var mins = Math.max(1, Math.round((Date.now() - session.debut) / 60000));
    var back = session.retour;
    var titre = session.titre;

    var nodes = [
      topbar(titre),
      h('div', { class: 'score-final' }, [
        h('div', { class: 'big', text: exact + ' / ' + total }),
        h('p', { text: (session.blanc ? 'Note ramenée sur 20 : ' + (Math.round((200 * exact) / total) / 10).toLocaleString('fr-FR') + '. ' : '') + 'Série faite en ' + mins + ' min.' }),
        ratees.length
          ? h('p', { text: ratees.length + ' question' + (ratees.length > 1 ? 's' : '') + ' rejoign' + (ratees.length > 1 ? 'ent' : 't') + ' le carnet d’erreurs.' })
          : h('p', { text: 'Sans faute — rien à ajouter au carnet d’erreurs. 👏' })
      ])
    ];

    var btns = [];
    if (ratees.length) {
      var replay = h('button', { class: 'btn primary', type: 'button', text: 'Rejouer tout de suite mes ' + ratees.length + ' erreurs' });
      replay.addEventListener('click', function () {
        startSession({ titre: titre + ' — erreurs', questions: shuffle(ratees), retour: back });
      });
      btns.push(replay);
    }
    var backBtn = h('a', { href: back, class: 'btn', text: '← Retour' });
    var homeBtn = h('a', { href: '#/', class: 'btn', text: 'Accueil' });
    btns.push(backBtn, homeBtn);

    nodes.push(h('div', { class: 'btn-row' }, btns));
    session = null;
    render(nodes);
  }

  /* ---------- Carnet d'erreurs ---------- */

  function viewCarnet() {
    var qids = Object.keys(store.carnet);
    if (!qids.length) {
      return render([
        topbar('Carnet d’erreurs'),
        h('div', { class: 'hero' }, [h('h2', { text: 'Carnet d’erreurs' })]),
        h('p', { class: 'empty', text: 'Le carnet est vide : chaque question ratée en série viendra s’y ranger, groupée par notion. Une question en sort après deux succès consécutifs.' })
      ]);
    }

    render([topbar('Carnet d’erreurs'), h('p', { class: 'empty', text: 'Chargement du carnet…' })]);

    /* Charge les chapitres nécessaires pour retrouver les questions. */
    var byChap = {};
    qids.forEach(function (qid) {
      var p = parseQid(qid);
      if (p) {
        var k = chapterKey(p.ue, p.ch);
        (byChap[k] = byChap[k] || []).push(qid);
      }
    });
    Promise.all(Object.keys(byChap).map(function (k) {
      var parts = k.split('/');
      return loadChapter(parts[0], parts[1]).catch(function () { return null; });
    })).then(function () {
      var found = []; // {q, ue, chap}
      qids.forEach(function (qid) {
        var p = parseQid(qid);
        if (!p) return;
        var data = chapterCache[chapterKey(p.ue, p.ch)];
        if (!data) return;
        for (var i = 0; i < data.questions.length; i++) {
          if (data.questions[i].id === qid) { found.push({ q: data.questions[i], ue: p.ue, ch: p.ch }); break; }
        }
      });

      /* Groupement UE → notion. */
      var groups = {};
      found.forEach(function (f) {
        var ue = getUe(f.ue);
        var gKey = ue.numero + '|' + f.q.notion;
        (groups[gKey] = groups[gKey] || { ue: ue, notion: f.q.notion, items: [] }).items.push(f.q);
      });

      var nodes = [
        topbar('Carnet d’erreurs'),
        h('div', { class: 'hero' }, [
          h('h2', { text: 'Carnet d’erreurs' }),
          h('p', { text: found.length + ' question' + (found.length > 1 ? 's' : '') + ' à retravailler, groupées par notion. Deux succès consécutifs sortent une question du carnet.' })
        ])
      ];

      var allBtn = h('button', { class: 'btn primary', type: 'button', text: 'Rejouer tout le carnet (' + found.length + ')' });
      allBtn.addEventListener('click', function () {
        startSession({ titre: 'Carnet d’erreurs', questions: shuffle(found.map(function (f) { return f.q; })), retour: '#/carnet' });
      });
      var clearBtn = h('button', { class: 'btn danger', type: 'button', text: 'Vider le carnet' });
      clearBtn.addEventListener('click', function () {
        if (confirm('Vider le carnet d’erreurs ? Les questions ratées ne seront plus proposées en révision.')) {
          store.carnet = {}; saveStore(); viewCarnet();
        }
      });
      nodes.push(h('div', { class: 'btn-row' }, [allBtn, clearBtn]));

      Object.keys(groups).sort().forEach(function (k) {
        var g = groups[k];
        var replay = h('button', { class: 'btn', type: 'button', text: 'Rejouer (' + g.items.length + ')' });
        replay.addEventListener('click', function () {
          startSession({ titre: g.ue.numero + ' — ' + g.notion, questions: shuffle(g.items), retour: '#/carnet' });
        });
        var head = h('div', { class: 'session-head' }, [
          h('h4', { text: g.ue.numero + ' · ' + g.notion }),
          replay
        ]);
        var list = h('div', { class: 'list' }, g.items.map(function (q) {
          var e = store.carnet[q.id];
          return h('div', { class: 'row' }, [
            h('span', { class: 't', text: q.enonce }),
            h('span', { class: 'meta', text: (e && e.fails ? e.fails + ' échec' + (e.fails > 1 ? 's' : '') : '') })
          ]);
        }));
        nodes.push(h('div', { class: 'notion-group' }, [head, list]));
      });

      render(nodes);
    });
  }

  /* ---------- Routeur ---------- */

  function route() {
    if (!manifest) return;
    var hash = location.hash || '#/';
    var parts = hash.replace(/^#\//, '').split('/').filter(Boolean);

    if (parts[0] === 'session') {
      if (session) return renderSession();
      location.hash = '#/'; return;
    }
    if (parts[0] === 'carnet') return viewCarnet();
    if (parts[0] === 'ue' && parts[1] && parts[2]) return viewChapter(parts[1], parts[2]);
    if (parts[0] === 'ue' && parts[1]) return viewUe(parts[1]);
    return viewHome();
  }

  window.addEventListener('hashchange', route);

  fetchJSON('./data/ues.json').then(function (m) {
    manifest = m;
    document.title = m.app + ' : entraînement type annales par UE';
    route();
  }).catch(function () {
    app.textContent = 'Impossible de charger le programme (data/ues.json).';
  });
})();
