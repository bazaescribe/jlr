"use client" 

import { link } from "fs/promises";
import "./style.css"
import Link from 'next/link'
import { useEffect } from "react";

const Herotwo = () => {
  useEffect(() => {
    const blob = document.querySelector('.blob') as HTMLElement | null;

    
    const moveBlob = (e: MouseEvent) => {
      if (blob) {
        blob.style.left = e.clientX + 'px';
        blob.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', moveBlob);

    return () => window.removeEventListener('mousemove', moveBlob);
  }, []);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789"

  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement; // Cast the event target to HTMLElement

      if (!target.dataset.originalText) {
        target.dataset.originalText = target.textContent || '';
      }
      
      let iterations = 0;
      const interval = setInterval(() => {
        const originalText = target.dataset.originalText || '';
        const newText = Array.from(originalText)
          .map(() => letters.charAt(Math.floor(Math.random() * letters.length)))
          .join('');
        target.textContent = newText;

        if(iterations >= 7) {
          clearInterval(interval);
          target.textContent = originalText; // Reset to original text
        }

        iterations += 1;
      }, 20);
    };

    const handleMouseLeave = (e: Event) => {
      console.log("Hello there!! 👀");
    };

    // // Select all elements with the class '.menu-item'
    // const links = document.querySelectorAll('.menu-item');

    // // Add event listeners to each link
    // links.forEach(link => {
    //   link.addEventListener('mouseenter', handleMouseEnter);
    //   link.addEventListener('mouseleave', handleMouseLeave);
    // });

    // // Cleanup function to remove event listeners
    // return () => {
    //   links.forEach(link => {
    //     link.removeEventListener('mouseenter', handleMouseEnter);
    //     link.removeEventListener('mouseleave', handleMouseLeave);
    //   });
    // };
  }, []); // Empty dependency array means this runs once after initial render




  return (
    <section className="hero">
      <div className="blob"></div>
      {/*  */}
      <div className="hero-content">
        <div className="container d-flex flex-direction-column justify-content-center gap-150">
          <div>
            <h5 className="sans">José Luis Rosas Baza</h5>
            <h1 className="text-bold">product, strategy and innovation</h1>
          </div>
          <div id="menu">
            <Link href="#">
              <h4 className="menu-item">jlrosasb@gmail.com</h4>
            </Link>
            <Link href="#">
              <h4 className="menu-item">+52 55 1677 7083</h4>
            </Link>
            <Link href="#">
            <h4 className="menu-item">linkedin</h4>
            </Link>
            <Link href="#">
            <h4 className="menu-item">x/twitter</h4>
            </Link>
            <Link href="#">
              <h4 className="menu-item">resume</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herotwo;