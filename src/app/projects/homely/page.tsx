"use client"

import React from 'react';
import ProjectDetailTemplate from '@/components/frames/ProjectPage';

const projectData = {
  logo: '/projects/homely/logo.png',
  titleQuote: 'Bringing the home joy to the workplace',
  shortDescription: 'From Homes to Corporate Spaces, Revolutionizing Cleaning Services for Enhanced Efficiency and Security Across Mexico.',
  coverPhoto: '/projects/homely/cover.png',
  numbers: [
    { number: '10k', description: 'Familias impactadas' },
    { number: '3k', description: 'Servicios mensuales' }
  ],
  companyDesc: "Homely.mx is a leading home services platform in Mexico, dedicated to simplifying and enhancing everyday life for its users. The company offers a wide range of on-demand services, including cleaning, maintenance, and repairs, all provided by thoroughly vetted professionals. With a strong emphasis on convenience, reliability, and customer satisfaction, Homely.mx has become a trusted partner for households across Mexico, ensuring their homes are well-maintained and their lives are stress-free.",
  introduction: "The company identified a significant opportunity in the B2B sector and decided to pivot its services to cater to businesses. This strategic shift required a comprehensive brand refresh and the development of new tools to support its expanded offerings. The project encompassed the redesign of the website, the creation of control apps for cleaners, and the development of a robust dashboard for clients to efficiently manage their services. This transformation aimed to enhance the user experience, streamline operations, and reinforce Homely.mx's position as a versatile and reliable service provider in the market.",
  details: [
    { 
      image: '/projects/homely/graph-1.png', 
      description: "It was essential to refresh the brand to align with the expectations of professional clients while retaining the warmth and approachability that had endeared the brand to its existing customers. The new communication strategy and platform design were carefully crafted to strike this balance.", 
    },
    { 
      image: '/projects/homely/graph-2.png', 
      description: "The updated brand identity incorporates sleek, modern elements that convey professionalism and reliability, essential for gaining the trust of business clients. At the same time, the design maintains a cozy, welcoming feel to ensure continuity and familiarity for long-time users. This dual approach ensures that Homely.mx remains relatable and approachable, even as it expands into new markets."
    },
    { 
      image: '/projects/homely/graph-3.png', 
      description: "One of the primary and most significant types of clients in Homely.mx's B2B pivot were owners of short stay rentals, such as those listed on Airbnb and Booking.com. To effectively serve this market, it was essential to design and develop tools that would help these clients seamlessly reserve services in sync with their unit bookings."
    },
    { 
      image: '/projects/homely/graph-4.png', 
      description: "Homely.mx's integrated store feature offers businesses a convenient way to order food and cleaning products directly through their service platform. This add-on simplifies the procurement process, allowing companies to seamlessly manage their workplace needs alongside their regular service bookings."
    },
    { 
      image: '/projects/homely/graph-5.png', 
      description: "This centralized dashboard empowers Homely.mx clients to have a clear and comprehensive view of their business operations, enabling them to manage their resources effectively and maintain high standards of service."
    }
  ],
  videoGallery: [

  ],
  galleryData: [
    
  ],
  bgColor: '#5F48F6',  // Add the background color here
  color: '#fff'
};

const ProjectDetailPage = () => {
  return (
    <ProjectDetailTemplate {...projectData} />
  );
};

export default ProjectDetailPage;
