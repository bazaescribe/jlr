"use client"

import React, { useEffect, useState } from 'react';

import Navbar from '@/components/molecules/navbar'
import Footer from '@/components/organisms/footer';
import Position from '@/components/molecules/position';

import Image from 'next/image'
import './style.css'

export default function DevF() {

  return (
    <>
      <Navbar className="dark"></Navbar>

      <header className='dark future'>
        <div className="title">
          <div className="container d-flex flex-direction-column gap-500">
            <div className='d-flex flex-direction-column gap-050'>
              <h5 className="sans">dev.f</h5>
              <h2>Challenges in the expansion of tech education</h2>
              <p>Following the lockdowns, the company shifted from in-person classes to remote ones, this boosted the impact but brought new challenges to the team </p>
            </div>
            <div className='full-width-image-container' style={{ height: '480px'}}>
              <Image src='/photos/devf-hub.png' width='1440' height='800' alt='devf-impact-hub'></Image>
            </div>
          </div>
        </div>
      </header>

      <section className='dark py-1000 d-flex flex-direction-column gap-1k'>
        <article className="container d-flex flex-direction-column gap-400">

          <div className='d-flex flex-direction-column gap-100'>
            <div>
              <h5>Services provided</h5>
            </div>
            <div className='d-flex flex-wrap gap-100'>
              <div className="tag">strategy</div>
              <div className="tag">research</div>
              <div className="tag">design</div>
              <div className="tag">development</div>
              <div className="tag">management</div>
            </div>
          </div>

          <div className='d-flex flex-direction-column gap-100'>
            <div>
              <h5>Sector</h5>
            </div>
            <div className='d-flex flex-wrap gap-100'>
              <div className="tag">education</div>
            </div>
          </div>
          
        </article>

        <article className="container">
          <h4>
            DEV.F, a technological training company in Latin America, began its operations in 2015, offering in-person software development courses in Mexico City. Over time, the company expanded within the countrty and lately all across Latin America.
          </h4>
        </article>
        <article className="container">
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>So... what&#39;s up?</h3>
              <p>
                During the pandemic, dev.f&#39;s transition to online courses brought about exponential growth, leveraging the benefits of flexibility and reduced operational costs.
              </p>
              <p>
                However, this shift presented significant challenges, including the difficulty of creating interpersonal relationships that foster professional development and the need to maintain consistent educational quality despite the expansion and the incorporation of new instructors.
              </p>
              <div className='d-flex flex-direction-column gap-400'>
                <div>
                  <h2>Since 2016</h2>
                  <p>
                    re shapping the way people learn about technology
                  </p>
                </div>
                <div>
                  <h2>15,000 students</h2>
                  <p>
                    enroled in Mexico, Latin America and the US.
                  </p>
                </div>
                <div>
                  <h2>125x net growth</h2>
                  <p>
                    from 120 students in 2017 to over 15,000 in 2023
                  </p>
                </div>
                <div>
                  <h2>+600 new students</h2>
                  <p>
                    every month
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='sticky-quote d-flex flex-direction-column gap-050'>
                <div className='full-width-image-container' style={{ height: '600px'}}>
                  <Image src='/photos/devf-teacher.png' width='590' height='701' alt='teaching kids in devf'></Image>
                </div>
                <p className="small text-secondary-light">Fotografia propiedad de dev.f</p>
              </div>
            </div>
          </div>
        </article>

        <article className='container'>
          <div className="row gap-500">
            <div></div>
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Challenges</h3>
              <p>
              The transition to online courses significantly impacted dev.f&#39;s dynamics and expansion. This change prompted a reevaluation of the company&#39;s operational approach and student engagement.
              </p>
              <p>
              A major challenge for dev.f was sustaining interpersonal connections and educational quality in the online format. The remote environment posed distinct hurdles in replicating the engagement of traditional, in-person classes.
              </p>
            </div>
          </div>
        </article>

        <article className='container'>
          <div className='contain-image-container' style={{ height: '450px', background: 'white'}}>
            <Image src='/photos/planning.png' width='1200' height='466' alt='planning screenshot'></Image>
          </div>
        </article>

        <article className="container">
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Understanding</h3>
              <p>
                A thorough review focused on the company&#39;s growth, course offerings, and transition to online education. Analysis of financial reports, student enrollment data, and course feedback offered insights into the company&#39;s development and challenges.
              </p>
              <p>
                Interviews with students and teachers identified key online learning challenges, including communication, material accessibility, and educational quality, providing insights into the content management system&#39;s effectiveness.
              </p>
            </div>
            <div></div>
          </div>
        </article>

        <article className='container'>
          <div className='contain-image-container' style={{ height: '450px', background: 'white'}}>
            <Image src='/photos/sequence.png' width='1200' height='466' alt='diagrama de secuencia'></Image>
          </div>
        </article>

        <article className='container'>
          <div className="row gap-500">
            <div></div>
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Design & development</h3>
              <p>
              The design and development process prioritized scalability and rapid implementation. Efforts were concentrated on creating a flexible system that could easily accommodate the growing number of students and courses.
              </p>
              <p>
              The focus was on ensuring quick deployment of new features and updates to meet the dynamic needs of the online learning environment, while maintaining high standards of quality and user experience.
              </p>
              <p>
              During this phase many different technologies were used, the design tool of choice was Figma taking advantage of the variables and components features. Meanwhile the web development stack is React/Next for ensuring the best performance and compatibility with SEO.
              </p>
            </div>
          </div>
        </article>

        <article className='container d-flex flex-direction-column gap-500'>
          <div className="row gap-500">
            <div>
              <div className='contain-image-container' style={{ height: '450px', background: 'white'}}>
                <Image src='/photos/course-arch.png' width='1200' height='466' alt='arquitectura de los programas'></Image>
              </div>
            </div>
            <div>
              <div className='full-width-image-container' style={{ height: '450px', background: 'white'}}>
                <Image src='/photos/sketch-1.png' width='1200' height='466' alt='sketch para devf'></Image>
              </div>
            </div>
          </div>
          <div className="row gap-500">
            <div>
              <div className='full-width-image-container' style={{ height: '450px', background: 'white'}}>
                <Image src='/photos/sketch-2.png' width='1200' height='466' alt='sketch para devf'></Image>
              </div>
            </div>
            <div>
              <div className='full-width-image-container' style={{ height: '450px', background: 'white'}}>
                <Image src='/photos/sketch-3.png' width='1200' height='466' alt='sketch para devf'></Image>
              </div>
            </div>
          </div>
          <div className="row gap-500">
            <div>
              <div className='full-width-image-container' style={{ height: '720px', background: 'white'}}>
                <Image src='/photos/wireframe.png' width='1200' height='466' alt='wireframe vista principal de campus para devf'></Image>
              </div>
            </div>
          </div>
          <div className="row gap-500">
            <div>
              <div className='full-width-image-container' style={{ height: '720px', background: 'white'}}>
                <Image src='/photos/mockup-1.png' width='1200' height='466' alt='mockup vista principal de campus para devf'></Image>
              </div>
            </div>
          </div>
          <div className="row gap-500">
            <div>
              <div className='full-width-image-container' style={{ height: '720px', background: 'white'}}>
                <Image src='/photos/mockup-2.png' width='1200' height='466' alt='mockup para devf'></Image>
              </div>
            </div>
          </div>
          <div className="row gap-500">
            <div>
              <div className='full-width-image-container' style={{ height: '720px', background: 'white'}}>
                <Image src='/photos/mockup-3.png' width='1200' height='466' alt='mock up para devf'></Image>
              </div>
            </div>
          </div>
          <div className="row gap-500">
            <div>
              <div className='full-width-image-container' style={{ height: '450px', background: 'white'}}>
                <Image src='/photos/component-1.png' width='1200' height='466' alt='componentes controles'></Image>
              </div>
            </div>
            <div>
              <div className='full-width-image-container' style={{ height: '450px', background: 'white'}}>
                <Image src='/photos/component-2.png' width='1200' height='466' alt='colección de botones como componentes'></Image>
              </div>
            </div>
          </div>
        </article>


      </section>

      <Footer></Footer>
    </>
  );
}

