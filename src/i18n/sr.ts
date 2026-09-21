// Tekstovi — srpski (latinica).
// Izvor: tekst/tekst-sr.md (odobreno). Ne menjati bez odobrenja vlasnika.
// Nedostajući podaci: [UPISATI].

const sr = {
  locale: 'sr-Latn',
  ogLocale: 'sr_RS',

  meta: {
    siteName: 'Wolf Group',
    description:
      'Wolf Group d.o.o. Bijeljina je kompanija sa sedištem u Batkoviću. Poslujemo u proizvodnji voćnih rakija i uvozu i distribuciji vina.',
  },

  ui: {
    skip: 'Preskoči na sadržaj',
    menu: 'Meni',
    mainNav: 'Glavna navigacija',
    language: 'Jezik',
    homeLink: 'Wolf Group — početna',
  },

  nav: {
    home: 'Početna',
    about: 'O nama',
    beskraj: 'Beskraj',
    wine: 'Vino',
    contact: 'Kontakt',
    privacy: 'Politika privatnosti',
  },

  legal: {
    country: 'Bosna i Hercegovina',
    countryShort: 'BiH',
    regNo: 'Matični broj',
    jib: 'JIB',
    vat: 'PDV broj',
    phone: 'Tel.',
    email: 'E-mail',
  },

  home: {
    lead: 'Wolf Group d.o.o. Bijeljina je kompanija sa sedištem u Batkoviću. Poslujemo u proizvodnji voćnih rakija i uvozu i distribuciji vina.',
    cards: [
      { page: 'beskraj', title: 'Beskraj', text: 'Destilerija voćnih rakija i kompleks u razvoju u Batkoviću.' },
      { page: 'wine', title: 'Vino', text: 'Sopstvena etiketa iz Bordeauxa i uvoz vina za tržište Bosne i Hercegovine.' },
      { page: 'about', title: 'O nama', text: 'Ko smo, gde smo i kako radimo.' },
    ],
  },

  about: {
    paragraphs: [
      'Wolf Group d.o.o. Bijeljina osnovan je 2019. godine, sa sedištem u Batkoviću kod Bijeljine. Osnivač i direktor je Darko Mišić. Kompanija je u porodičnom vlasništvu; članovi porodice Mišić učestvuju u vođenju poslova.',
      'Poslujemo u dve oblasti: proizvodnja voćnih rakija pod brendom Beskraj i uvoz i distribucija vina na tržištu Bosne i Hercegovine.',
      'U proizvodnji i selekciji vina oslanjamo se na sopstveno znanje. Osnivač je radio u berbi i proizvodnji u Saint-Émilionu u Bordeauxu i nosilac je WSET sertifikata. Odluke o proizvodnji, partnerima i razvoju donosimo sa namerom da posao traje.',
    ],
    peopleTitle: 'Ljudi',
    people: [
      { name: 'Darko Mišić', role: 'Osnivač i direktor' },
      { name: 'Branka Mišić', role: 'Administrator i šef nabavke' },
    ],
    timelineTitle: 'Hronologija',
    timeline: [
      { year: '2019', text: 'Osnivanje kompanije Wolf Group d.o.o. Bijeljina.' },
      { year: '[UPISATI]', text: '[UPISATI: 2–3 stavke sa godinama]' },
    ],
    legalTitle: 'Pravni podaci',
    photoAlt: 'Ručno sortiranje grožđa, Saint-Émilion',
    photoCaption: 'Saint-Émilion',
  },

  beskraj: {
    distilleryTitle: 'Destilerija',
    signatureTitle: 'Beskraj Signature',
    complexTitle: 'Kompleks u Batkoviću',
    winesTitle: 'Vina Beskraj',
    logoAlt: 'Beskraj logo',
    photoAlt: 'Berba šljive',
    instagramLabel: 'Instagram',
    instagramHandle: '@beskraj',
    instagramUrl: 'https://www.instagram.com/beskraj/',
    distillery:
      'Beskraj je destilerija voćnih rakija u Batkoviću i centralni brend kompanije. Asortiman čine rakije od šljive, dunje, kruške, jabuke i kajsije, posebne serije i likeri. Ceo proces — izbor voća, fermentacija, destilacija, odležavanje i punjenje — odvija se u kući.',
    signature:
      'Beskraj Signature je program degustacionih i gastronomskih događaja: vino, rakija i uparivanje sa hranom.',
    complex:
      'U Batkoviću je u razvoju kompleks koji obuhvata destileriju, prostore za svečanosti, degustacije i poslovne sastanke, terasu i smeštaj.',
  },

  wine: {
    ownLabel: {
      title: 'Sopstvena etiketa',
      body: 'U saradnji sa Château Coutet (Saint-Émilion Grand Cru) i Château Le Grand Verdus (Bordeaux Supérieur) razvijamo kupažu pod imenom Beskraj, koju Wolf Group ekskluzivno plasira.',
      firstBottles: 'Prve boce: [UPISATI]',
      estates: [
        { name: 'Château Coutet', appellation: 'Saint-Émilion Grand Cru' },
        { name: 'Château Le Grand Verdus', appellation: 'Bordeaux Supérieur' },
      ],
    },
    import: {
      title: 'Uvoz i distribucija',
      body: 'Uvozimo i distribuiramo vina na tržištu Bosne i Hercegovine, sa težištem na Francuskoj, Bordeauxu i Saint-Émilionu. Ponudu biramo na degustacijama i u direktnom kontaktu sa proizvođačima. Isporučujemo ugostiteljstvu, trgovini i privatnim kupcima. Za ponudu i cenovnik obratite nam se preko kontakt stranice.',
      producersLabel: 'Proizvođači u portfoliju',
      producers: '[UPISATI: lista proizvođača]',
    },
  },

  contact: {
    hoursLabel: 'Radno vreme',
    hours: 'Radnim danima 8–16',
    mapAlt: 'Mapa lokacije sedišta u Batkoviću',
    mapLabel: 'Mapa',
    mapLink: 'Otvori u Google mapama',
    form: {
      title: 'Upit',
      name: 'Ime i prezime',
      company: 'Firma',
      email: 'E-mail',
      topic: 'Tema',
      topics: ['Vino', 'Beskraj', 'Dobavljači', 'Drugo'],
      message: 'Poruka',
      optional: 'opciono',
      submit: 'Pošalji',
      sending: 'Slanje…',
      success: 'Poruka je poslata. Hvala.',
      error: 'Poruka nije poslata. Pokušajte ponovo ili nam pišite na company@wolfdoo.com.',
      privacy: 'Podatke iz upita obrađujemo u skladu sa',
      privacyLink: 'politikom privatnosti',
      inactive: '[UPISATI: Formspree ID — formular još nije aktivan]',
    },
  },
};

export default sr;
export type Dict = typeof sr;
