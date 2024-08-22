'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import "./menu.css"
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from "@gsap/react";

const Menu = () => {  // Renamed to 'Menu'

  const links = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ]
  const container = useRef();
  const tl = useRef();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.inOut",
        delay: -0.75,
      })
  }, { scope: container })

  useEffect(() => {
    if (menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuOpen])

  return (
    <nav className='menu-container' ref={container}>
      <div className='menu-bar bg-black w-full'>
        <div className='menu-logo'>
          <Link className='tracking-wider' href="/">Manish</Link>
        </div>
        <div className='menu-open' onClick={toggleMenu}>
          <p className='tracking-wider'>Menu</p>
        </div>
      </div>
      <div className='menu-overlay'>
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Manish</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {links.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className='menu-info-col'>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Github &#8599;</a>
              <a href="#">Youtube &#8599; </a>
            </div>
            <div className='menu-info-col'>
              <p>info@manish.com</p>
              <p>76964 76964</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          View Projects
        </div>
      </div>
    </nav>
  )
}

export default Menu;  
