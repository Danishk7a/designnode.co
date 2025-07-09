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
        color: '#757575',
        // filter:'blur(1px)'
        // Initial color
        // x: -200,  
        // 
                      // Start position (off-screen left)
      },
      {
        color: '#303030', 
         // End color
        x: 0,                       // End position (centered)
        scrollTrigger: {
          trigger: ".box1",         // Trigger the animation when .box1 enters the viewport
          start: "top 30%",          // When the top of the box reaches 80% of the viewport
          end: "top 10%",            // When the top of the box reaches 30% of the viewport
          scrub: true,               // Smooth scrolling
          // markers: true,             // Show markers for debugging
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
              color: "#303030", // Change back to original color when leaving
              scale: 1,                    // Reset scale
              duration: 1,                 // Duration of reset
            });
          },
        },
      }
    );

    gsap.fromTo(
      ".box2", 
      {
        color: '#757575',                // Initial opacity
        // x: 200,                    // Start position (off-screen right)
      },
      {
        color: '#ffffff',                // End opacity
        x: 0,                      // End position (centered)
        scrollTrigger: {
          trigger: ".box2",        // Trigger the animation when .box2 enters the viewport
          start: "top 30%",         // When the top of the box reaches 80% of the viewport
          end: "top 10%",           // When the top of the box reaches 30% of the viewport
          scrub: true,              // Smooth scrolling
          // markers: true,            // Show markers for debugging
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
              scale: 1,              // Reset scale
              color: "#ffffff", // Reset color
              duration: 1,           // Duration of reset
            });
          },
        },
      }
    );


        gsap.fromTo(
      ".box2", 
      {
        color: '#757575',                // Initial opacity
        // x: 200,                    // Start position (off-screen right)
      },
      {
        color: '#ffffff',                // End opacity
        x: 0,                      // End position (centered)
        scrollTrigger: {
          trigger: ".box3",        // Trigger the animation when .box2 enters the viewport
          start: "top 30%",         // When the top of the box reaches 80% of the viewport
          end: "top 10%",           // When the top of the box reaches 30% of the viewport
          scrub: true,              // Smooth scrolling
          // markers: true,            // Show markers for debugging
          toggleActions: "play reverse play reverse", // Reverse when scrolling up
          onComplete: () => {        // Callback when animation is completed (end of the scroll)
            console.log("Box 2 animation completed!");
            gsap.to(".box3", {
              opacity: 0.5,          // Change opacity after completion
              scale: 1.5,            // Optional: Scale the box
              backgroundColor: "#ff00ff", // Change to purple after completion
              duration: 1,           // Duration of the transition
            });
          },
          onLeave: () => {           // Callback when the animation leaves the viewport
            console.log("Box 2 has left the viewport.");
            gsap.to(".box3", {
              scale: 1,              // Reset scale
              color: "#ffffff", // Reset color
              duration: 1,           // Duration of reset
            });
          },
        },
      }
    );
  }, []);

  return (
    <div className="p-6" style={{ height: "100vh" }}>
      <div className="box1 text-2xl" >
     Lorem ipsum dolor sit, amet consectetur 
      <div className="box2 text-2xl" >
     We control your Sight
      </div>
       adipisicing elit. Facere eaque consequatur commodi distinctio maxime cum repudiandae iure ad. Repudiandae distinctio quidem quisquam expedita.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita quas aperiam harum. Perspiciatis repudiandae nisi iusto repellat sunt, consectetur praesentium quo sed.      <div className="box3 text-2xl" >
     guide your Attention
      </div>
      </div>



     
    </div>
  );
};



export default ScrollAnimation;
