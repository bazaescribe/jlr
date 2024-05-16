import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectDetailTemplate.module.css';
import Navbar from '@/components/molecules/navbar';
import Footer from '@/components/organisms/footer';

import Gallery from '@/components/molecules/gallery';

const ProjectDetailTemplate = ({ 
  logo, 
  titleQuote, 
  shortDescription, 
  coverPhoto, 
  numbers, 
  companyDesc,
  introduction, 
  details, 
  videoGallery,
  galleryData,
  bgColor, color 
}) => {
  return (
    <div className={styles.projectDetail} style={{ backgroundColor: bgColor, color: color }}>

      <Navbar></Navbar>

      <header className={styles.header}>
        <div className='container d-flex flex-direction-column gap-100'>
          {logo && <img src={logo} alt="Project Logo" className={styles.logo} />}
          <h3 className={styles.titleQuote}>{titleQuote}</h3>
          <p className={styles.shortDescription}>{shortDescription}</p>
          <div className="mt-400">
          {coverPhoto && <img src={coverPhoto} alt="Cover Photo" className={styles.coverPhoto} />}
          </div>
          
        </div>
      </header>

      <div className="container py-500 d-flex flex-direction-column gap-500">

        <div className={styles.numbersSection}>
          {numbers.map((item, index) => (
            <div key={index} className={styles.numberItem}>
              <h4 className={styles.number}>{item.number}</h4>
              <span className={styles.description}>{item.description}</span>
            </div>
          ))}
        </div>

        <div className="{styles.introduction}">
          <h5 className='mb-100'>The company</h5>
          <p className='easy'>{companyDesc}</p>
        </div>

        <div className={styles.introduction}>
          <h5 className='mb-100'>The challenge</h5>
          <p className='easy'>{introduction}</p>
        </div>

        <div className={styles.details}>
          {details.map((item, index) => (
            <div key={index} className={styles.detailItem}>
              {item.image && <img src={item.image} alt={`Detail ${index + 1}`} className={styles.coverPhoto} />}
              <p className='caption mt-050'>{item.description}</p>
            </div>
          ))}
        </div>

        {videoGallery && videoGallery.length > 0 && (
          <div className={styles.videoGallery}>
            {videoGallery.map((src, index) => (
              <video key={index} autoPlay playsInline loop muted>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        )}

        {galleryData && galleryData.length > 0 && (
          <Gallery items={galleryData}></Gallery>
        )}

      </div>

      <Footer color={color}></Footer>
      
    </div>
  );
};

ProjectDetailTemplate.propTypes = {
  logo: PropTypes.string,
  titleQuote: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string,
  numbers: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  introduction: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string),
  bgColor: PropTypes.string
};

export default ProjectDetailTemplate;
