# Thiru Dev — Interactive 3D Portfolio

An immersive, continuous single-page 3D developer portfolio built with React 19, TypeScript, Three.js, React Three Fiber, and GSAP.

I am an **Integrated M.Tech Software Engineering Scholar** at **Vellore Institute of Technology (VIT Vellore)**, graduating in **2028**. This portfolio showcases my full-stack software engineering discipline, interactive WebGL design, database architecture, and creative visual capabilities.

## Features

- **Cinematic 3D Scroll Journey**: Smooth camera timeline transitions guided by Lenis smooth scroll and GSAP ScrollTrigger.
- **Interactive 3D GLB Model**: Features an animated 3D Phoenix model (`phoenix_bird.glb`) with real-time cursor tracking and dynamic flight roll banking.
- **Pearl Glass UI Design System**: Minimalist glassmorphic interface with crisp dark slate typography (`#0f172a` / `#334155`) and Ice Cyan (`#0284c7`) accents on a porcelain backdrop (`#f8fafc`).
- **Interactive Spatial 3D Scenes**: Spatial 3D project cards, high-tech interactive skill spheres, 3D energy beacon core, and dynamic environmental terrain (procedural mountains, ocean, and volumetric clouds).
- **Executive CV & 1-Page PDF Export**: Interactive resume modal with 1-page printable A4 PDF export styling.
- **Secure Contact Integration**: Real email dispatch powered by Web3Forms targeting `thirudev086@gmail.com` with input validation, XSS sanitization, anti-spam rate limiting, and HTTP security headers.

## Tech Stack

- **Frontend**: React 19, TypeScript, HTML5, CSS3
- **3D & Visuals**: Three.js, React Three Fiber (R3F), `@react-three/drei`, GLTF Animations
- **Animations & Scrolling**: GSAP (ScrollTrigger), Lenis Smooth Scroll, Lucide React Icons
- **Build & Quality**: Vite 8, Oxlint, TypeScript Compiler (`tsc`)

## Project Structure

```
portfolio-react/
├── public/
│   ├── favicon.svg          # Circular base64 photo SVG icon
│   ├── profile.jpg          # Real portrait photo
│   └── phoenix_bird.glb     # 3D GLTF bird model
├── src/
│   ├── components/
│   │   ├── About.tsx        # Biography & academic details
│   │   ├── Contact.tsx      # Secure Web3Forms contact form
│   │   ├── Hero.tsx         # Typewriter header & action pills
│   │   ├── Navbar.tsx       # Floating glass capsule navigation
│   │   ├── Projects.tsx     # Featured projects showcase
│   │   ├── ResumeModal.tsx  # Executive 1-page CV modal
│   │   ├── Skills.tsx       # Interactive skill matrix
│   │   └── canvas/          # WebGL 3D spatial components
│   ├── hooks/               # Custom React hooks (useTypewriter)
│   ├── App.tsx              # Root component & smooth scroll coordinator
│   ├── index.css            # Design tokens & 1-page print styles
│   └── main.tsx             # Application entry point
├── index.html               # Main HTML entry with Security Meta headers
├── package.json             # Project dependencies & scripts
└── vite.config.ts           # Vite configuration
```

## Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Spidy022/portfolio-react.git
   cd portfolio-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Run lint & code audit**:
   ```bash
   npx oxlint
   ```

## Security & Best Practices

- Input sanitization and length limits on all form submissions.
- Strict HTTP security headers (`nosniff`, `DENY` frame options, `strict-origin-when-cross-origin`).
- Reverse tabnabbing defense (`rel="noreferrer"`) on all external links.
