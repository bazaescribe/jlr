import React from 'react';
import PropTypes from 'prop-types';
import styles from './Highlights.module.css';

const Highlights = ({ highlights }) => {
  return (
    <div className="d-grid grid-2-cols">
      {highlights.map((highlight, index) => (
        <div key={index} className={styles.highlight}>
          <div className='d-flex gap-075 flex-wrap'>
            <span className={styles.position}>{highlight.title}</span>  <span className={styles.dates}>{highlight.dates}</span>
          </div>
          
          <p>{highlight.description}</p>
        </div>
      ))}
    </div>
  );
};

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Highlights;
