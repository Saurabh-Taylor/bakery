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
      {
        translateX: 0,
      },
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
      {/* A return function for killing the animation on component unmount */ }

      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef}  className='overflow-hidden  mb-8'>
      <div ref={sectionRef} className=' w-[300vw]  flex flex-row relative items-center space-x-10  '>
        <div className='w-[50vw] h-[] shrink-0 rounded-3xl overflow-hidden ' >
          <div className='w-full bg-red-700 h-[40vh] rounded-3xl' ></div>
        </div>
        <div className='w-[50vw] h-[] shrink-0 rounded-3xl overflow-hidden ' >
          <div className='w-full bg-black h-[40vh] rounded-3xl' ></div>
        </div>
        <div className='w-[50vw] h-[] shrink-0 rounded-3xl overflow-hidden ' >
          <div className='w-full bg-red-700 h-[40vh] rounded-3xl ' ></div>
        </div>
        <div className='w-[50vw] h-[] shrink-0 rounded-3xl overflow-hidden ' >
          <div className='w-full bg-black h-[40vh] rounded-3xl' ></div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalScroll