import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProfileParticleDissolve() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Subtle parallax float on scroll while maintaining 100% visibility
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: '#scroll-root',
        start: 'top top',
        end: '40% top',
        scrub: 1,
      },
      y: -30,
      scale: 1.05,
    });
  }, []);

  return (
    <div ref={containerRef} className="hero-profile-wrap">
      <img
        ref={imgRef}
        src="/profile.jpg"
        alt="Thiru Dev"
        className="hero-profile-img"
      />
      <div className="hero-profile-glow" />
    </div>
  );
}
