'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Home() {
  const containers = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation setup
    gsap.fromTo(
      containers.current,
      { y: '100%', opacity: 0 }, // Start from bottom and hidden
      { y: '0%', opacity: 1, duration: 2, stagger: 0.3, ease: "power3.inOut" }
    );

    // Animate the profile images
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: '50%' }, // Start hidden and slightly below
      { opacity: 1, y: '0%', duration: 2, ease: "power3.inOut" }
    );
  }, []);

  return (
    <>
    <section className="relative top-24 w-full h-full">
      <div className="mt-10 header-section z-0 overflow-hidden flex flex-col items-center justify-center leading-[130px]">
        <div className="profile-photo flex items-center gap-x-10 justify-center">
          <img
            ref={imageRef}
            src="profile.jpg"
            alt="Profile"
            className='grayscale brightness-110'
          />
        </div>
        <div
          ref={(el) => (containers.current[0] = el)}
          className="relative flex overflow-hidden"
        >
          <span className="text-[8rem] text-yellow mx-8">PHARTIYAL</span>
          <span className="text-[8rem] specialtext text-white mx-8">PHARTIYAL</span>
          <span className="text-[8rem] text-yellow mx-8">PHARTIYAL</span>
        </div>
        <div
          ref={(el) => (containers.current[1] = el)}
          className="relative flex overflow-hidden"
        >
          <span className="text-[8rem] specialtext text-white mx-8">MANISH</span>
          <span className="text-[8rem] text-yellow mx-8">MANISH</span>
          <span className="text-[8rem] specialtext text-white mx-8">MANISH</span>
        </div>
        <div
          ref={(el) => (containers.current[2] = el)}
          className="relative flex overflow-hidden"
        >
          <span className="text-[8rem] text-yellow mx-8">PHARTIYAL</span>
          <span className="text-[8rem] specialtext text-white mx-8">PHARTIYAL</span>
          <span className="text-[8rem] text-yellow mx-8">PHARTIYAL</span>
        </div>
      </div>
    </section>
    </>
  );
}
