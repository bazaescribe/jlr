import React, { useState } from 'react';
import styles from './Gallery.module.css'; // Assuming the CSS above is in Gallery.module.css

const Gallery = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    setIsExiting(false);
  };

  const handleOverlayClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedIndex(null);
      setIsExiting(false);
    }, 500); // Duration of the slide-out animation
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleOverlayClick = (e) => {
    // Check if the click is on the overlay (not on the content)
    if (e.target.classList.contains(styles.overlay)) {
      handleOverlayClose();
    }
  };

  return (
    <>
      <div className={styles.gallery}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleItemClick(index)}
          >
            <img src={item.url} alt={item.description} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className={`${styles.overlay} ${isExiting ? '' : styles.active}`}
          onClick={handleOverlayClick}
        >
          <div className={`${styles.overlayContent} ${isExiting ? styles.slideOut : ''}`}>
            <img src={items[selectedIndex].url} alt={items[selectedIndex].description} />
            <div className={styles.overlayDescription}>
              {items[selectedIndex].description}
            </div>
            <div className={styles.overlayNav}>
              <button onClick={handlePrev}>prev</button>
              <button onClick={handleNext}>next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
