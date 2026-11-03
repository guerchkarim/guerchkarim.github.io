#!/usr/bin/env node
// Usine à vidéos 3D « explosive » : musique + effets sonores générés localement, pas de voix.
// Usage : node generer3d.mjs videos/001-multiplier-par-11-3d.json

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync, spawn } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire('/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');

const ICI = dirname(fileURLToPath(import.meta.url));
const FPS = 30;
const SR = 44100;




function ffmpegPath() {
  try { execFileSync('ffmpeg', ['-version']); return 'ffmpeg'; } catch { return execFileSync('python3', ['-c', 'import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())']).toString().trim(); }
}

/* ============================ MUSIQUE ============================ */
const TAU = Math.PI * 2;
// Une ambiance musicale par thème : tempo, gamme de basse, arpège, dosage des percussions.
const MUSIQUES = {
  neon:    { bpm: 126, basse: [55.0, 55.0, 65.41, 49.0], // la mineur, électro
             arpege: [220.0, 261.63, 329.63, 392.0, 440.0, 392.0, 329.63, 261.63],
             kick: 0.95, clap: 0.3, hat: 0.16, arpg: 0.13 },
  tableau: { bpm: 112, basse: [65.41, 65.41, 87.31, 98.0], // do majeur, ludique
             arpege: [261.63, 329.63, 392.0, 523.25, 392.0, 329.63],
             kick: 0.7, clap: 0.2, hat: 0.12, arpg: 0.16 },
  soldes:  { bpm: 134, basse: [61.74, 61.74, 73.42, 82.41], // si mineur, frénétique
             arpege: [246.94, 293.66, 369.99, 440.0, 493.88, 440.0, 369.99, 293.66],
             kick: 1.0, clap: 0.38, hat: 0.2, arpg: 0.12 },
  copie:   { bpm: 104, basse: [73.42, 73.42, 98.0, 110.0], // ré majeur, posé
             arpege: [293.66, 369.99, 440.0, 587.33, 440.0, 369.99],
             kick: 0.55, clap: 0.12, hat: 0.08, arpg: 0.17 },
};

function synthMusique(total, ecrans, M, BEAT) {
  const n = Math.ceil(total * SR);
  const m = new Float32Array(n);
  const pose = (t0, gen, dur) => {
    const d = Math.min(Math.ceil(dur * SR), n - Math.floor(t0 * SR));
    const o = Math.floor(t0 * SR);
    for (let i = 0; i < d; i++) m[o + i] += gen(i / SR);
  };
  const bruit = () => Math.random() * 2 - 1;

  const nbBeats = Math.floor(total / BEAT);
  for (let b = 0; b < nbBeats; b++) {
    const t0 = b * BEAT;
    // grosse caisse à chaque temps
    pose(t0, t => Math.sin(TAU * (52 + 95 * Math.exp(-t * 32)) * t) * M.kick * Math.exp(-t * 14), 0.3);
    // clap sur 2 et 4
    if (b % 4 === 1 || b % 4 === 3) pose(t0, t => bruit() * M.clap * Math.exp(-t * 26), 0.18);
    // charleston en croches (contretemps plus fort)
    for (const [dec, g] of [[0.5 * BEAT, M.hat], [0.25 * BEAT, M.hat * 0.3], [0.75 * BEAT, M.hat * 0.3]])
      pose(t0 + dec, t => bruit() * g * Math.exp(-t * 90), 0.05);
  }
  // basse + arpège alignés sur les écrans
  ecrans.forEach((e, idx) => {
    const f = M.basse[idx % M.basse.length];
    const nb = Math.round(e.dur / (BEAT / 2));
    for (let k = 0; k < nb; k++) {
      const t0 = e.start + k * BEAT / 2;
      const duck = Math.exp(-((t0 % BEAT)) * 2); // léger pompage sous le kick
      pose(t0, t => (Math.sin(TAU * f * t) * 0.7 + Math.sin(TAU * f * 2 * t) * 0.3)
        * 0.3 * (1 - duck * 0.35) * Math.min(1, t * 60) * Math.exp(-t * 7), 0.22);
    }
    const na = Math.round(e.dur / (BEAT / 4));
    for (let k = 0; k < na; k++) {
      const f2 = M.arpege[(k + idx * 3) % M.arpege.length];
      pose(e.start + k * BEAT / 4, t => Math.sin(TAU * f2 * t + 2.5 * Math.sin(TAU * f2 * 2 * t) * Math.exp(-t * 9))
        * M.arpg * Math.exp(-t * 11), 0.14);
    }
    // whoosh d'entrée d'écran
    pose(Math.max(0, e.start - 0.18), t => bruit() * 0.32 * Math.pow(Math.sin(Math.PI * Math.min(1, t / 0.3)), 2) * (t / 0.3), 0.3);
    // ding sur les résultats
    if (e.ding) pose(e.start + 0.12, t =>
      (Math.sin(TAU * 1046.5 * t) * 0.6 + Math.sin(TAU * 1568 * t) * 0.35) * 0.3 * Math.exp(-t * 5), 0.8);
  });
  // fin en douceur + anti-saturation douce
  const sortie = Math.floor(1.2 * SR);
  for (let i = 0; i < sortie && i < n; i++) m[n - 1 - i] *= i / sortie;
  const w = new Int16Array(n);
  for (let i = 0; i < n; i++) w[i] = Math.max(-1, Math.min(1, Math.tanh(m[i] * 1.1))) * 32200;
  return Buffer.from(w.buffer);
}
function wavHeader(nbOctets, rate) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + nbOctets, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24); h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write('data', 36); h.writeUInt32LE(nbOctets, 40);
  return h;
}

/* ============================ VIDÉO ============================ */
async function main() {
  const specPath = resolve(process.argv[2] || '');
  if (!specPath || !existsSync(specPath)) { console.error('Usage : node generer3d.mjs <spec.json>'); process.exit(1); }
  const sortieDir = resolve(process.argv[3] || join(ICI, 'sorties'));
  mkdirSync(sortieDir, { recursive: true });
  const spec = JSON.parse(readFileSync(specPath, 'utf8'));
  const travail = join(sortieDir, '.travail-' + spec.slug);
  mkdirSync(travail, { recursive: true });

  // ambiance musicale du thème, minutage : chaque écran dure 4 temps (8 si x2)
  const M = MUSIQUES[spec.theme] || MUSIQUES.neon;
  const BEAT = 60 / M.bpm;
  const ECRAN = 4 * BEAT;
  let t = 0;
  spec.ecrans.forEach((e, i) => {
    e.index = i; e.start = t; e.dur = ECRAN * (e.x2 ? 2 : 1); t += e.dur;
  });
  spec.total = t + 0.8;
  spec.beat = BEAT;
  console.log(`Thème : ${spec.theme || 'neon'} (${M.bpm} BPM), écrans : ${spec.ecrans.length}, durée : ${spec.total.toFixed(1)} s`);

  const pcm = synthMusique(spec.total, spec.ecrans, M, BEAT);
  const musiquePath = join(travail, 'musique.wav');
  writeFileSync(musiquePath, Buffer.concat([wavHeader(pcm.length, SR), pcm]));
  console.log('Musique générée.');

  const mp4 = join(sortieDir, spec.slug + '.mp4');
  const ff = spawn(ffmpegPath(), [
    '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', 'pipe:0',
    '-i', musiquePath,
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', '-shortest', mp4,
  ], { stdio: ['pipe', 'ignore', 'inherit'] });

  const navigateur = await chromium.launch();
  const page = await navigateur.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + join(ICI, 'template-3d.html'));
  await page.evaluate(s => window.initSpec(s), spec);

  const nbFrames = Math.ceil(spec.total * FPS);
  for (let f = 0; f < nbFrames; f++) {
    await page.evaluate(tt => window.setTime(tt), f / FPS);
    const img = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(img)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % (FPS * 5) === 0) console.log(`Images : ${f}/${nbFrames}`);
  }
  ff.stdin.end();
  await navigateur.close();
  await new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg: ' + c)))));

  writeFileSync(join(sortieDir, spec.slug + '.txt'),
    [spec.titre, '', spec.description || '', '', (spec.hashtags || []).join(' ')].join('\n'));
  console.log('\nVidéo prête : ' + mp4);
}

main().catch(e => { console.error(e); process.exit(1); });
