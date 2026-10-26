import { useEffect, useRef } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Runs `onFrame` once per animation frame while the page scrolls or resizes, and once on mount.
export function useScrollFrame(onFrame) {
  const cb = useRef(onFrame);
  cb.current = onFrame;

  useEffect(() => {
    let ticking = false;
    const run = () => { ticking = false; cb.current(); };
    const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } };
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    run();
    return () => {
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
    };
  }, []);
}
