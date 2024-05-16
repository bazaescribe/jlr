"use client"

import React from 'react';
import ProjectDetailTemplate from '@/components/frames/ProjectPage';

const projectData = {
  logo: '/projects/atomic/devf.png',
  titleQuote: "Atomic: The building blocks for tech education",
  shortDescription: "Built to support the development of cutting-edge educational platforms, Atomic embodies DEVF's commitment to innovation and excellence in technology education.",
  coverPhoto: '/projects/atomic/cover.png',
  numbers: [
    { number: '15k', description: 'Estudiantes' },
    { number: '1k', description: 'Instructores' },
    { number: '30', description: 'Países' },
    { number: '100k', description: 'Usuarios registrados' },
  ],
  companyDesc: "DEV.F is a leading ed-tech startup founded in 2014, dedicated to developing technology skills through innovative educational programs. DEV.F focuses on social mobility by providing accessible, high-quality training in digital skills and coding. Their mission-driven approach has created the largest tech community in Latin America, empowering students and professionals to enhance their careers and contribute to the tech industry. ",
  introduction: "Over the past ten years, DEV.F has built technology to serve tens of thousands of students across Latin America. During this time, a wide variety of problems have been solved by many different people with diverse visions. However, to reach the next hundred thousand students, the experience must be of the same high quality as it was for the very first batches. Whether you are just starting in the tech world or perfecting your skills, you should feel the very best experience possible.",
  details: [
    { 
      image: '/projects/atomic/graphic-1.png', 
      description: "With numerous ongoing projects and a diverse range of products, DEVF required a cohesive design system to streamline development and maintain consistency. 'Atomic' was developed to address this need, providing a robust framework that supports the company's engineers across multiple platforms, including internal tools, marketing pages, e-learning platforms, the main website, and mailing systems. This design system ensures efficiency, scalability, and a unified user experience, vital for managing the complexity of DEVF's operations."
    },
    { 
      image: '/projects/atomic/graphic-2.png', 
      description: "The shift to remote learning prompted DEVF to update its design language and communication strategies. These enhancements were essential to effectively reach and engage students across Latin America, ensuring a consistent and immersive learning experience despite the geographical distances."
    },
    { 
      image: '/projects/atomic/graphic-3.png', 
      description: "A key component of Atomic is its robust typographic system and curated color palette. These elements ensure uniformity, usability, hierarchy, and accessibility across all DEV.F platforms. The typographic system provides consistent text styles for easy reading and clear visual hierarchies. The color palette enhances user interaction and accessibility, making all visual elements inclusive. Together, they strengthen DEV.F's brand identity and improve the overall user experience.",
    },
    { 
      image: '/projects/atomic/graphic-4.png', 
      description: "Buttons and inputs are standardized to provide a uniform experience, making interactions intuitive and reliable. Form controls are optimized for usability, allowing users to complete tasks efficiently and with minimal friction. Cards offer a flexible way to present information in a clear and organized manner, enhancing content discoverability and engagement."
    },
  ],
  videoGallery : [
    '/projects/atomic/led.mov',
    '/projects/atomic/switch.mov',
    '/projects/atomic/tool.mov',
    '/projects/atomic/cta.mov',
  ],
  galleryData: [
    { url: '/projects/atomic/img-1.png', description: 'Test results component' },
    { url: '/projects/atomic/img-2.png', description: 'Class visualization' },
    { url: '/projects/atomic/img-3.png', description: 'Student Small Card' },
    { url: '/projects/atomic/img-4.png', description: 'Overall performance' },
    { url: '/projects/atomic/img-5.png', description: 'Lessons and content' },
    { url: '/projects/atomic/img-6.png', description: 'Instructor review' },
    // Add more images and descriptions here
  ],
  bgColor: '#160032',  // Add the background color here
  color: '#fff'
};

const ProjectDetailPage = () => {
  return (
    <ProjectDetailTemplate {...projectData} />
  );
};

export default ProjectDetailPage;
