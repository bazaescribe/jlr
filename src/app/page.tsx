import Image from 'next/image'
import Navbar from '@/components/molecules/navbar'
import Link from 'next/link'
import Position from '@/components/molecules/position';
import Footer from '@/components/organisms/footer';
import 'aos/dist/aos.css'
import ProjectSlide from '@/components/organisms/ProjectSlide';
import Herotwo from '@/components/organisms/Herotwo'
import Carousel from '@/components/molecules/carousel';

export default function Home() {

  return (
    <>
      
      <main>
        <div className="">

          <Herotwo></Herotwo>

          <section>
            {/* <div className="scrollwatcher"></div> */}

            <Navbar />
            <div id="intro"></div>
            <article className="container py-800">
              <div className="row gap-150">
                <div>
                  <h2 className='sticky-quote text-bold'>
                    Building a better <span className='highlight-pink'>future</span> through <span className='highlight-green'>innovation</span>
                  </h2>
                </div>
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
              </div>
              
            </article>
            <div id="projects"></div>
            <ProjectSlide
              clientName="devf"
              title="Latin America’s journey in tech education"
              description="Improving the way people learn tech skills and dive into the industry"
              clientLogoSrc='/img/devf.png' 
              desktopImageSrc="/img/devf-sc-desktop.png"
              mobileImageSrc="/img/devf-sc-mobile.png"
              imageDescription="Campus learning platform"
              className="theme-devf"
            />
            <ProjectSlide
              clientName="homely"
              title="The operative system for your facilities"
              description="Improving the way people learn tech skills and dive into the industry"
              clientLogoSrc='/img/homely.png' 
              desktopImageSrc="/img/homely-sc-desktop.png"
              mobileImageSrc="/img/homely-sc-mobile.png"
              imageDescription="Campus learning platform"
              className="theme-homely"
            />
            <ProjectSlide
              clientName="aliada"
              title="Bringing joy to over one million homes"
              description="Improving the way people learn tech skills and dive into the industry"
              clientLogoSrc='/img/aliada.png' 
              desktopImageSrc="/img/aliada-sc-desktop.png"
              mobileImageSrc="/img/aliada-sc-mobile.png"
              imageDescription="Campus learning platform"
              className="theme-aliada"
            />
            <Carousel></Carousel>
          </section>
          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
