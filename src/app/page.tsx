import Image from 'next/image'
import Navbar from '@/components/molecules/navbar'
import Link from 'next/link'
import Position from '@/components/molecules/position';
import Footer from '@/components/organisms/footer';
import Project from '@/components/molecules/project';
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
                  <h2 className='sticky-quote'>
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
            <div id="case-studies" className='container d-flex flex-direction-column gap-500 py-800'>
              <div className='d-flex flex-direction-column gap-025'>
                <h6 className="sans">Case Studies</h6>
                <h2>Sweet dreams (Are made in here)</h2>
                <p>
                  The projects featured here illustrate my approach to overcoming challenges, my commitment to functional aesthetics, and my continuous pursuit of pushing the boundaries of what is possible in product design.
                </p>
              </div>
              

              <div className='row gap-100'> 
                <Project client="devf" title="A tech education journey in Latin America" />
              </div>
              <div className='row gap-500'> 
                <Project client="homely" title="Bringing joy to the enterprise" />
                <Project client="aliada" title="Making homes out of a million houses" />
              </div>
            </div>
            <Carousel></Carousel>
          </section>

          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
