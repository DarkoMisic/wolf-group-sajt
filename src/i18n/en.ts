// Copy — English.
// Source: tekst/tekst-en.md (approved). Do not change without owner approval.
// Missing data: [ADD].
import type { Dict } from './sr';

const en: Dict = {
  locale: 'en',
  ogLocale: 'en_GB',

  meta: {
    siteName: 'Wolf Group',
    description:
      'Wolf Group d.o.o. Bijeljina is a company based in Batković, Bosnia and Herzegovina. We operate in fruit brandy production and in wine import and distribution.',
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    mainNav: 'Main navigation',
    language: 'Language',
    homeLink: 'Wolf Group — home',
  },

  nav: {
    home: 'Home',
    about: 'About',
    beskraj: 'Beskraj',
    wine: 'Wine',
    contact: 'Contact',
    privacy: 'Privacy policy',
  },

  legal: {
    country: 'Bosnia and Herzegovina',
    countryShort: 'BiH',
    regNo: 'Registration number',
    jib: 'Company ID (JIB)',
    vat: 'VAT number',
    phone: 'Tel.',
    email: 'Email',
  },

  home: {
    lead: 'Wolf Group d.o.o. Bijeljina is a company based in Batković, Bosnia and Herzegovina. We operate in fruit brandy production and in wine import and distribution.',
    cards: [
      { page: 'beskraj', title: 'Beskraj®', text: 'Fruit brandy distillery and a complex under development in Batković.' },
      { page: 'wine', title: 'Wine', text: 'Our own Bordeaux label and wine imports for the Bosnian market.' },
      { page: 'about', title: 'About', text: 'Who we are, where we are and how we work.' },
    ],
  },

  about: {
    paragraphs: [
      'Wolf Group d.o.o. Bijeljina was founded in 2019 and is based in Batković, near Bijeljina. Darko Mišić is the founder and managing director. The company is family-owned; members of the Mišić family take part in running it.',
      'We operate in two areas: fruit brandy production under the Beskraj® brand, and wine import and distribution in Bosnia and Herzegovina.',
      'In production and wine selection we rely on our own knowledge. The founder has worked in harvest and production in Saint-Émilion, Bordeaux, and holds a WSET qualification. Decisions on production, partners and growth are made with the intention that the business lasts.',
    ],
    peopleTitle: 'People',
    people: [
      { name: 'Darko Mišić', role: 'Founder and managing director' },
      { name: 'Branka Mišić', role: 'Administrator and head of procurement' },
    ],
    timelineTitle: 'Timeline',
    timeline: [
      { year: '2010', text: 'The idea takes shape.' },
      { year: '2014', text: 'First orchards planted.' },
      { year: '2019', text: 'Construction of the main production building and offices.' },
      { year: '2020', text: 'Fruit processing and distillation equipment installed. First distillates produced and laid down to age in French oak.' },
      { year: '2021', text: 'Orchards expanded.' },
      { year: '2022', text: 'The Beskraj name is adopted.' },
      { year: '2024', text: 'First gold medal for plum brandy quality, Slovenia.' },
      { year: '2025', text: 'Gold medal for quince brandy quality, Slovenia. The Beskraj name registered as a trademark with the Institute for Intellectual Property of Bosnia and Herzegovina. Bottle selected and label design completed.' },
    ],
    legalTitle: 'Company details',
    photoAlt: 'Sorting grapes by hand, Saint-Émilion',
    photoCaption: 'Saint-Émilion',
  },

  beskraj: {
    distilleryTitle: 'Distillery',
    signatureTitle: 'Beskraj Signature',
    complexTitle: 'Complex in Batković',
    winesTitle: 'Beskraj wines',
    logoAlt: 'Beskraj logo',
    photoAlt: 'Darko Mišić in the plum orchard, Batković',
    instagramLabel: 'Instagram',
    instagramHandle: '@beskraj',
    instagramUrl: 'https://www.instagram.com/beskraj/',
    distillery:
      "Beskraj® is a fruit brandy distillery in Batković and the company's principal brand. The range consists of plum, quince, pear, apple and apricot brandies, special releases and liqueurs. The entire process — fruit selection, fermentation, distillation, ageing and bottling — takes place in-house.",
    signature:
      'Beskraj Signature is our programme of tasting and gastronomic events: wine, brandy and food pairing.',
    complex:
      'A complex is under development in Batković, comprising the distillery, venues for celebrations, tastings and business meetings, a terrace and accommodation.',
  },

  wine: {
    ownLabel: {
      title: 'Our own label',
      body: 'In collaboration with Château Coutet (Saint-Émilion Grand Cru) and Château Le Grand Verdus (Bordeaux Supérieur) we are developing a blend under the Beskraj® name, marketed exclusively by Wolf Group.',
      firstBottles: 'First bottles: 2025 vintage.',
      estates: [
        { name: 'Château Coutet', appellation: 'Saint-Émilion Grand Cru' },
        { name: 'Château Le Grand Verdus', appellation: 'Bordeaux Supérieur' },
      ],
    },
    import: {
      title: 'Import and distribution',
      body: 'We import and distribute wine in Bosnia and Herzegovina, with a focus on Bordeaux and Saint-Émilion. Our selection is made at tastings and through direct contact with producers. We supply restaurants, hotels, wine merchants and private clients. For our list and pricing, please use the contact page.',
      producersLabel: 'Producers in our portfolio',
      producers: [
        { name: 'Château Cheval Blanc', appellation: 'Saint-Émilion' },
        { name: 'Château La Dominique', appellation: 'Saint-Émilion Grand Cru Classé' },
        { name: 'Château Bellevue', appellation: 'Saint-Émilion Grand Cru Classé' },
        { name: 'Château Grand Mayne', appellation: 'Saint-Émilion Grand Cru Classé' },
        { name: 'Château Coutet', appellation: 'Saint-Émilion Grand Cru' },
        { name: 'Domaine de L\'A', appellation: 'Castillon Côtes de Bordeaux' },
        { name: 'Château Le Grand Verdus', appellation: 'Bordeaux Supérieur' },
        { name: 'Château Haut-Bages Libéral', appellation: 'Pauillac, 5ème Grand Cru Classé en 1855' },
      ],
    },
  },

  contact: {
    hoursLabel: 'Business hours',
    hours: 'Monday to Friday, 8:00–16:00',
    mapAlt: 'Map showing our office in Batković',
    mapLabel: 'Map',
    mapLink: 'Open in Google Maps',
    form: {
      title: 'Enquiry',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      topic: 'Subject',
      topics: ['Beskraj', 'Wine', 'Suppliers', 'Other'],
      message: 'Message',
      optional: 'optional',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Your message has been sent. Thank you.',
      error: 'Your message could not be sent. Please try again or write to company@wolfdoo.com.',
      privacy: 'We process enquiry data in accordance with our',
      privacyLink: 'privacy policy',
      inactive: '[ADD: Formspree ID — form not yet active]',
    },
  },
};

export default en;
