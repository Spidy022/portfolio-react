import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import SceneCanvas from './components/canvas/SceneCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Stop/Start Lenis scroll based on modal open state
  useEffect(() => {
    if (lenisRef.current) {
      if (cvOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [cvOpen]);

  // Custom Cursor lerp logic
  useEffect(() => {
    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    let currentX = -100;
    let currentY = -100;

    const updateRing = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setRingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ESC listener for Resume Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCvOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="scroll-root" style={{ position: 'relative', width: '100%' }}>
      {/* 3D Background WebGL Scene */}
      <SceneCanvas onOpenCV={() => setCvOpen(true)} />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className="cursor-ring"
        style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
      />

      {/* Navigation */}
      <Navbar onOpenCV={() => setCvOpen(true)} />

      {/* Main HTML Sections Layer */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero onOpenCV={() => setCvOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Clean Minimal Footer */}
      <footer style={{ position: 'relative', zIndex: 2, padding: '32px 8%', textAlign: 'center', borderTop: '1px solid rgba(15,23,42,0.08)', background: '#f8fafc', fontSize: 13, color: '#64748b' }}>
        <div>© 2026 Thiru Dev · Integrated M.Tech Software Engineering (VIT Vellore)</div>
      </footer>

      {/* Resume Document Modal */}
      <ResumeModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
