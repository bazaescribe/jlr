'use client'

import React, { useEffect, useState } from 'react';

import Image from 'next/image'
import Navbar from '@/components/molecules/navbar'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css'

import "./page.module.css"
import OverlayCard from '@/components/organisms/OverlayCard';

import Hero from '@/components/organisms/Hero';
import Highlights from '@/components/molecules/highlights';
import Projects from '@/components/molecules/Projects';

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

  const highlightsData = [
    {
      title: 'Founder of JLR',
      dates: 'Since 2024',
      description: 'Providing top-notch tech consulting services focusing on product design, development, and cloud solutions.',
    },
    {
      title: 'Chief Product Officer at Homely.mx',
      dates: 'Since 2017',
      description: 'Led the design and development of user-friendly interfaces, boosting customer engagement and satisfaction.',
    },
    {
      title: 'Design Engineer at DEVF',
      dates: 'Since 2022',
      description: 'Empowered students with the skills and knowledge to excel in the design field, while also guiding the overall direction of the design school.',
    },
    {
      title: 'Design School Director and Teacher at DEVF',
      dates: '2017 - 2022',
      description: 'Empowered students with the skills and knowledge to excel in the design field, while also guiding the overall direction of the design school.',
    },
    {
      title: 'CPO and Founder of CareMe.mx',
      dates: '2023 - Present',
      description: 'Gained invaluable experience in entrepreneurship, learning the intricacies of pitching for funding, and driving a startup from concept to execution.',
    },
    {
      title: 'Product Designer at Aliada.mx',
      dates: '2017 - 2019',
      description: 'Designed intuitive user experiences that streamlined processes and enhanced usability.',
    }
  ];

  const projectsData = [
    {
      id: '1',
      image: '/projects/thumbnails/homely.png', // Update with your actual image paths
      title: 'Bringing the home joy to the workplace',
      company: 'Homely',
      URL: 'homely',
    },
    // {
    //   id: '2',
    //   image: '/projects/thumbnails/aliada.png',
    //   title: 'Revitalizing Tech Legacy: A Brand Refresh for Tomorrow',
    //   company: 'Aliada',
    //   URL: 'aliada',
    // },
    {
      id: '3',
      image: '/projects/thumbnails/atomic.png',
      title: 'Atomic: The building blocks for tech education',
      company: 'DEV.F',
      URL: 'atomic',
    },
    // {
    //   id: '4',
    //   image: '/projects/thumbnails/careme.png',
    //   title: 'Empowering Care: Kickstarting a Caregiver Revolution',
    //   company: 'careme.mx',
    //   URL: 'careme',
    // },
    // {
    //   id: '5',
    //   image: '/projects/thumbnails/campus.png',
    //   title: 'Innovate to Educate: Launching a Next-Gen Learning Platform',
    //   company: 'DEV.F',
    //   URL: 'campus',
    // },
    // {
    //   id: '6',
    //   image: '/projects/thumbnails/promos.png',
    //   title: 'Strategic Growth: Streamlining Student Acquisition for Bootcamp Success',
    //   company: 'DEV.F',
    //   URL: 'funnel',
    // },
    // {
    //   id: '7',
    //   image: '/projects/thumbnails/jlr.png',
    //   title: 'My Signature Mark: Branding and Site for JLR Consulting',
    //   company: 'JLR Consulting',
    //   URL: 'jlr',
    // },
  ];
  
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className='py-1000 container d-flex flex-direction-column gap-800'>
       
        <Hero></Hero>

        <section className='d-flex flex-direction-column gap-100'>
          <h6>About me</h6>

          <p className='easy'>
            As a seasoned product designer with a robust background in web development and UX, I&#39;ve had the privilege of shaping digital experiences that delight users and achieve business goals. From teaching the next generation of designers to leading product strategy at innovative startups, my journey has been driven by a passion for design and a commitment to excellence.
          </p>
          <div className='d-grid grid-2-cols mt-100'>
            <div className="image-container">
              <Image src="/photos/aliada-con.png" height={500} width={644} alt='Conferencia de Aliadas'></Image>
            </div>
            <div className="image-container">
              <Image src="/photos/shark-tank.png" height={500} width={644} alt='Shark Tank Mexico'></Image>
            </div>
          </div>
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Experience highights</h6>
          <Highlights highlights={highlightsData} />
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Projects</h6>
          <p className='easy'>
            Here are some of my higher scope projects that showcase my expertise in product design, user experience, and development. Each project highlights my commitment to creating innovative and impactful digital solutions that drive engagement and deliver results. Explore these projects to see the breadth and depth of my work across different domains.
          </p>
          <Projects projects={projectsData} />
        </section>
        
      </main>
    </>
  )
}
