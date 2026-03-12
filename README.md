# 🚀 Kriti Kumari — AI & ML Developer Portfolio
🌐 **Live Portfolio:**  
https://portfolio-nine-psi-7cuxbd8ows.vercel.app/

A modern, animated personal portfolio website built with **React + TypeScript + Vite**, featuring GSAP-powered scroll animations, a dark/light theme toggle, and sections showcasing projects, skills, certificates, and more.

---

## ✨ Features

- **Animated Hero Section** — Full-screen intro with GSAP scroll-pinned zoom effect, name on left, profile photo (rounded-square) on right
- **Story So Far** — Scrollytelling section with GSAP-pinned image panel that switches visuals as you scroll through 4 life chapters
- **Skills Section** — Animated marquee track + categorised skill cards (ML, Languages, Backend, Tools)
- **Projects Section** — Expandable project cards with images, tech stack tags, and live/GitHub links
- **Certificates** — Showcase of certifications with issuer info and credential links
- **GitHub Intelligence** — GitHub activity and contribution visualisation
- **Resume** — Downloadable resume section
- **Contact** — Contact form with email integration
- **Dark / Light Theme** — Toggle between dark and classic (light) modes
- **Responsive** — Mobile-first layout, works across all screen sizes

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | GSAP (GreenSock) + Framer Motion |
| UI Components | Radix UI primitives |
| Routing | React Router v6 |
| State / Data | TanStack React Query |
| 3D / Canvas | Three.js |
| Form Handling | React Hook Form + Zod |
| Icons | Lucide React |

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── assets/              # Profile photo, local images
│   ├── components/
│   │   ├── HeroSection.tsx          # Animated landing section
│   │   ├── StorytellingSection.tsx  # Scrollytelling "Story So Far"
│   │   ├── SkillsSection.tsx        # Skills marquee + cards
│   │   ├── ProjectsSection.tsx      # Project showcase
│   │   ├── CertificatesSection.tsx  # Certificates
│   │   ├── GitHubSection.tsx        # GitHub activity
│   │   ├── ResumeSection.tsx        # Resume download
│   │   ├── ContactSection.tsx       # Contact form
│   │   ├── Navbar.tsx               # Floating navigation bar
│   │   ├── Footer.tsx               # Footer
│   │   └── ui/                      # shadcn/ui components
│   ├── pages/
│   │   └── Index.tsx        # Main page (assembles all sections)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── index.css            # Global styles & CSS variables
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kriti-portfolio.git

# Navigate into the project
cd kriti-portfolio/portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customisation

### Update Personal Info
- **Profile photo** → replace `src/assets/profile-photo.jpg`
- **Name / title / bio** → edit `src/components/HeroSection.tsx`
- **Story chapters** → edit the `chapters` array in `src/components/StorytellingSection.tsx`
- **Skills** → edit `skillCategories` in `src/components/SkillsSection.tsx`
- **Projects** → edit the projects array in `src/components/ProjectsSection.tsx`
- **Resume** → update the PDF link in `src/components/ResumeSection.tsx`

### Theme Colors
CSS variables are defined in `src/index.css`. Edit the `:root` and `.dark` blocks to change the color palette.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests (Vitest) |

---

## 📄 License

This project is for personal portfolio use. Feel free to fork and adapt it for your own portfolio.

---

> Built with ❤️ by **Kriti Kumari** — Machine Learning Engineer & Full-Stack Developer
