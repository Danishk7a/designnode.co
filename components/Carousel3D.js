"use client";
import React, { useState, useRef, useEffect } from 'react';

const Carousel3D = () => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });
  const carouselRef = useRef(null);

  // Sample images - replace with your own
  const images = [
  'https://res-4.cloudinary.com/hg0vzg8or/image/upload/q_auto/v1/ghost-blog-images/10.4-BB-8.png',
  'https://www.founderjar.com/wp-content/uploads/2023/11/24.-Build-With-Flow-Awesome-3D-Website-Example.jpeg',
  '/design4.jpg',
  '/Design3.jpg',
  '/design2.jpg',
  '/colorui.png',
  '/abstract.jpeg',
  '/design5.jpg',
  '/design5.jpg',
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      rotation: currentRotation
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    const rotationSpeed = 0.5;
    const newRotation = dragStart.rotation + (deltaX * rotationSpeed);
    setCurrentRotation(newRotation);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, currentRotation]);

  const rotateToNext = () => {
    const itemAngle = 360 / images.length;
    setCurrentRotation(prev => prev - itemAngle);
  };

  const rotateToPrev = () => {
    const itemAngle = 360 / images.length;
    setCurrentRotation(prev => prev + itemAngle);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-8">
      <div className="relative">
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={`relative w-80 h-80 mx-auto cursor-${isDragging ? 'grabbing' : 'grab'} select-none`}
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          {/* 3D Carousel */}
          <div
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${currentRotation}deg)`
            }}
          >
            {images.map((image, index) => {
              const angle = (360 / images.length) * index;
              const translateZ = 270; // Distance from center

              return (
                <div
                  key={index}
                  className="absolute w-48 h-40 bg-white rounded-lg shadow-2xl overflow-hidden"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-96px', // Half of width (w-48 = 192px)
                    marginTop: '-144px', // Half of height (h-72 = 288px)
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    transformStyle: 'preserve-3d',
                    // backfaceVisibility: 'hidden'
                  }}
                >
                  {/* Image */}
                  <img
                    src={image}
                    alt={`Carousel item ${index + 1}`}
                    className="w-full h-full object-cover"
                      // style={{ width: '400px', height: 'auto', objectFit: 'cover' }}
                    draggable={false}
                  />
                  
                  {/* Reflection */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, 
                        rgba(255,255,255,0.1) 0%, 
                        transparent 30%, 
                        transparent 70%, 
                        rgba(255,255,255,0.05) 100%)`
                    }}
                  />
                  
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={rotateToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={rotateToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Instructions */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/70 text-sm">
            Drag to rotate • Click arrows to navigate
          </p>
        </div>

        {/* Reflection ground */}
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-96 h-48 -mt-8"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(255,255,255,0.1) 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        />
      </div>
    </div>
  );
};

export default Carousel3D;