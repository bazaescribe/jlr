import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Link from 'next/link';
import Image from 'next/image';
import "./style.css";
import Logo from '@/components/atoms/logo';
import OverlayCard from '@/components/organisms/OverlayCard';

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

  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <nav className={navClass}>
        <div className="container">
          <Link href="/">
            <Image src="/emoji.png" width='64' height='64' alt='Memoji José Luis Rosas Baza'></Image>
          </Link>
          <div className="menu">
            <button onClick={() => setOverlayOpen(true)} className='btn main'>let&#39;s connect</button>
          </div>
        </div>
      </nav>
      <div className="bottom-nav">
        <div className="floating-bar">
          <div className="button">About me</div>
          <div className="button">Highlights</div>
          <div className="button">Projects</div>
          <button onClick={() => setOverlayOpen(true)} className='button main'>Connect</button>
        </div>
      </div>

      <OverlayCard isOpen={isOverlayOpen} onClose={() => setOverlayOpen(false)}>
          <div className="my-200">
            <h3>
              🥳
            </h3>
            <h6>Let&#39;s Connect!</h6>
            <p>
              It will be awesome to work together. Let&#39;s have a talk and start collaborating.
            </p>
          </div>
          <Link href="https://api.whatsapp.com/send/?phone=525516777083&text=Hey+Jose+Luis%2C+let%27s+work+together&type=phone_number&app_absent=0">
            <button className="btn ghost">💬 Whatsapp</button> 
          </Link>
          <Link href="mailto:jlrosasb@gmail.com">
            <button className="btn ghost">📧 jlrosasb@gmail.com</button>  
          </Link>
          <Link href="tel:5516777083">
            <button className="btn ghost">☎️ +52 55 1677 7083</button>  
          </Link>
          <Link href="https://calendly.com/jlrosasb/30min" target='blank'>
            <button className="btn ghost">🗓️ Book a call</button> 
          </Link>
             
        </OverlayCard>
      
    </>
  );
};

export default Navbar;
