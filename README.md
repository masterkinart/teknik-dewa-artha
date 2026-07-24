# PT. Teknik Dewa Artha — Next.js

Hasil konversi dari HTML/CSS statis ke Next.js 14 (App Router) + TypeScript.

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000

## Struktur

- `app/layout.tsx` — root layout (metadata, font Google)
- `app/page.tsx` — halaman utama (Hero, About, Legalitas, Contact, Footer)
- `app/components/Header.tsx` — navbar dengan toggle menu mobile (client component)
- `app/components/ProductsSection.tsx` — section produk dengan kategori interaktif (client component)
- `app/globals.css` — seluruh styling (dipindahkan dari `styles.css`)

## Build untuk production

```bash
npm run build
npm start
```
