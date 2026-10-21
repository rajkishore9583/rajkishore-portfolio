# Rajkishore Pradhan — Developer & Industrial Automation Portfolio

A modern, high-performance, dark-mode portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, tailored for an Electrical & Industrial Automation Engineer.

Inspired by clean modern tech portfolio aesthetics (glassmorphism cards, ambient glowing cyan/emerald accents, fluid animations, and responsive layouts).

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3 (Slate/Zinc dark palette `#080c14` with vibrant Cyan & Emerald neon accents)
- **Icons**: Lucide React
- **Animations**: Framer Motion (staggered fade-ins, card hover 3D lifts, active tabs, spring modals)
- **Design System**: Glassmorphism (`backdrop-blur-md`), pill badges, sticky interactive navbar, responsive timeline, technical deep-dive modal.

---

## 📁 Project Architecture

```
PORTFOLIO/
├── public/
│   ├── favicon.svg             # Custom RP monogram vector favicon
│   └── images/                 # High-resolution profile & project images
│       ├── about-me.png
│       ├── bg_1.png
│       ├── proj_1.jpg          # APFC System Project
│       ├── proj_2.jpg          # Automated Water Level System
│       └── proj_3.jpg          # SAP S/4HANA Case Study
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with active section observer
│   │   ├── Hero.jsx            # Dynamic typing role, status badge, stats row, profile showcase
│   │   ├── About.jsx           # Engineering bio, spoken languages, 3 core domain cards
│   │   ├── Skills.jsx          # Interactive category tabs, animated proficiency meters
│   │   ├── Experience.jsx      # Interactive timeline (Dr. Reddy's SEZ, SDI, OPTCL, InternPe)
│   │   ├── Projects.jsx        # Project gallery with category filter and inspection
│   │   ├── ProjectModal.jsx    # Technical deep-dive drawer (challenge, solution, specs, metrics)
│   │   ├── CertificationsEducation.jsx # Dual-column academic & SDI/SAP credentials
│   │   ├── Contact.jsx         # Contact form, direct chips, 1-click clipboard copy
│   │   ├── Footer.jsx          # Back-to-top button, credits, social links
│   │   └── GlowBackground.jsx  # Ambient cyber grid & multi-color radial gradient orbs
│   ├── data/
│   │   └── portfolioData.js    # Centralized structured data model
│   ├── App.jsx
│   ├── index.css               # Tailwind directives, custom glassmorphism, scrollbars
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Opens the live development server with instant Hot Module Replacement (HMR) at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```
Serves the production build locally at `http://localhost:4173/`.

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: modern industrial automation portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Import the repo on [Vercel](https://vercel.com/):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**!
