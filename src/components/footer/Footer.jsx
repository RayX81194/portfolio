'use client'
import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from "@gsap/react";

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: '50%' }, // Start hidden and slightly below
          { opacity: 1, y: '0%', duration: 2, ease: "power4.inOut", delay: 0.75 }
        );
    }, []);

    return (
        <section ref={footerRef} className='w-full'>
            <div className='footer flex items-center justify-between w-full px-8 py-10'>
                <ul className='flex gap-x-10 text-white'>
                    <li><a className='text-white tracking-wider active:text-[#a6ce4a] hover:text-yellow transition-all cursor-pointer' href="https://www.instagram.com/msphartiyal/">INSTAGRAM &#8599;</a></li>
                    <li><a className='text-white tracking-wider active:text-[#a6ce4a] hover:text-yellow transition-all cursor-pointer' href="https://www.youtube.com/@RayX81194">YOUTUBE &#8599;</a></li>
                    <li><a className='text-white tracking-wider active:text-[#a6ce4a] hover:text-yellow transition-all cursor-pointer' href="https://www.linkedin.com/in/manishphartiyal/">LINKEDIN &#8599;</a></li>
                    <li><a className='text-white tracking-wider active:text-[#a6ce4a] hover:text-yellow transition-all cursor-pointer' href="https://github.com/RayX81194">GITHUB &#8599;</a></li>
                </ul>
                <div className='[word-spacing:3px]'>
                    <h1 className='text-white tracking-wider'>DESIGNED BY <span className='text-yellow'>RAY</span></h1> 
                </div>
            </div>
        </section>
    );
};

export default Footer;
