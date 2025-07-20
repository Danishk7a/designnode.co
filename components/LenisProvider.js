'use client'; // for Next.js App Router

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // change to control scroll speed (0 to 1)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
 
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
