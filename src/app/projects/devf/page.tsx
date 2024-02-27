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
      <Navbar></Navbar>

      <header className='dark future'>
        <div className="title">
          <div className="container d-flex flex-direction-column gap-500">
            <div className='d-flex flex-direction-column gap-050'>
              <h5 className="sans">dev.f</h5>
              <h2>Challenges in the expansion of tech education</h2>
              <p>Following the lockdowns, the company shifted from in-person classes to remote ones, this boosted the impact but brought new challenges all across the team. </p>
            </div>
            <div className='full-width-image-container' style={{ height: '480px'}}>
              <Image src='/photos/devf-hub.png' width='1440' height='800' alt='devf-impact-hub'></Image>
            </div>
          </div>
        </div>
      </header>

      <section className='dark py-1000 d-flex flex-direction-column gap-1000'>
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
            DEV.F, one of the biggest coding bootcamps in Latin America, began its operations in 2015, offering in-person software development courses in Mexico City. Over time, the company expanded within the countrty and lately throught Latin America.
          </h4>
        </article>

        <article className='container'>
          <div className="bento-box">
            <div className="compartment compartment-a1">
              <p>since</p>
              <h4>2015</h4>
            </div>
            <div className="compartment compartment-a2">
              <p>over</p>
              <h4>13,000</h4>
              <p className="small">students</p>
            </div>
            <div className="compartment compartment-a3">
              <h4>3 million</h4>
              <p className="caption">hours of classes</p>
            </div>
            <div className="compartment compartment-photo">
            <div className='full-width-image-container' style={{ height: '600px'}}>
                  <Image src='/photos/devf-teacher.png' width='590' height='701' alt='teaching kids in devf'></Image>
                </div>
            </div>
            <div className="compartment compartment-c1">
              <h4>125x</h4>
              <p className="caption">net growth</p>
            </div>
            <div className="compartment compartment-c2">
              <h4>+100k</h4>
              <p className="caption">hours of content</p>
            </div>
            <div className="compartment compartment-c3">
              <h4>+30</h4>
              <p className="caption">countries</p>
            </div>
          </div>
        </article>

        <article className='container d-flex flex-direction-column gap-500'>
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Challenges</h3>
              <p>
              The transition to online courses significantly impacted dev.f&#39;s dynamics and expansion. This change prompted a reevaluation of the company&#39;s operational approach and student engagement.
              </p>
              <p>
              A major challenge for dev.f was sustaining interpersonal connections and educational quality in the online format. The remote environment posed distinct hurdles in replicating the engagement of traditional, in-person classes.
              </p>
            </div>
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Understanding</h3>
              <p>
                A thorough review focused on the company&#39;s growth, course offerings, and transition to online education. Analysis of financial reports, student enrollment data, and course feedback offered insights into the company&#39;s development and challenges.
              </p>
              <p>
                Interviews with students and teachers identified key online learning challenges, including communication, material accessibility, and educational quality, providing insights into the content management system&#39;s effectiveness.
              </p>
            </div>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/planning.png' width='1819' height='1143' alt='planning screenshot' layout='responsive' />
            </div>
            <p className="small">Priorization excersice to understan the things that every team within the company thought were the most important.</p>
          </div>

        </article>

        <article className='container  d-flex flex-direction-column gap-500'>
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Architecture</h3>
              <p>
                Two key elements have been instrumental in shaping the dev.f experience in its early years: content and community. Embracing this challenge, we embarked on a journey to design and eventually build a platform that could support these pillars in a remote setting.
              </p>
              <p>
              This process involved identifying the most crucial user flows and streamlining them. Our goal was to establish a set of rules that would facilitate the seamless delivery of content and foster human interactions in an easy-to-use and scalable manner. The result is a platform that effectively balances educational content with community engagement, even in a remote context.
              </p>
            </div>
            <div></div>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/course-arch.png' width='1819' height='1143' alt='planning screenshot' layout='responsive' />
            </div>
            <p className="small">
              This diagram illustrates the streamlined architecture of our courses and long-term programs, designed to unify communication and understanding across all community members, from the operations team to students. It demonstrates our commitment to a cohesive educational structure that simplifies interactions and enriches the learning experience.
            </p>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/sequence.png' width='1819' height='1143' alt='planning screenshot' layout='responsive' />
            </div>
            <p className="small">
              These sequence diagrams depict common user flows experienced by students during their courses. The design intentionally mirrors the in-person interactions students and teachers have been accustomed to for years, providing a seamless transition to the online environment.
            </p>
          </div>
          
        </article>

        <article className='container  d-flex flex-direction-column gap-500'>
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Styling</h3>
              <p>
                One of the secondary challenges identified was the presence of multiple products (such as the website, internal dashboards, dynamic reports, etc.) that led to user confusion regarding the legitimacy of different pages. To address this, we focused on modernizing the company&#39;s design language and unifying the appearance across our various technological offerings. This effort aimed to create a cohesive user experience and eliminate any uncertainty about the authenticity of our platforms.
              </p>
            </div>
            <div></div>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/typefaces.png' width='1819' height='1143' alt='devf typefaces' layout='responsive' />
            </div>
            <p className="small">
              Our modernized typefaces collection is designed for standard headings and content formats, offering dynamic adjustability for both mobile and desktop applications. This ensures consistency and readability across all devices, enhancing the user experience with responsive typography.
            </p>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/palette.png' width='1819' height='1143' alt='color palette for dev.f' layout='responsive' />
            </div>
            <p className="small">
              Designed for simplicity and versatility, this color palette is categorized into three distinct groups: Brand, Context, and Neutral. Each category offers a range of shades suited for various setups, such as dark and light modes, and provides visual cues to clarify the intended function of different components.
            </p>
          </div>
        </article>

        <article className='container  d-flex flex-direction-column gap-500'>
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Atomic Design System</h3>
              <p>
              After establishing the text format and color palette, we proceeded to develop the Design Language itself. Leveraging the development team&#39;s familiarity with Atomic Design principles, our design system was aptly named &#39;Atomic&#39;. This title, albeit straightforward, reflects our focus on foundational design elements. The system was crafted not only for design efficiency but also with a structure conducive to seamless translation into code components, bridging the gap between design and development.
              </p>
            </div>
            <div></div>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/atoms.png' width='1819' height='1143' alt='devf atos components' layout='responsive' />
            </div>
            <p className="small">
              This is a collection of the most basic Atom components, every more complex component use at least one of this.
            </p>
          </div>

          <div className="row gap-500">
            <div className='video-container'>
              <video width="320" height="240" autoPlay playsInline loop muted>
                <source src="/video/cta.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='video-container'>
              <video width="320" height="240" autoPlay playsInline loop muted>
                <source src="/video/switch.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="row gap-500">
            <div className='video-container'>
              <video width="320" height="240" autoPlay playsInline loop muted>
                <source src="/video/tool.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='video-container'>
              <video width="320" height="240" autoPlay playsInline loop muted>
                <source src="/video/led.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </article>

        <article className='container  d-flex flex-direction-column gap-500'>
          <div className="row gap-500">
            <div className='d-flex flex-direction-column gap-200'>
              <h3>Product Architecture and UI</h3>
              <p>
              Finally, we reached the stage where we could bring all our efforts together—from the initial understanding and schematization to implementing our components in prototypes and eventually in production. While the product is not yet complete, as it is a live product subject to change, the foundational principles and philosophy are firmly established, providing a solid base for future development.
              </p>
            </div>
            <div></div>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/sketch.png' width='1819' height='1143' alt='color palette for dev.f' layout='responsive' />
            </div>
            <p className="small">
              Early stage general product architecture sketch
            </p>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/desktop-3.png' width='1819' height='1143' alt='color palette for dev.f' layout='responsive' />
            </div>
            <p className="small">
              Desktop view for the Student&#39;s Home Page
            </p>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/desktop-1.png' width='1819' height='1143' alt='devf typefaces' layout='responsive' />
            </div>
            <p className="small">
              Desktop view for the Writen Content viewer
            </p>
          </div>

          <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/desktop-2.png' width='1819' height='1143' alt='color palette for dev.f' layout='responsive' />
            </div>
            <p className="small">
              Desktop view for the Course Catalog
            </p>
          </div>

          <div className="row gap-500">
            <div className='visual'>
              <div className='image-wrapper'>
                <Image src='/projects/devf/mobile-1.png' width='1819' height='1143' alt='color palette for dev.f' layout='responsive' />
              </div>
              <p className="small">
                Public Profile Mobile view
              </p>
            </div>
            <div className='visual'>
            <div className='image-wrapper'>
              <Image src='/projects/devf/mobile-2.png' width='1819' height='1143' alt='color palette for dev.f' layout='responsive' />
            </div>
            <p className="small">
              Video Viewer Mobile view
            </p>
          </div>
          </div>
          
        </article>


      </section>

      <Footer></Footer>
    </>
  );
}

