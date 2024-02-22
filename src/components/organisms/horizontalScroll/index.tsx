"use client" 

import "./style.css"
import { useEffect, useRef, useState } from "react";

const HorizontalScroll = () => {
  const stickyRef = useRef(null);
  const wrapperRef = useRef(null);
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
            <h2>Hello world</h2>
          </div>
          <div className="element">
            <h2>Hello world</h2>
          </div>
          <div className="element">
            <h2>Hello world</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;