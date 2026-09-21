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

- Astro, statički. Deploy Vercel ili Netlify. Domen wolfdoo.com (Namecheap).
- Kontakt formular preko Formspree ili Resend, bez backend-a.
- Slike AVIF/WebP, lazy load. Cilj Lighthouse 95+ na mobilnom.
- Analitika: Plausible ili ništa. Bez kolačić-banera.
- Pravni podaci u footeru i na Kontakt: Wolf Group d.o.o. Bijeljina,
  Glavna 101, 76312 Batković, BiH, JIB 4404946850002, +387 65 888 866,
  email `[UPISATI]`.

## Način rada

1. Prva sesija: pročitaj BRIEF.md, predloži strukturu foldera i komponenti,
   čekaj odobrenje pre pisanja koda.
2. Gradi stranicu po stranicu; posle svake stani i pokaži šta je urađeno.
3. Ne dodavati stranice, sekcije ni funkcionalnosti koje nisu u brief-u.
4. Ne menjati tekstove koje je vlasnik odobrio bez pitanja.
