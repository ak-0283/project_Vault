
# Project Vault — Developer Portfolio

Modern, mobile-first portfolio built with **React (Vite)** + **Tailwind CSS**.

Includes:
- Live-project cards only (no source-code links)
- Dark/light theme toggle (saved preference)
- Mobile hamburger navigation
- Scroll-to-top button

## Run locally

```powershell
Set-Location "c:\Users\91600\OneDrive\Desktop\c c++\project_Vault"
npm install
npm run dev
```

## Customize content

- Profile: `src/data/profile.js`
- Projects: `src/data/projects.js`
- SEO/meta: `index.html` (title/description + Open Graph tags)
- Social preview image: `public/og.svg`

### Notes

- Theme is stored in `localStorage` under key `pv-theme`.
- Project cards intentionally only include a **Live project** button.

## 📌 Projects Note

You can view all the projects showcased in this portfolio here:

- 👉 [View my projects on Project Vault](https://projectvault-ten.vercel.app/)

## Build

```powershell
# Project Vault — Developer Portfolio

Modern, mobile-first portfolio built with **React (Vite)** + **Tailwind CSS**.

## ✨ Highlights

- 🔗 **Live projects only** (no source-code links)
- 🌓 **Dark / Light theme** toggle (saved)
- 🍔 **Mobile hamburger** navigation
- ⬆️ **Scroll-to-top** button
- 🧊 Dark glassmorphism UI + smooth hover/entrance animations

## ▶️ Run locally

```powershell
Set-Location "c:\Users\91600\OneDrive\Desktop\c c++\project_Vault"
npm install
npm run dev
```

## 🛠️ Customize content

- Profile info: `src/data/profile.js`
- Projects list (title/description/stack/liveUrl): `src/data/projects.js`

## 🧩 Project structure

- Reusable UI: `src/components/`
- Page sections: `src/sections/`
- Content/data: `src/data/`

## 🔍 SEO

- Meta tags + Open Graph: `index.html`
- Social preview image: `public/og.svg`
- Basic crawl files: `public/robots.txt`, `public/sitemap.xml`

## 🎨 Theming

- Theme is stored in `localStorage` under key `pv-theme`.
- Color tokens are CSS variables in `src/index.css` (dark + light palettes).

## 🏗️ Build

```powershell
npm run build
npm run preview
```

## 🚀 Deploy

- **Vercel / Netlify**: upload the repo and set build command to `npm run build` and output to `dist`.
- **GitHub Pages**: build locally and publish the `dist` folder (or configure an action).

## ✅ Notes

- Project cards intentionally show **only** a **Live project** button.
- If you don’t see changes after edits, restart dev server: `npm run dev`.
