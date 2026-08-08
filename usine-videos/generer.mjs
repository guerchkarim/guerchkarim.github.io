#!/usr/bin/env node
// Usine à vidéos de L'Atelier des Maths.
// Usage : node generer.mjs videos/001-multiplier-par-11.json [dossier-sortie]
//
// Pour chaque scène du fichier de spec : synthèse de la voix off (Piper, local),
// puis rendu des images (Chromium/Playwright) et assemblage MP4 (ffmpeg).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync, spawn } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire('/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');

const ICI = dirname(fileURLToPath(import.meta.url));
const FPS = 30;
const PAUSE_DEFAUT = 0.55;   // silence après chaque scène (s)
const AVANCE = 0.18;         // la scène s'affiche un peu avant que la voix parte (s)

// Voix par défaut : « Tom » (voix masculine française). Autre choix : fr_FR-siwis-medium (féminine).
const VOIX = process.env.VOIX || 'fr_FR-tom-medium';
const VOIX_DIR = process.env.VOIX_DIR || `/root/.cache/atelier-voix/vits-piper-${VOIX}`;
const VOIX_URL = `https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-${VOIX}.tar.bz2`;

function ffmpegPath() {
  return execFileSync('python3', ['-c', 'import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())'])
    .toString().trim();
}

function assurerVoix() {
  if (existsSync(join(VOIX_DIR, VOIX + '.onnx'))) return;
  console.log('Téléchargement de la voix française (une seule fois)…');
  mkdirSync(dirname(VOIX_DIR), { recursive: true });
  execFileSync('bash', ['-c',
    `cd "${dirname(VOIX_DIR)}" && curl -sSL --cacert /root/.ccr/ca-bundle.crt -o voix.tar.bz2 "${VOIX_URL}" && tar xjf voix.tar.bz2 && rm voix.tar.bz2`],
    { stdio: 'inherit' });
}

// Synthétise un texte en WAV (PCM 16 bits mono 22050 Hz) et renvoie les échantillons.
function synthese(texte, fichier) {
  execFileSync('bash', ['-c',
    `echo ${JSON.stringify(texte)} | python3 -m piper -m "${join(VOIX_DIR, VOIX + '.onnx')}" -c "${join(VOIX_DIR, VOIX + '.onnx.json')}" -f "${fichier}"`],
    { stdio: ['pipe', 'pipe', 'pipe'] });
  const buf = readFileSync(fichier);
  const dataIdx = buf.indexOf(Buffer.from('data'));
  const taille = buf.readUInt32LE(dataIdx + 4);
  return buf.subarray(dataIdx + 8, dataIdx + 8 + taille);
}

function wavHeader(nbOctets, rate = 22050) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + nbOctets, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24); h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write('data', 36); h.writeUInt32LE(nbOctets, 40);
  return h;
}

async function main() {
  const specPath = resolve(process.argv[2] || '');
  if (!specPath || !existsSync(specPath)) {
    console.error('Usage : node generer.mjs <spec.json> [dossier-sortie]');
    process.exit(1);
  }
  const sortieDir = resolve(process.argv[3] || join(ICI, 'sorties'));
  mkdirSync(sortieDir, { recursive: true });
  const spec = JSON.parse(readFileSync(specPath, 'utf8'));
  const travail = join(sortieDir, '.travail-' + spec.slug);
  mkdirSync(travail, { recursive: true });

  assurerVoix();

  // 1. Voix off scène par scène, et calcul du minutage
  const RATE = 22050;
  const morceaux = [];
  let t = 0;
  spec.scenes.forEach((scene, i) => {
    const pcm = synthese(scene.narration, join(travail, `scene${i}.wav`));
    const dureeAudio = pcm.length / 2 / RATE;
    const pause = scene.pause ?? PAUSE_DEFAUT;
    scene.index = i;
    scene.start = t;
    scene.dur = AVANCE + dureeAudio + pause;
    morceaux.push(Buffer.alloc(Math.round(AVANCE * RATE) * 2), pcm, Buffer.alloc(Math.round(pause * RATE) * 2));
    // Position d'apparition de chaque ligne dans la scène (répartie sur la voix)
    scene.lines.forEach((l, j) => {
      if (l.at === undefined) l.at = AVANCE + (dureeAudio * 0.82) * (j / Math.max(1, scene.lines.length));
    });
    t += scene.dur;
    console.log(`Scène ${i + 1}/${spec.scenes.length} : ${dureeAudio.toFixed(1)} s de voix`);
  });
  spec.total = t;

  const pcmTotal = Buffer.concat(morceaux);
  const voixPath = join(travail, 'voix.wav');
  writeFileSync(voixPath, Buffer.concat([wavHeader(pcmTotal.length), pcmTotal]));
  console.log(`Durée totale : ${spec.total.toFixed(1)} s`);

  // 2. Rendu des images dans ffmpeg (via stdin)
  const mp4 = join(sortieDir, spec.slug + '.mp4');
  const ff = spawn(ffmpegPath(), [
    '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', 'pipe:0',
    '-i', voixPath,
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', '-shortest', mp4,
  ], { stdio: ['pipe', 'ignore', 'inherit'] });

  const navigateur = await chromium.launch();
  const page = await navigateur.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + join(ICI, 'template.html'));
  await page.evaluate(s => window.initSpec(s), spec);

  const nbFrames = Math.ceil(spec.total * FPS);
  for (let f = 0; f < nbFrames; f++) {
    await page.evaluate(t => window.setTime(t), f / FPS);
    const img = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(img)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % (FPS * 5) === 0) console.log(`Images : ${f}/${nbFrames}`);
  }
  ff.stdin.end();
  await navigateur.close();
  await new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg: ' + c)))));

  // 3. Fichier de publication (titre + description + hashtags, prêt à coller)
  const texte = [
    spec.titre,
    '',
    spec.description || '',
    '',
    (spec.hashtags || []).join(' '),
  ].join('\n');
  writeFileSync(join(sortieDir, spec.slug + '.txt'), texte);

  console.log('\nVidéo prête : ' + mp4);
}

main().catch(e => { console.error(e); process.exit(1); });
