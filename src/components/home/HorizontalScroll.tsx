"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-175vw",
        ease: "none",
        duration: 20,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "-50% top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-4">Our Story</h2>
      <div ref={triggerRef} className="overflow-hidden">
        <div ref={sectionRef} className="w-[300vw] flex flex-row relative items-center space-x-10">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="w-[50vw] shrink-0 rounded-3xl overflow-hidden">
              <div className={`w-full h-[40vh] rounded-3xl ${index % 2 === 0 ? 'bg-red-700' : 'bg-black'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;