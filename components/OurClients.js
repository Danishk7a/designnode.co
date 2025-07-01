'use client';
import Image from 'next/image';

const logos = [
  '/clients/jamia.png',
  '/clients/interior.png',
  '/clients/kisana.png',
  '/clients/gradehood.png',
    '/clients/jamia.png',
  '/clients/interior.png',
  '/clients/kisana.png',
  '/clients/gradehood.png',
    '/clients/jamia.png',
  '/clients/interior.png',
  '/clients/kisana.png',
  '/clients/gradehood.png',
  // Add more logos if needed
];

export default function ClientLogoSlider() {
  // Double the logos for seamless looping
  const loopedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black py-20">
      <div className="slider-track flex w-max gap-12 animate-slide">
        {loopedLogos.map((logo, index) => (
          <div key={index} className="relative w-32 h-16 flex-shrink-0">
            <Image
              src={logo}
              alt={`Client Logo ${index}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .slider-track {
          display: flex;
        }

        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
