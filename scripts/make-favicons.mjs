// Generiše favicon fajlove iz znaka W.
// Pokretanje: node scripts/make-favicons.mjs
// Kad stigne SVG znaka, promeniti SOURCE i ponovo pokrenuti.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SOURCE = 'src/assets/logo/wolf-group-mark-gold.png';
const OUT = 'public';

const square = (size, pad, background) =>
  sharp(SOURCE)
    .trim()
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background })
    .png()
    .toBuffer();

const clear = { r: 0, g: 0, b: 0, alpha: 0 };
const white = { r: 255, g: 255, b: 255, alpha: 1 };

const png32 = await square(32, 1, clear);
writeFileSync(`${OUT}/favicon-32.png`, png32);
writeFileSync(`${OUT}/icon-512.png`, await square(512, 48, clear));
writeFileSync(`${OUT}/apple-touch-icon.png`, await square(180, 20, white));

// favicon.ico sa jednim PNG unosom 32×32
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync(`${OUT}/favicon.ico`, Buffer.concat([header, png32]));

console.log('Favicon fajlovi generisani u public/.');
