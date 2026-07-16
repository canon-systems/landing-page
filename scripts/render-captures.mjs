import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const rawDir = path.join(root, 'public', 'captures', 'raw');
const frameDir = path.join(root, 'public', 'captures', 'frames');
const polishedDir = path.join(root, 'public', 'captures', 'polished');

const captures = [
  ['home', 'Home'],
  ['hire-paths', 'Hire Paths'],
  ['milestones', 'Milestones'],
  ['readiness', 'Readiness'],
  ['meeting-briefings', 'Meeting Briefings'],
  ['knowledge', 'Knowledge'],
  ['integrations', 'Connected Apps'],
  ['integration-catalog', 'Integration Catalog'],
];

await mkdir(frameDir, { recursive: true });
await mkdir(polishedDir, { recursive: true });

for (const [slug, label] of captures) {
  const screenshot = await readFile(path.join(rawDir, `${slug}.jpg`));
  const data = screenshot.toString('base64');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1440" viewBox="0 0 1920 1440">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7f4ff"/>
      <stop offset="0.45" stop-color="#e9e3ff"/>
      <stop offset="1" stop-color="#fbfaff"/>
    </linearGradient>
    <radialGradient id="glow-a" cx="0" cy="0" r="1" gradientTransform="translate(458 20) rotate(68) scale(810 980)">
      <stop offset="0" stop-color="#9d83ff" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#7c5cff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow-b" cx="0" cy="0" r="1" gradientTransform="translate(1760 1330) rotate(-132) scale(760 920)">
      <stop offset="0" stop-color="#7658ef" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#5d43ff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#9d88ff" stop-opacity="0.62"/>
      <stop offset="0.52" stop-color="#7d68e7" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#b5a7ff" stop-opacity="0.34"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-25%" width="140%" height="160%">
      <feDropShadow dx="0" dy="28" stdDeviation="34" flood-color="#4f3b85" flood-opacity="0.2"/>
    </filter>
    <clipPath id="screen-clip">
      <rect x="70" y="184" width="1780" height="1132" rx="30"/>
    </clipPath>
  </defs>

  <rect width="1920" height="1440" fill="url(#bg)"/>
  <rect width="1920" height="1440" fill="url(#glow-a)"/>
  <rect width="1920" height="1440" fill="url(#glow-b)"/>
  <path d="M0 1040 C330 910 650 1090 985 1005 C1300 925 1570 770 1920 850 L1920 1440 L0 1440 Z" fill="#7658ef" opacity="0.1"/>

  <g filter="url(#shadow)">
    <rect x="52" y="166" width="1816" height="1168" rx="52" fill="url(#frame)" stroke="#aa9cff" stroke-opacity="0.5" stroke-width="2"/>
    <rect x="66" y="180" width="1788" height="1140" rx="36" fill="#ffffff"/>
    <g clip-path="url(#screen-clip)">
      <image href="data:image/jpeg;base64,${data}" x="70" y="60.5" width="1780" height="1264.2" preserveAspectRatio="none"/>
    </g>
    <rect x="70" y="184" width="1780" height="1132" rx="30" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
  </g>

  <g transform="translate(92 104)">
    <rect width="238" height="42" rx="21" fill="#ffffff" fill-opacity="0.88" stroke="#6d4aff" stroke-opacity="0.18"/>
    <circle cx="22" cy="21" r="5" fill="#6d4aff"/>
    <text x="38" y="27" fill="#2a2434" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="15" font-weight="600">Canon · ${label}</text>
  </g>
</svg>`;

  await writeFile(path.join(frameDir, `${slug}.svg`), svg);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(polishedDir, `${slug}.png`));
}

console.log(`Rendered ${captures.length} capture frames to ${polishedDir}`);
