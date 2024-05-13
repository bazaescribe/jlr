import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './Projects.module.css';

import Link from 'next/link';

const Projects = ({ projects }) => {

  return (
    <div className='d-grid grid-2-cols'>
      {projects.map((project) => (
        
        // eslint-disable-next-line react/jsx-key
        <Link href="#">
          <div
            key={project.id}
            className={styles.project}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                layout="fill"
                objectFit="cover"
                alt={project.title}
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.company}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
