'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Testimonials(){
         const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true, // makes it smooth as you scroll
        },
      }
    );
  }, []);
    return (
        <div className="bg-white  flex justify-center items-center text-5xl">
            Tstimonials
                <div style={{ height: '200vh', paddingTop: '100vh' }}>
      <div
        ref={boxRef}
        style={{
          width: '200px',
          height: '200px',
          background: 'tomato',
          margin: '0 auto',
        }}
      >
        Scroll to animate me
      </div>
    </div>
        </div>
    )
}



