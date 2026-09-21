// Pravi statičnu mapu lokacije iz OpenStreetMap pločica.
// Pokretanje: node scripts/make-map.mjs
// Podaci © OpenStreetMap contributors (ODbL) — potpis mora ostati uz sliku.
import sharp from 'sharp';

const LAT = 44.820389069586355;
const LON = 19.215148664478633;
const ZOOM = 16;
const W = 1200;
const H = 900;
const OUT = 'src/assets/foto/mapa.png';
const UA = 'wolfdoo.com static map build (one-off)';

const n = 2 ** ZOOM;
const px = ((LON + 180) / 360) * n * 256;
const latRad = (LAT * Math.PI) / 180;
const py = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n * 256;

const left = px - W / 2;
const top = py - H / 2;
const tx0 = Math.floor(left / 256), tx1 = Math.floor((left + W) / 256);
const ty0 = Math.floor(top / 256), ty1 = Math.floor((top + H) / 256);

const tiles = [];
for (let x = tx0; x <= tx1; x++) {
  for (let y = ty0; y <= ty1; y++) {
    const res = await fetch(`https://tile.openstreetmap.org/${ZOOM}/${x}/${y}.png`, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Tile ${x}/${y}: ${res.status}`);
    tiles.push({ input: Buffer.from(await res.arrayBuffer()), left: Math.round(x * 256 - left), top: Math.round(y * 256 - top) });
  }
}

const M = 96;
const marker = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${M}" height="${M}">
  <circle cx="${M / 2}" cy="${M / 2}" r="${M / 2 - 2}" fill="#A17B26" fill-opacity="0.2"/>
  <circle cx="${M / 2}" cy="${M / 2}" r="20" fill="#A17B26" stroke="#ffffff" stroke-width="6"/>
</svg>`);

// Pločice mogu viriti van okvira — prvo složiti na veće platno, pa iseći.
const canvasW = (tx1 - tx0 + 1) * 256, canvasH = (ty1 - ty0 + 1) * 256;
const offX = Math.round(left - tx0 * 256), offY = Math.round(top - ty0 * 256);
const stitched = await sharp({ create: { width: canvasW, height: canvasH, channels: 3, background: '#f2efe9' } })
  .composite(tiles.map((t) => ({ ...t, left: t.left + offX, top: t.top + offY })))
  .png()
  .toBuffer();

await sharp(stitched)
  .extract({ left: offX, top: offY, width: W, height: H })
  .modulate({ saturation: 0.25, brightness: 1.03 })
  .composite([{ input: marker, left: W / 2 - M / 2, top: H / 2 - M / 2 }])
  .png()
  .toFile(OUT);

console.log(`Mapa: ${OUT} (${tiles.length} pločica)`);
