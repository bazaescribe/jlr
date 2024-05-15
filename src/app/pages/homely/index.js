import React from 'react';
import ProjectDetailTemplate from '@/components/frames/ProjectPage';

const projectData = {
  logo: '/path/to/logo.png',
  titleQuote: 'Innovative Solution for Modern Problems',
  shortDescription: 'A brief overview of the project goals and achievements.',
  coverPhoto: '/path/to/cover-photo.jpg',
  numbers: [
    { number: '10K', description: 'Users' },
    { number: '5', description: 'Awards' }
  ],
  introduction: 'This project aims to solve the problem of... (introduction content)',
  details: [
    { image: '/path/to/detail1.jpg', description: 'Detail description 1' },
    { image: '/path/to/detail2.jpg', description: 'Detail description 2' }
  ],
  gallery: [
    '/path/to/gallery1.jpg',
    '/path/to/gallery2.jpg'
  ],
  bgColor: '#f0f0f0'  // Add the background color here
};

const ProjectDetailPage = () => {
  return (
    <ProjectDetailTemplate {...projectData} />
  );
};

export default ProjectDetailPage;
