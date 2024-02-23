'use client'

import React, { useEffect } from 'react';

import Image from 'next/image'
import Navbar from '@/components/molecules/navbar'
import Link from 'next/link'
import Position from '@/components/molecules/position';
import Footer from '@/components/organisms/footer';
import Project from '@/components/molecules/project';
import HorizontalScroll from '@/components/organisms/horizontalScroll';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ProjectSlide from '@/components/organisms/ProjectSlide';
import Herotwo from '@/components/organisms/Herotwo'
import Carousel from '@/components/molecules/carousel';
import "./page.module.css"

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const expandingArticle = document.getElementById('expandingArticle');
  
    const handleScroll = () => {
      if (expandingArticle) {
        const articleRect = expandingArticle.getBoundingClientRect();
        const articleTop = articleRect.top;
        const articleHeight = articleRect.height;
        const windowHeight = window.innerHeight;
  
        // Check if the article is in the viewport
        if (articleTop < windowHeight) {
          // Calculate the proportion of the article that is visible
          const visibleHeight = Math.min(articleHeight, windowHeight - articleTop);
          const proportionVisible = visibleHeight / articleHeight;
  
          // Calculate the width based on the proportion visible
          let width = 75 + (proportionVisible * 50); // Width ranges from 50% to 100%
          width = Math.min(100, width);
  
          expandingArticle.style.width = `${width}%`;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  
  return (
    <>
      <Navbar />
      <main>
      
        <div className="">
          <Herotwo></Herotwo>

          <section className='d-flex flex-direction-column justify-content-center align-items-center'>
            <article className="dark py-2000 text-align-center" id="expandingArticle">
              <div data-aos="fade-up" className="container">
                <h1>Can&#39;t stop <br /> rock & roll</h1>
              </div>
            </article>
          </section>

          <section className="dark pb-1500 zigzag" id="black-section">
            <div className="container d-flex flex-direction-column gap-1500 ">
              <div className="row gap-400">
                <div>
                  <div className="sticky-quote d-flex flex-direction-column gap-100">
                    <Image src='/photos/mock-image.png' width='560' height='469' alt='photo examples' layout='responsive'></Image>
                  </div>
                </div>
                <div className='d-flex flex-direction-column gap-400'>
                  <h4 aos-data="fade-in">
                    I&#39;m a designer and developer based in Mexico City with experience delivering products for millions of users, and yours could be next!
                  </h4>
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2020 - Present"
                    description="Lead design for multiple products, I bridge design and development to ensure successful deliverables."
                  />
                  <Position 
                    positionName="Head of Product" 
                    company="Homely" 
                    years="2017 - Present"
                    description="Oversaw product design initiatives, enhancing user experience and interface design."
                  />
                  <Position 
                    positionName="CPO and Founder" 
                    company="Care Me" 
                    years="2019 - 2023"
                    description="Directed product vision and strategy, leading the company&#39;s growth and innovation."
                  />
                  <Position 
                    positionName="Design School Director and Teacher" 
                    company="DEV.F" 
                    years="2017 - 2023"
                    description="Led educational programs and instructed design courses, fostering student growth and creativity."
                  />
                  <Position 
                    positionName="Product Designer" 
                    company="Aliada" 
                    years="2016 - 2017"
                    description="Focused on user-centric design solutions, improving product usability and aesthetics."
                  />
                  <Position 
                    positionName="Mobile Developer" 
                    company="Red Wolf Innovation" 
                    years="2015 - 2016"
                    description="Developed and optimized mobile applications, enhancing user engagement and functionality."
                  />
                  <Position 
                    positionName="Web Developer" 
                    company="CONDUSEF" 
                    years="2014"
                    description="Developed and maintained web solutions, enhancing user experience and functionality."
                  />
                </div>
              </div>
            </div>
          </section>

          <HorizontalScroll></HorizontalScroll>
            
          <section className='d-flex flex-direction-column py-1500 gap-1500'>
            <article>
              <div id="case-studies" className='container d-flex flex-direction-column gap-500 '>
                <div className='d-flex flex-direction-column gap-025'>
                  <h6 className="sans">Case Studies</h6>
                  <h2>Sweet dreams (Are made of this)</h2>
                  <p>
                    The projects featured here illustrate my approach to overcoming challenges, my commitment to functional aesthetics, and my continuous pursuit of pushing the boundaries of what is possible in product design.
                  </p>
                </div>
                

                <div className='row gap-100'> 
                  <Project client="devf" title="A tech education journey in Latin America" />
                </div>
              </div>
            </article>

            <article>
              <div id="projects"></div>
              <div id="case-studies" className='container d-flex flex-direction-column gap-500 '>
                <div className='d-flex flex-direction-column gap-025'>
                  <h6 className="sans">Case Studies</h6>
                  <h3>Sweet dreams (Are made of this)</h3>
                  <p>
                    The projects featured here illustrate my approach to overcoming challenges, my commitment to functional aesthetics, and my continuous pursuit of pushing the boundaries of what is possible in product design.
                  </p>
                </div>
                

                <div className='row gap-100'> 
                  <Project client="devf" title="A tech education journey in Latin America" />
                </div>
              </div>
            </article>

            
            
            <div className="d-flex flex-direction-column text-align-center">
              <h5>other colaborations</h5>
              <Carousel></Carousel>
            </div>
            
          </section>

          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
