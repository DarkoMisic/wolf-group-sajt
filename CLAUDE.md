# CLAUDE.md — Wolf Group sajt

Korporativni sajt firme Wolf Group d.o.o. Bijeljina (BiH). Publika: dobavljači,
poslovni partneri, banke. Pun brief je u `BRIEF.md` — pročitaj ga pre bilo
kakvog rada. Ovaj fajl su pravila koja važe u svakoj sesiji.

## Šta je firma

Kompanija sa portfoliom: brend Beskraj (destilerija voćnih rakija, događaji,
kompleks u razvoju u Batkoviću), sopstvena bordoška etiketa u saradnji sa
Château Coutet (Saint-Émilion Grand Cru) i Château Le Grand Verdus (Bordeaux
Supérieur), uvoz i distribucija vina u BiH.

Marketing Wolf Group je odvojen od marketinga Beskraja. Beskraj je stavka u
portfoliju, ne ton sajta.

## Pravila

- Jezici: srpski (latinica) i engleski, ravnopravni, i18n rute `/sr/` i `/en/`.
  Jedan kod, dva prevoda u odvojenim fajlovima. Engleski nije prevod srpskog.
- Ton: korporativan, kratak, činjeničan, prvo lice množine. Bez priče, bez
  emocije. Zabranjene reči: vodeći, vrhunski, jedinstven, strast, eminentan,
  prestižan, premium, sinergija, rešenja, holistički, "tradicija i inovacija",
  "posvećeni izvrsnosti", "misija/vizija/vrednosti".
- Nikad ne pominjati: konsalting, Mega drvo, Wolf Property Services AB,
  posredništvo (drvne prerađevine, ogrevni materijal) — uklonjeno odlukom vlasnika.
- Apelacije uvek tačno: Coutet = Saint-Émilion Grand Cru; Le Grand Verdus =
  Bordeaux Supérieur. Nikad "oba iz Saint-Émiliona".
- Bez fotografije etikete dok ne stigne — samo dva imena i opis.
- Bez rokova otvaranja kompleksa.
- Tekstove ne izmišljati. Gde nema sadržaja: `[UPISATI]` u fajlu prevoda,
  nikad izmišljen podatak. Placeholder slike u pravim proporcijama, jasno
  označene.

## Vizuelno

- Podloga bela ili vrlo svetlo siva. Tekst ugalj `#1A1A1A`. Akcenat: zlato iz
  logoa (uzeti tačnu vrednost iz `logo/wolf-group-mark-gold.png`, približno
  `#A17B26`). Zlato samo za linije, hover, sitne akcente — nikad velike površine.
- Naslovi: serif (Playfair Display ili Libre Caslon). Tekst i navigacija:
  Jost. Ništa treće. Fontovi self-hosted.
- Logo iz `logo/`; referencirati na jednom mestu (jedna komponenta), jer se
  PNG kasnije menja za SVG. Horizontalni u zaglavlju, vertikalni na Početnoj
  i O nama, znak kao favicon i u footeru.
- Bez Beskraj estetike (matte black, Cinzel, poetika).
- Bez stock fotografija, bez ikonica iz setova, bez slajdera, bez brojača,
  bez traka sa logoima partnera.
- Pokret minimalan: fade pri učitavanju, hover na karticama.

## Tehnički

- Astro, statički. Hosting: Cloudflare Workers (statički sajt, `wrangler.jsonc`),
  povezan sa GitHub repozitorijumom `DarkoMisic/wolf-group-sajt` (privatni).
  Svaki push na `main` Cloudflare sam builduje i objavi.
  Privremena adresa: https://wolf-group.darko-s-misic.workers.dev
- Domen wolfdoo.com (registrovan kod Namecheap-a, DNS još kod Namecheap-a).
  Na domenu radi pošta (Namecheap Private Email): MX, SPF i DKIM zapisi se
  pri prelasku DNS-a na Cloudflare moraju sačuvati.
- Kontakt formular preko Formspree-a (ID u `src/config.ts`), bez backend-a.
  Poruke stižu na adresu podešenu u Formspree nalogu; ona se ne sme pojaviti
  u kodu.
- Slike AVIF/WebP, lazy load. Cilj Lighthouse 95+ na mobilnom.
- Analitika: Plausible ili ništa (trenutno ništa). Sajt ne postavlja kolačiće.
  Bez kolačić-banera.
- Pravni podaci (jedno mesto: `src/i18n/legal.ts`), u footeru, na Kontakt i
  O nama: Wolf Group d.o.o. Bijeljina, Glavna 101, 76312 Batković, BiH,
  matični broj 4404946850002, JIB 4404946850002, PDV 404946850002,
  +387 65 888 866, company@wolfdoo.com.

## Način rada

1. Prva sesija: pročitaj BRIEF.md, predloži strukturu foldera i komponenti,
   čekaj odobrenje pre pisanja koda.
2. Gradi stranicu po stranicu; posle svake stani i pokaži šta je urađeno.
3. Ne dodavati stranice, sekcije ni funkcionalnosti koje nisu u brief-u.
4. Ne menjati tekstove koje je vlasnik odobrio bez pitanja.

## Rad na projektu

- Node.js 22 je u `~/.local/node` (nije u sistemskom PATH-u):
  `export PATH=$HOME/.local/node/bin:$PATH`, pa `npm run dev` / `npm run build`
  / `npx astro check`.
- Tekstovi: `src/i18n/sr.ts` i `en.ts` (isti oblik), politika privatnosti u
  `src/i18n/privacy.sr.md` / `privacy.en.md`. Izvor odobrenih tekstova: `tekst/`.
- Stranice: `src/pages/{sr,en}/` samo pozivaju prikaz iz `src/views/`.
  Slugovi u `src/i18n/routes.ts`.
- Pomoćne skripte u `scripts/`: favicon, slika za deljenje (OG), statična mapa.
- Originalne fotografije (`slike/`) nisu u git-u; sajt koristi umanjene kopije
  iz `src/assets/foto/`.
