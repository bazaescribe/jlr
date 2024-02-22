"use client" 

import { link } from "fs/promises";
import "./style.css"
import Link from 'next/link'
import { useEffect } from "react";
import Image from "next/image";

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

  }, []); // Empty dependency array means this runs once after initial render




  return (
    <header>
      <div className="blob"></div>
      <div id="wrapper">
        <div className="container d-flex flex-direction-column gap-200">
          <div className="d-flex flex-direction-column">
            <h6>
              José Luis Rosas Baza, product designer & developer
            </h6>
            <h1 className="text-bold">
              Turning visionary ideas into success
            </h1>
          </div>
          
          <div className="d-flex gap-100">
            <Link href="https://drive.google.com/file/d/1o0_JwWoaI4FKoLlviWyoIIWzfIubzxPi/view?usp=sharing" target="blank">
              <p className="btn secondary">my resume</p>
            </Link>
            <Link href="mailto:jlrosasb@gmail.com">
              <p className="btn main">let&#39;s connect</p>
            </Link>
          </div>
          <p>
            or you can give me a call and find me in my socials
          </p>
          <div className="d-flex gap-100">
            <Link href="https://twitter.com/jlrosasb" target="blank">
              <Image src="/icons/x.png" width='20' height='20' alt="x formerly twitter"/>
            </Link>
            <Link href="https://www.linkedin.com/in/jlrosasb/">
              <Image src="/icons/linkedin.png" width='20' height='20' alt="linkedin"/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Herotwo;