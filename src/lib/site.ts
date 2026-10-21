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
  themeColor: "#0E2E27",
  foundingYear: 2013,
  experienceYears: 12,
  mapsQuery: "Tătărași, Vasile Lupu 106B, Iași, România",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Vasile+Lupu+106B+Iasi&output=embed",
  copyrightYear: 2026,
} as const;

export const images = {
  hero: {
    src: "/media/doctor-moloman.jpg",
    alt: "Dr. Claudiu Moloman, medic veterinar, în cabinetul din Iași",
    width: 1280,
    height: 720,
  },
  about: {
    src: "/media/doctor-cabinet.jpg",
    alt: "Dr. Claudiu Moloman în cabinetul din Tătărași",
    width: 1280,
    height: 720,
  },
  clinic: {
    src: "/media/clinic-room.jpg",
    alt: "Sala de consultații a cabinetului, luminată natural",
    width: 1600,
    height: 1200,
  },
  clinicDetail: {
    src: "/media/clinic-detail.jpg",
    alt: "Masă de consultație cu instrumente veterinare",
    width: 1200,
    height: 1200,
  },
  emergency: {
    src: "/media/doctor-moloman.jpg",
    alt: "Dr. Claudiu Moloman în cabinetul de urgențe din Iași",
    width: 1280,
    height: 720,
  },
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

export const emergencySteps = [
  {
    title: "Sunați la cabinet",
    description:
      "Răspund personal la telefon, la orice oră. Descrieți pe scurt ce s-a întâmplat.",
  },
  {
    title: "Stabilim împreună urgența",
    description:
      "Vă spun dacă este nevoie să veniți imediat și ce puteți face până ajungeți.",
  },
  {
    title: "Veniți la cabinet",
    description:
      "Vasile Lupu 106B, Tătărași. Vă aștept, inclusiv noaptea și weekend.",
  },
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
    title: "Urgențe veterinare 24/7",
    description: "Intervenții rapide în situații critice, zi și noapte",
  },
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
      "Da, cabinetul este disponibil 24/7, inclusiv weekend și sărbători. Vă rugăm să sunați înainte la 0749 276 692. În caz de urgențe, mă deplasez la cabinet la orice oră.",
  },
  {
    question: "Trebuie să fac programare pentru o consultație?",
    answer:
      "Da. Cabinetul funcționează doar pe bază de programare telefonică. Sunt singurul medic din cabinet, așadar vă rog să sunați înainte de a veni, la 0749 276 692.",
  },
  {
    question: "Ce urgențe veterinare tratați?",
    answer:
      "Tratăm urgențe veterinare precum traumatisme și accidente, intoxicații, probleme respiratorii acute, probleme gastro-intestinale severe, convulsii și probleme neurologice, hemoragii și răni deschise, precum și naștere dificilă (distocie).",
  },
  {
    question: "Unde se află exact cabinetul?",
    answer:
      "Cabinetul se află în Iași, zona Tătărași, pe strada Vasile Lupu 106B. Locația este centrală și ușor accesibilă. Vă rugăm să sunați înainte de deplasare.",
  },
  {
    question: "Ce animale primiți?",
    answer:
      "Primesc animale de companie: câini, pisici și alți companioni. Dacă nu sunteți sigur că pot prelua cazul, sunați la 0749 276 692 înainte de a veni.",
  },
  {
    question: "Pot suna doar pentru un sfat, fără să vin la cabinet?",
    answer:
      "Da. Ofer consultanță telefonică imediată și sfaturi pentru îngrijirea animalului. Sunați la 0749 276 692.",
  },
] as const;

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  }
  return "https://dr-moloman.vercel.app";
}
