# Dr. Claudiu Moloman — Urgențe Veterinare Non Stop Iași

Landing page modern în **Next.js 16** (App Router), Tailwind CSS 4, SEO local și infrastructură GA4/GTM cu **Consent Mode v2**.

## Development

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Environment

Copiază `.env.example` în `.env.local` și setează:

- `NEXT_PUBLIC_SITE_URL` — URL-ul canonic de producție
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — opțional
- `NEXT_PUBLIC_GTM_ID` — opțional

Fără ID-uri de analytics, site-ul funcționează fără tracking (banner de consimțământ apare doar după configurare GA/GTM).

## Deploy

```bash
npm run build
npm run start
```

Compatibil Vercel. Setează variabilele de mediu în dashboard înainte de go-live.

## Conținut

Textele, telefonul, adresa și imaginile provin de pe site-ul existent al clientului.
