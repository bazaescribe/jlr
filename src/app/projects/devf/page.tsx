"use client"

import React, { useEffect, useState } from 'react';

import Navbar from '@/components/molecules/navbar'
import Footer from '@/components/organisms/footer';
import Position from '@/components/molecules/position';

import Image from 'next/image'
import './style.css'

export default function DevF() {
  const [titleWidth, setTitleWidth] = useState('50%');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let newWidth = Math.min(100, 50 + (scrollY / windowHeight) * 100) + '%';
      setTitleWidth(newWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className="dark"></Navbar>
      <header>
        <div className='cover'>
          <Image src='/photos/devf-hub.png' width='1440' height='800'></Image>
        </div>
        <div className='title' style={{ width: titleWidth }}>
          <Image src='/img/devf.png' width='130' height='30' className='filter-invert'></Image>
          <h3 className='text-bold center text'>Kickstarting +15k Professional Dreams</h3>
        </div>
      </header>

      <section className="container py-800 d-flex flex-direction-column gap-800">
        <article>
          <h4>
            DEV.F is one of the biggest and most acclaimed coding bootcamps in LATAM, teaching development, data science, and design to thousands of students all across the region.
          </h4>
        </article>
        <article>
          <div className="row gap-150">
            <div className='d-flex flex-direction-column gap-200'>
              <p>
                In our fast-moving world, tackling tough challenges, it&#39;s essential to craft solutions that are technically sound, economically viable, and socially responsible. As a product designer, I&#39;m dedicated to innovative and sustainable problem-solving.
              </p>
              <p>
                Using design thinking and a user-focused approach, I aim to create products that address immediate needs while promoting long-term wellbeing. Each solution I develop has the power to make a positive impact, driving me to innovate for a sustainable future.
              </p>
              <div className='d-flex flex-direction-column gap-200'>
                
                <Position 
                  positionName="Design Engineer" 
                  company="DEV.F" 
                  years="2019 - Present"
                  tags={['product', 'edtech', 'startup', 'design', 'front end']}
                />
                <Position 
                  positionName="Lead Product Designer" 
                  company="homely.mx" 
                  years="2017 - Present"
                  tags={['product', 'ux','growth', 'services', 'social impact', 'managenent']}
                />
                <Position 
                  positionName="CPO & Founder" 
                  company="careme.mx" 
                  years="2019 - 2023"
                  tags={['venture', 'healthTech', 'product', 'growth', 'entrepreneurship']}
                />
                <Position 
                  positionName="Product Design School Director" 
                  company="DEV.F" 
                  years="2016 - 2017"
                  tags={['ux', 'ui', 'research', 'testing']}
                />
                <Position 
                  positionName="Product Designer" 
                  company="aliada.mx" 
                  years="2016 - 2017"
                  tags={['ux', 'ui', 'research', 'testing']}
                />
                <Position 
                  positionName="Junior Product Designer" 
                  company="Red Wolf Innovation" 
                  years="2018 - Present"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
                <Position 
                  positionName="Web Developer" 
                  company="CONDUSEF" 
                  years="2014 - 2015"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
                <Position 
                  positionName="Software Developer" 
                  company="Freelance" 
                  years="2010 - 2014"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
              </div>
            </div>
            <div>
              <div className='sticky-quote'>
                <Image src='/photos/devf-teacher.png' width='590' height='701'></Image>
                <p className="small">Fotografia propiedad de dev.f</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className='container'>
        <article>
          <h4>
            DEV.F is one of the biggest and most acclaimed coding bootcamps in LATAM, teaching development, data science, and design to thousands of students all across the region.
          </h4>
        </article>
        <article className="py-800">
          <div className="row gap-150">
            <div className='d-flex flex-direction-column gap-200'>
              <p>
                In our fast-moving world, tackling tough challenges, it&#39;s essential to craft solutions that are technically sound, economically viable, and socially responsible. As a product designer, I&#39;m dedicated to innovative and sustainable problem-solving.
              </p>
              <p>
                Using design thinking and a user-focused approach, I aim to create products that address immediate needs while promoting long-term wellbeing. Each solution I develop has the power to make a positive impact, driving me to innovate for a sustainable future.
              </p>
              <div className='d-flex flex-direction-column gap-200'>
                
                <Position 
                  positionName="Design Engineer" 
                  company="DEV.F" 
                  years="2019 - Present"
                  tags={['product', 'edtech', 'startup', 'design', 'front end']}
                />
                <Position 
                  positionName="Lead Product Designer" 
                  company="homely.mx" 
                  years="2017 - Present"
                  tags={['product', 'ux','growth', 'services', 'social impact', 'managenent']}
                />
                <Position 
                  positionName="CPO & Founder" 
                  company="careme.mx" 
                  years="2019 - 2023"
                  tags={['venture', 'healthTech', 'product', 'growth', 'entrepreneurship']}
                />
                <Position 
                  positionName="Product Design School Director" 
                  company="DEV.F" 
                  years="2016 - 2017"
                  tags={['ux', 'ui', 'research', 'testing']}
                />
                <Position 
                  positionName="Product Designer" 
                  company="aliada.mx" 
                  years="2016 - 2017"
                  tags={['ux', 'ui', 'research', 'testing']}
                />
                <Position 
                  positionName="Junior Product Designer" 
                  company="Red Wolf Innovation" 
                  years="2018 - Present"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
                <Position 
                  positionName="Web Developer" 
                  company="CONDUSEF" 
                  years="2014 - 2015"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
                <Position 
                  positionName="Software Developer" 
                  company="Freelance" 
                  years="2010 - 2014"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
              </div>
            </div>
            <div>
              <div className='sticky-quote'>
                <Image src='/photos/devf-teacher.png' width='590' height='701'></Image>
                <p className="small">Fotografia propiedad de dev.f</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>hello</section>

      <section className='container'>
        <article>
          <h4>
            DEV.F is one of the biggest and most acclaimed coding bootcamps in LATAM, teaching development, data science, and design to thousands of students all across the region.
          </h4>
        </article>
        <article className="py-800">
          <div className="row gap-150">
            <div className='d-flex flex-direction-column gap-200'>
              <p>
                In our fast-moving world, tackling tough challenges, it&#39;s essential to craft solutions that are technically sound, economically viable, and socially responsible. As a product designer, I&#39;m dedicated to innovative and sustainable problem-solving.
              </p>
              <p>
                Using design thinking and a user-focused approach, I aim to create products that address immediate needs while promoting long-term wellbeing. Each solution I develop has the power to make a positive impact, driving me to innovate for a sustainable future.
              </p>
              <div className='d-flex flex-direction-column gap-200'>

                <div className='d-flex flex-direction-column gap-050'>
                  <h2>
                    15,000 students
                  </h2>
                  <p>
                    enroled in Mexico, Colombia, the US and 11 more countries
                  </p>
                </div>

                <div className='d-flex flex-direction-column gap-050'>
                  <h2>
                    125x net growth
                  </h2>
                  <p>
                    enroled in Mexico, Colombia, the US and 11 more countries
                  </p>
                </div>

                <div className='d-flex flex-direction-column gap-050'>
                  <h2>
                    +600 new students
                  </h2>
                  <p>
                    enroled in Mexico, Colombia, the US and 11 more countries
                  </p>
                </div>
                
                
                <Position 
                  positionName="Design Engineer" 
                  company="DEV.F" 
                  years="2019 - Present"
                  tags={['product', 'edtech', 'startup', 'design', 'front end']}
                />
                <Position 
                  positionName="Lead Product Designer" 
                  company="homely.mx" 
                  years="2017 - Present"
                  tags={['product', 'ux','growth', 'services', 'social impact', 'managenent']}
                />
                <Position 
                  positionName="CPO & Founder" 
                  company="careme.mx" 
                  years="2019 - 2023"
                  tags={['venture', 'healthTech', 'product', 'growth', 'entrepreneurship']}
                />
                <Position 
                  positionName="Product Design School Director" 
                  company="DEV.F" 
                  years="2016 - 2017"
                  tags={['ux', 'ui', 'research', 'testing']}
                />
                <Position 
                  positionName="Product Designer" 
                  company="aliada.mx" 
                  years="2016 - 2017"
                  tags={['ux', 'ui', 'research', 'testing']}
                />
                <Position 
                  positionName="Junior Product Designer" 
                  company="Red Wolf Innovation" 
                  years="2018 - Present"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
                <Position 
                  positionName="Web Developer" 
                  company="CONDUSEF" 
                  years="2014 - 2015"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
                <Position 
                  positionName="Software Developer" 
                  company="Freelance" 
                  years="2010 - 2014"
                  tags={['UI/UX', 'Product Design', 'Creative']}
                />
              </div>
            </div>
            <div>
              <div className='sticky-quote'>
                <Image src='/photos/devf-teacher.png' width='590' height='701'></Image>
                <p className="small">Fotografia propiedad de dev.f</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer></Footer>
    </>
  );
}

