'use client'

import React, { useEffect, useState } from 'react';

import Image from 'next/image'
import Navbar from '@/components/molecules/navbar'
import Footer from '@/components/organisms/footer';
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css'

import "./page.module.css"
import OverlayCard from '@/components/organisms/OverlayCard';

import Hero from '@/components/organisms/Hero';
import Highlights from '@/components/molecules/highlights';
import Projects from '@/components/molecules/Projects';
import Gallery from '@/components/molecules/gallery';
import Bullet from '@/components/molecules/bullet';


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
    {
      id: '2',
      image: '/projects/thumbnails/aliada.png',
      title: 'A Fresh Look for the Future of Domestic Services',
      company: 'Aliada',
      URL: 'aliada',
    },
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

  const galleryData = [
    { url: '/concepts/img-1.png', description: 'App CDMX Redesign' },
    { url: '/concepts/img-2.png', description: 'Sales Report App' },
    { url: '/concepts/img-3.png', description: 'Cinema Tickets Concept' },
    { url: '/concepts/img-4.png', description: 'Cloud Status Mobile App' },
    { url: '/concepts/img-5.png', description: 'Image Recognition App' },
    { url: '/concepts/img-6.png', description: 'Cinema Tickets Concept 2' },
    { url: '/concepts/img-7.png', description: 'News App for Milenio' },
    { url: '/concepts/img-8.png', description: 'Movie Listing Component' },
    // Add more images and descriptions here
  ];

  const education = [
    { title: 'Computer Science', desc: 'Instituto Politécnico Nacional', year: '2010 - 2014' },
    { title: 'Software Development', desc: 'Instituto Politécnico Nacional', year: '2007 - 2010' },
  ]

  const courses = [
    { title: 'Front End Developer', desc: 'DEV.F', year: '2014' },
    { title: 'UX Design', desc: 'DEV.F', year: '2015' },
    { title: 'Design Sprint', desc: 'Google Launchpad Accelerator', year: '2016, 2019, 2022' },
  ]

  const media = [
    { title: 'Shark Tank Mexico', desc: 'Pitching Careme, S6 E5', year: '2022' },
  ]

  const academic = [
    { title: 'El futuro del trabajo Latinx y sus trabajos del futuro', desc: 'Universidad Tecmilenio', year: '2022' },
    { title: 'Sé Líder', desc: 'Universidad de Monterey', year: '2019' },
    { title: 'Design Thinking', desc: 'Design Week Mexico, Edición Puebla', year: '2019' },
  ]

  const language = [
    { title: 'Spanish', desc: 'Native', year: '' },
    { title: 'English', desc: 'Profesional', year: '' },
    { title: 'French', desc: 'Basic', year: '' },
  ]
  
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
              <Image src="/photos/me.jpg" height={500} width={644} alt='José Luis Rosas Baza'></Image>
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
          Discover the stories behind my designs where creativity meets functionality, showcasing how thoughtful solutions can transform user experience.
          </p>
          <Projects projects={projectsData} />
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Concepts</h6>
          <p className='easy'>
            Dive into a gallery of experimental designs, where I play with ideas and innovations, crafting unique solutions purely for the joy of creation.
          </p>
          <Gallery items={galleryData}></Gallery>
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Education</h6>
          {education && education.length > 0 && (
            <div className='d-flex gap-300 flex-wrap'>
              {education.map((item, index) => (
                <Bullet key={index} title={item.title} desc={item.desc} year={item.year}></Bullet>
              ))}
            </div>
          )} 
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Courses</h6>
          {courses && courses.length > 0 && (
            <div className='d-flex gap-300 flex-wrap'>
              {courses.map((item, index) => (
                <Bullet key={index} title={item.title} desc={item.desc} year={item.year}></Bullet>
              ))}
            </div>
          )} 
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Media Appearances</h6>
          {media && media.length > 0 && (
            <div className='d-flex gap-300 flex-wrap'>
              {media.map((item, index) => (
                <Bullet key={index} title={item.title} desc={item.desc} year={item.year}></Bullet>
              ))}
            </div>
          )} 
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Academic Colaborations & Talks</h6>
          {academic && academic.length > 0 && (
            <div className='d-flex gap-300 flex-wrap'>
              {academic.map((item, index) => (
                <Bullet key={index} title={item.title} desc={item.desc} year={item.year}></Bullet>
              ))}
            </div>
          )} 
        </section>

        <section className='d-flex flex-direction-column gap-150'>
          <h6>Languages</h6>
          {language && academic.length > 0 && (
            <div className='d-flex gap-300 flex-wrap'>
              {language.map((item, index) => (
                <Bullet key={index} title={item.title} desc={item.desc} year={item.year}></Bullet>
              ))}
            </div>
          )} 
        </section>

      </main>
      <Footer></Footer>
    </>
  )
}
