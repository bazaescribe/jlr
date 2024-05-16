"use client"

import React from 'react';
import ProjectDetailTemplate from '@/components/frames/ProjectPage';

const projectData = {
  logo: '/projects/aliada/logo.png',
  titleQuote: 'A Fresh Look for the Future of Domestic Services',
  shortDescription: 'After hundreds of thousand services, the brand decided to improve their look and products',
  coverPhoto: '/projects/aliada/cover.png',
  numbers: [
    { number: '500k', description: 'Completed Services' },
    { number: '10k', description: 'Aliadas on board' },
    { number: '2015', description: 'Founding year' },
  ],
  companyDesc: "Aliada.mx is a Mexican startup that revolutionizes domestic cleaning services by connecting professional cleaners with households in need. Founded with a mission to dignify domestic work, Aliada empowers workers—primarily women—by offering them control over their schedules and working conditions. This platform not only provides reliable and secure cleaning services but also promotes financial inclusion and fair wages for its cleaners.",
  introduction: "In a bid to enhance user experience and strengthen its market presence, Aliada.mx embarked on a comprehensive branding overhaul. This project focused on refreshing the visual identity, refining the user interface of the website. By modernizing its look Aliada aims to attract a broader audience while continuing to provide dignified, high-quality services that prioritize both clients and cleaners.",
  details: [
    { 
      image: '/projects/aliada/graph-1.png', 
      description: "I've updated our color palette and refined our design elements to create a cleaner, more modern look. This subtle yet impactful change enhances our visual identity, making it more vibrant and engaging for our users.", 
    },
    { 
      image: '/projects/aliada/graph-2.png', 
      description: "Before our update, finding the right Aliada was a challenge. The previous version often displayed limited options, failing to accommodate users with flexible schedules or varying service needs. Setting up an address and service configuration frequently resulted in no available matches, leaving users frustrated. Our new design overcomes these hurdles, ensuring a smoother, more flexible booking experience tailored to your needs.",
    },
    { 
      image: '/projects/aliada/graph-3.png', 
      description: "Now, finding the perfect cleaner is a breeze. Simply enter your address to view all available Aliadas in your area, complete with their full availability. Compare skills, ratings, and time slots to select the best match for your needs. Our streamlined process ensures a flexible and user-friendly booking experience, putting you in control every step of the way."
    },
  ],
  videoGallery : [
    '/projects/aliada/aliadas.mov',
    '/projects/aliada/circle.mov',
  ],
  galleryData: [],
  bgColor: '#2C57FF',  // Add the background color here
  color: '#fff'
};

const ProjectDetailPage = () => {
  return (
    <ProjectDetailTemplate {...projectData} />
  );
};

export default ProjectDetailPage;
