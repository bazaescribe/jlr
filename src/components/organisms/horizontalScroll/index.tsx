"use client" 

import "./style.css"
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const HorizontalScroll = () => {
  const stickyRef = useRef<HTMLDivElement>(null); // If your sticky element is a div
  const wrapperRef = useRef<HTMLDivElement>(null); // Assuming the wrapper is also a div
  const [stickyTop, setStickyTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // New state for scroll progress

  useEffect(() => {
    const calculateInitialTop = () => {
      if (stickyRef.current && wrapperRef.current) {
        const wrapperTop = wrapperRef.current.offsetTop;
        const stickyTop = stickyRef.current.offsetTop - wrapperTop;
        setStickyTop(stickyTop);
      }
    };

    calculateInitialTop();

    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const currentScroll = window.scrollY + stickyTop - wrapperRef.current.offsetTop;
      const wrapperHeight = wrapperRef.current.clientHeight;
      const percentage = (currentScroll / wrapperHeight) * 100;

      if(percentage >= 0.0 && percentage <= 100) {
        setScrollProgress(percentage); // Update scroll progress state
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateInitialTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateInitialTop);
    };
  }, [stickyTop]);

  return (
    <div ref={wrapperRef} className="scroll-wrapper">
      <div ref={stickyRef} className="sticky-parent container">
        <div 
          className="scrolleable-block" 
          style={{ transform: `translateX(-${scrollProgress}%)` }} // Apply dynamic translation based on scroll progress
        >
          <div className="element">
            <h6 className="sans">Concepts</h6>
            <h2>Kickstart my heart</h2>
            <p>
              These are just some of the random ideas I create just for fun...
            </p>
          </div>
          <Image src='/concepts/cdmx.png' width='342' height='700' alt='concept' />
          <Image src='/concepts/ai.png' width='342' height='700' alt='concept' />
          <Image src='/concepts/network.png' width='342' height='700' alt='concept' />
          <Image src='/concepts/movies.png' width='342' height='700' alt='concept' />
          <Image src='/concepts/sales-data.png' width='342' height='700' alt='concept' />
          <div className="element">
            <h6 className="sans">Concepts</h6>
            <h4>Cool, right?</h4>
            <p>
              Follow me and check more ideas constanlty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;