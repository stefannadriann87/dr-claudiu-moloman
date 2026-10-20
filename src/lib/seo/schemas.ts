import {
  faqItems,
  getSiteUrl,
  images,
  siteConfig,
} from "@/lib/site";

export function businessSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Veterinarian", "LocalBusiness", "MedicalBusiness"],
    name: "Dr. Claudiu Moloman - Urgențe Veterinare Non Stop Iași",
    alternateName: siteConfig.name,
    image: [
      images.profile.src,
      ...images.gallery.map((item) => item.src),
    ],
    url: siteUrl,
    telephone: siteConfig.phoneTel,
    priceRange: "$$",
    currenciesAccepted: "RON",
    paymentAccepted: "Cash, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: `Vasile Lupu 106B, Tătărași`,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    areaServed: {
      "@type": "City",
      name: siteConfig.address.locality,
      addressCountry: siteConfig.address.countryCode,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii Veterinare",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Urgențe veterinare non stop",
            description:
              "Intervenții rapide în situații critice pentru animalele de companie, disponibile 24/7",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultații veterinare",
            description:
              "Consultații generale și de specialitate pentru animale de companie",
          },
        },
      ],
    },
    employee: {
      "@type": "Person",
      name: siteConfig.author,
      jobTitle: "Medic Veterinar",
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function websiteSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: `Site oficial pentru servicii de urgențe veterinare non stop în Iași - ${siteConfig.author}`,
    inLanguage: "ro-RO",
  };
}

export function jsonLdScript(data: Record<string, unknown> | unknown[]) {
  return JSON.stringify(data);
}
