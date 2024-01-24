'use client'

import React, { useEffect } from 'react';

import Image from 'next/image'
import Navbar from '@/components/molecules/navbar'
import Link from 'next/link'
import Position from '@/components/molecules/position';
import Footer from '@/components/organisms/footer';
import Project from '@/components/molecules/project';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ProjectSlide from '@/components/organisms/ProjectSlide';
import Herotwo from '@/components/organisms/Herotwo'
import Carousel from '@/components/molecules/carousel';

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
      <main>
      <Navbar />
        <div className="">
          <Herotwo></Herotwo>

          <section className='d-flex flex-direction-column justify-content-center align-items-center'>
            <article className="dark py-900 text-align-center" id="expandingArticle">
              <div data-aos="fade-up" className="container">
                <h2>Can&#39;t stop <br /> rock & roll</h2>
                <p className="caption">building beautiful software for quite a while</p>
              </div>
            </article>
          </section>

          <section className="dark py-900">
            <div className="container">
              <div className="row gap-400">
                <div>
                  <div className="sticky-quote d-flex flex-direction-column gap-100">
                    <h3>What do I do?</h3>
                    <p>
                      I began coding at the young age of 10, quickly developing a fascination with the way we interact with technology. My diverse experience, ranging from government projects to early-stage startups, has honed my ability to design and deliver software that is not only beautiful but also highly functional.
                    </p>
                    <p>
                      I am driven by a desire to improve the lives of those who use the products I create, striving to make a positive impact on the people who place their trust in my work.
                    </p>
                  </div>
                </div>
                <div className='d-flex flex-direction-column gap-300'>
                  <h3>My experience</h3>
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
            
          <section>
            <div id="projects"></div>
            <div id="case-studies" className='container d-flex flex-direction-column gap-500 py-800'>
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
              <div className='row gap-500'> 
                <Project client="homely" title="Bringing joy to the enterprise" />
                <Project client="aliada" title="Making homes out of a million houses" />
              </div>
            </div>
            <Carousel></Carousel>
          </section>

          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
