# 🚀 Rajkishore Pradhan — 3D Portfolio Website

> **SAP Technology Consultant & Software Engineer**  
> Certified SAP Consultant | SAP S/4HANA • BTP • Python • SQL • Industrial Automation  
> B.Tech (2024–2027) | Balasore College of Engineering and Technology (BCET)

A complete, high-performance 3D-styled portfolio website replicating the purple neon glow aesthetic, featuring custom 3D Pixar/chibi-style developer mascots, interactive Order-to-Cash (O2C) case studies, and a seamless Dark/Light theme toggle.

---

## 🎨 Visual Identity & Mascot Characters

1. **`male-hero.png`**: 3D cute male developer character wearing a purple "R" cap, round glasses, and denim overalls, floating comfortably with a sleek silver laptop displaying a glowing `</>` logo, surrounded by floating 3D enterprise tech badges (SAP, Python, SQL, BTP).
2. **`male-about.png`**: Confident SAP Consultant pose sharply dressed in a tailored black suit and purple tie inside a glowing neon purple circular backdrop.
3. **`male-cert.png`**: Academic graduation & professional accreditation pose in royal purple graduation gown and mortarboard cap holding a certification diploma.
4. **`male-contact.png`**: Warm and friendly waving character holding a smartphone for the "Get In Touch" section.

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3 (Deep violet-black `#0b0418` dark mode + Soft lavender `#f8f6ff` light mode)
- **Icons**: Lucide React
- **Animations**: CSS Keyframe float & pulse glows
- **Design System**: Glassmorphism (`backdrop-blur-md`), pill navbar, responsive timeline, technical deep-dive modal drawer

---

## 📂 Project Architecture

```
SAP PORTFOLIO/
├── public/
│   ├── favicon.svg                           # Custom monogram vector favicon
│   ├── Rajkishore_Pradhan_SAP_Resume.pdf     # Downloadable verified CV
│   └── images/
│       ├── male-hero.png                     # 3D mascot hero render
│       ├── male-about.png                    # 3D mascot about suit render
│       ├── male-cert.png                     # 3D mascot certification render
│       ├── male-contact.png                  # 3D mascot contact render
│       ├── sap-bg.png                        # SAP S/4HANA project visual
│       ├── scada-bg.png                      # SCADA automation visual
│       └── apfc-bg.png                       # Data analytics visual
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                        # Floating pill navbar with Dark/Light toggle
│   │   ├── Hero.jsx                          # Hero with social links, bio, and floating badges
│   │   ├── About.jsx                         # Organic circular mascot frame & 3 stat cards
│   │   ├── Skills.jsx                        # Interactive category tabs & proficiency meters
│   │   ├── Experience.jsx                    # Enterprise timeline (SAP, InternPe, Dr. Reddy's, SDI)
│   │   ├── CertificationsEducation.jsx       # 7-course SAP specialization & degree cards
│   │   ├── Projects.jsx                      # 3-card showcase with Code & Live Demo buttons
│   │   ├── ProjectModal.jsx                  # Technical deep-dive drawer
│   │   ├── Contact.jsx                       # Glassmorphic form & direct communication chips
│   │   ├── Footer.jsx                        # Back-to-top & copyright details
│   │   └── GlowBackground.jsx                # Ambient radial neon purple glowing orbs
│   ├── data/
│   │   └── portfolioData.js                  # Centralized structured data model
│   ├── App.jsx                               # Root application with theme persistence
│   ├── index.css                             # Tailwind directives & glassmorphic utilities
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 👨‍💼 Contact

- **Rajkishore Pradhan**
- **Email**: [rajkishorepradhan59@gmail.com](mailto:rajkishorepradhan59@gmail.com)
- **Phone**: [+91 8117959869](tel:+918117959869)
- **LinkedIn**: [linkedin.com/in/rajkishore-pradhan-ab74042b4](https://www.linkedin.com/in/rajkishore-pradhan-ab74042b4)
- **GitHub**: [github.com/rajkishore9583](https://github.com/rajkishore9583)
