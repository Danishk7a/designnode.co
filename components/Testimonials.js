'use client';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    // Create animation for .box1
    gsap.fromTo(
      ".box1", 
      {
        backgroundColor: '#171717',  // Initial color
        x: -200,                    // Start position (off-screen left)
      },
      {
        backgroundColor: '#ff0000',  // End color
        x: 0,                       // End position (centered)
        scrollTrigger: {
          trigger: ".box1",         // Trigger the animation when .box1 enters the viewport
          start: "top 80%",          // When the top of the box reaches 80% of the viewport
          end: "top 30%",            // When the top of the box reaches 30% of the viewport
          scrub: true,               // Smooth scrolling
          markers: true,             // Show markers for debugging
          toggleActions: "play reverse play reverse", // Reverse when scrolling up
          onComplete: () => {        // Callback when animation is completed (end of the scroll)
            console.log("Box 1 animation completed!");
            gsap.to(".box1", {
              backgroundColor: "#00ff00", // Change to green when animation ends
              scale: 1.2,                 // Optional: Scale the box after animation completes
              duration: 1,                // Duration of the transition
            });
          },
          onLeave: () => {            // Callback when the animation leaves the viewport
            console.log("Box 1 has left the viewport.");
            gsap.to(".box1", {
              backgroundColor: "#171717", // Change back to original color when leaving
              scale: 1,                    // Reset scale
              duration: 1,                 // Duration of reset
            });
          },
        },
      }
    );

    // Create animation for .box2
    gsap.fromTo(
      ".box2", 
      {
        opacity: 0,                // Initial opacity
        x: 200,                    // Start position (off-screen right)
      },
      {
        opacity: 1,                // End opacity
        x: 0,                      // End position (centered)
        scrollTrigger: {
          trigger: ".box2",        // Trigger the animation when .box2 enters the viewport
          start: "top 80%",         // When the top of the box reaches 80% of the viewport
          end: "top 30%",           // When the top of the box reaches 30% of the viewport
          scrub: true,              // Smooth scrolling
          markers: true,            // Show markers for debugging
          toggleActions: "play reverse play reverse", // Reverse when scrolling up
          onComplete: () => {        // Callback when animation is completed (end of the scroll)
            console.log("Box 2 animation completed!");
            gsap.to(".box2", {
              opacity: 0.5,          // Change opacity after completion
              scale: 1.5,            // Optional: Scale the box
              backgroundColor: "#ff00ff", // Change to purple after completion
              duration: 1,           // Duration of the transition
            });
          },
          onLeave: () => {           // Callback when the animation leaves the viewport
            console.log("Box 2 has left the viewport.");
            gsap.to(".box2", {
              opacity: 0,            // Reset opacity when leaving
              scale: 1,              // Reset scale
              backgroundColor: "#171717", // Reset color
              duration: 1,           // Duration of reset
            });
          },
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div className="box1" style={boxStyle}>
        Box 1 (Left to Right)
      </div>
      <div className="box2" style={boxStyle}>
        Box 2 (Right to Left)
      </div>
    </div>
  );
};

// Simple styles for both boxes
const boxStyle = {
  width: "200px",
  height: "200px",
  backgroundColor: "coral",  // Initial background color
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "24px",
  borderRadius: "8px",
  margin: "50px auto",
};

export default ScrollAnimation;
