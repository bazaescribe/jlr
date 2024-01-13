"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import "./style.css"

const ProjectSlide = ( {clientName, title, description, clientLogoSrc, desktopImageSrc, mobileImageSrc, imageDescription, className } ) => {
  const completeClassName = `slide-fluid project sans ${className}`;
  
  useEffect(() => {
    AOS.init({
      duration: 900, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <article>
      <div className={completeClassName}>
        <div className="container">
          <div className='content'>
            <Image 
              src={clientLogoSrc} 
              alt={clientName}
              width='126' 
              height='28' 
            />
            <h4>{title}</h4>
            <p>
              {description}
            </p>
            <Link href="#">
              <h6 className='sans'>view more</h6>
            </Link>
          </div>
          <div className='photo' data-aos="fade-up">
            <Image 
              src={desktopImageSrc}
              alt={imageDescription}
              width='1140' 
              height='641' 
              layout='responsive' 
              className='desktop'
            />
            <Image 
              src={mobileImageSrc}
              alt={imageDescription}
              width='1' 
              height='1' 
              layout='responsive' 
              className='mobile'
            />
          </div>
        </div>
      </div>
    </article>
    
  );
};

export default ProjectSlide;
