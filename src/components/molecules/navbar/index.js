import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Link from 'next/link';
import Image from 'next/image';
import "./style.css";
import Logo from '@/components/atoms/logo';

const Navbar = ({ className = '' }) => {
  // State to track if the special class should be applied
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Use the `scrolled` state to toggle the class dynamically
  const navClass = `${className} ${scrolled ? 'scrolled' : ''}`;

  return (
    <>
      <nav className={navClass}>
        <div className="container">
          <Link href="/">
            <Image src="/emoji.png" width='80' height='80' alt='Memoji José Luis Rosas Baza'></Image>
          </Link>
          <div className="menu">
            <Link href="https://wa.me/525516777083?text=Hey%20Jose%20Luis%2C%20let's%20work%20together" className='btn secondary'>
              my resume
            </Link>
            <Link href="https://wa.me/525516777083?text=Hey%20Jose%20Luis%2C%20let's%20work%20together" className='btn main'>
              let&#39;s connect
            </Link>
          </div>
        </div>
      </nav>
      <div className="bottom-nav">
        <div className="floating-bar">
          <div className="button">About me</div>
          <div className="button">Highlights</div>
          <div className="button">Projects</div>
          <div className="button main">Connect</div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
