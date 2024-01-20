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
                  <div className="sticky-quote">
                    <h3>What do I do?</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium blanditiis maiores beatae dolor. Excepturi ut nostrum, expedita repudiandae tempore tenetur obcaecati, quas eveniet neque facere, nulla ipsam cumque sequi ullam.
                    </p>
                  </div>
                </div>
                <div className='d-flex flex-direction-column gap-300'>
                  <h3>My experience</h3>
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
                  />
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
                  />
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
                  />
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
                  />
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
                  />
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
                  />
                  <Position 
                    positionName="Design Engineer" 
                    company="DEV.F" 
                    years="2019 - Present"
                    tags={['product', 'edtech', 'startup', 'design', 'front end']}
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
