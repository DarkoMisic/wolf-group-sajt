// Slika za deljenje linka (Open Graph), 1200×630.
// Pokretanje: node scripts/make-og.mjs — ponoviti kad stigne SVG logoa.
import sharp from 'sharp';

const W = 1200, H = 630;
const logo = await sharp('src/assets/logo/wolf-group-vertical-gold.png').resize({ height: 300 }).toBuffer();
const meta = await sharp(logo).metadata();
const line = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="#A17B26"/>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } })
  .composite([
    { input: logo, left: Math.round((W - meta.width) / 2), top: Math.round((H - meta.height) / 2) - 10 },
    { input: line, left: 0, top: 0 },
  ])
  .png()
  .toFile('public/og.png');
console.log('public/og.png');
