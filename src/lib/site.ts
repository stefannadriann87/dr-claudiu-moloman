export const siteConfig = {
  name: "Urgențe Veterinare Non Stop Iași",
  title: "Urgente Veterinare Non Stop Iasi | Dr. Claudiu Moloman",
  description:
    "Servicii de urgențe veterinare non stop în Iași. Dr. Claudiu Moloman oferă asistență medicală veterinară 24/7 pentru animalele de companie. Programări și consultații la 0749 276 692.",
  keywords: [
    "urgente veterinare",
    "veterinar non stop",
    "urgente veterinare Iasi",
    "medic veterinar Iasi",
    "cabinet veterinar urgente",
    "asistenta veterinara 24/7",
    "Dr. Claudiu Moloman",
  ],
  author: "Dr. Claudiu Moloman",
  slogan: "Grijă, Compasiune, Profesionalism",
  tagline: "Asistență veterinară de urgență 24/7 în Iași",
  phoneDisplay: "0749 276 692",
  phoneTel: "+40749276692",
  phoneHref: "tel:+40749276692",
  address: {
    street: "Tătărași, Vasile Lupu 106B",
    locality: "Iași",
    region: "Iași",
    postalCode: "700259",
    country: "România",
    countryCode: "RO",
  },
  geo: {
    latitude: 47.1739,
    longitude: 27.5728,
  },
  themeColor: "#0c4a6e",
  foundingYear: 2013,
  experienceYears: 12,
  mapsQuery: "Tătărași, Vasile Lupu 106B, Iași, România",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Vasile+Lupu+106B+Iasi&output=embed",
  copyrightYear: 2026,
} as const;

export const images = {
  profile: {
    src: "https://i.ibb.co/FkNwZ4N8/wmremove-transformed.png",
    alt: "Dr. Claudiu Moloman - Medic Veterinar Urgențe Non Stop Iași",
    width: 680,
    height: 510,
  },
  gallery: [
    {
      src: "https://i.ibb.co/MWdMFrK/De-Watermark-ai-1753020209486.jpg",
      alt: "Dr. Claudiu Moloman - Cabinet Urgențe Veterinare Iași",
      title: "Dr. Claudiu Moloman în cabinetul veterinar din Iași",
    },
    {
      src: "https://i.ibb.co/tgyRxqd/De-Watermark-ai-1753020260008.jpg",
      alt: "Cabinet Veterinar Urgențe Non Stop Iași - Echipamente Medicale",
      title: "Echipamente medicale moderne pentru urgențe veterinare",
    },
    {
      src: "https://i.ibb.co/k6GBbYgq/De-Watermark-ai-1753020107906-cleanup.png",
      alt: "Tratament Urgențe Veterinare Iași - Îngrijire Animale",
      title: "Tratament profesional pentru animale de companie în Iași",
    },
  ],
} as const;

export const emergencySituations = [
  "Traumatisme și accidente",
  "Intoxicații și otrăviri",
  "Probleme respiratorii acute",
  "Probleme gastro-intestinale severe",
  "Convulsii și probleme neurologice",
  "Hemoragii și răni deschise",
  "Naștere dificilă (distocie)",
] as const;

export const serviceAdvantages = [
  "Disponibilitate 24/7, inclusiv weekend și sărbători",
  "Intervenție rapidă în situații critice",
  "Cabinet complet echipat pentru urgențe",
  "Experiență în tratarea cazurilor complexe",
  "Locație centrală în Iași, ușor accesibilă",
  "Consultanță telefonică imediată",
] as const;

export const services = [
  {
    title: "Consultații generale și de specialitate",
    description:
      "Examinări complete pentru diagnosticarea problemelor de sănătate",
  },
  {
    title: "Vaccinări și tratamente preventive",
    description: "Protecție împotriva bolilor comune la animale",
  },
  {
    title: "Deparazitări și microcipare",
    description: "Eliminarea paraziților și identificarea permanentă",
  },
  {
    title: "Analize și diagnostic",
    description: "Teste de laborator pentru diagnosticul precis",
  },
  {
    title: "Sfaturi personalizate",
    description: "Ghidare pentru îngrijirea optimă a animalului tău",
  },
] as const;

export const faqItems = [
  {
    question: "Este cabinetul deschis non-stop?",
    answer:
      "Da, cabinetul este disponibil 24/7, inclusiv weekend și sărbători. Vă rugăm să sunați înainte la 0749 276 692 pentru programare.",
  },
  {
    question: "Ce tipuri de urgențe veterinare tratați?",
    answer:
      "Tratăm toate tipurile de urgențe veterinare: traumatisme, intoxicații, probleme respiratorii acute, probleme gastro-intestinale severe, convulsii, hemoragii și naștere dificilă.",
  },
  {
    question: "Unde se află cabinetul?",
    answer:
      "Cabinetul se află în Iași, în zona Tătărași, pe strada Vasile Lupu 106B. Locația este centrală și ușor accesibilă.",
  },
] as const;

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  }
  return "https://urgente-veterinare-non-stop-iasi.vercel.app";
}
