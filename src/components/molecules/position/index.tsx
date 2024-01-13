"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';

const Position = ({ positionName, company, years, tags }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return(
    <>
      <div data-aos="fade-up" className='d-flex flex-direction-column gap-050'>
        <h6>{positionName}</h6>
        <div className="d-flex gap-100">
          <p className="caption text-secondary">{company}</p>
          <p className="caption text-secondary">{years}</p>
        </div>
        <div className="d-flex gap-050 flex-wrap">
          {tags.map((tag, index) => (
            <div key={index} className="tag">{tag}</div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Position;