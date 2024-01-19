import './style.css'
import Link from 'next/link'
import Logo from '@/components/atoms/logo';

const Footer = () => {
  return(
    <>
      <footer>
        <div className="container d-flex flex-direction-column gap-400">
          <div id="cta" className='d-flex justify-content-between py-150'>
            <Logo></Logo>
            <Link href="#">cta here</Link>
          </div>
          <div id="site" className='d-flex gap-200 flex-wrap'>
            <div id="map" className='d-flex flex-direction-column gap-075'>
              <p className='text-secondary'>Site</p>
              <Link href="/">Home</Link>
              <Link href="https://drive.google.com/file/d/1iyRXeN1S7YI29ExlXSxuPcPr9lTcAvEw/view?usp=sharing">Resume</Link>
            </div>
            <div id="map" className='d-flex flex-direction-column gap-075'>
              <p className='text-secondary'>Connect</p>
              <Link href="#mailto:jlrosasb@gmail.com">jlrosasb@gmail.com</Link>
              <Link href="tel:5516777083">+52 55 1677 7083</Link>
              <Link href="https://www.linkedin.com/in/jlrosasb">linkedin</Link>
              <Link href="https://twitter.com/jlrosasb">x/twitter</Link>
            </div>
          </div>

          <div id="site" className='d-flex gap-200 flex-wrap'>
          <div id="map" className='d-flex flex-direction-column gap-075 text-secondary'>
              <p className='text-secondary'>Education</p>
              <div>
                <p>Computer Science</p>
                <p>IPN</p>
                <p>2010 - 2014</p>
              </div>
              <div>
                <p>Software Development</p>
                <p>IPN</p>
                <p>2007 - 2010</p>
              </div>
              <div>
                <p>Design Sprint</p>
                <p>Google Launchpad Accelerator</p>
                <p>2016, 2018, 2022</p>
              </div>
            </div>
            <div id="map" className='d-flex flex-direction-column gap-075'>
              <p className='text-secondary'>Speaker @</p>
              <div>
                <p>Shark Tank Mexico</p>
                <p>2022</p>
              </div>
              <div>
                <p>Universidad de Monterrey</p>
                <p>2019</p>
              </div>
              <div>
                <p>Design Week Mexico, Puebla</p>
                <p>2019</p>
              </div>
              <div>
                <p>Iron Hack</p>
                <p>2019</p>
              </div>
            </div>
            <div id="map" className='d-flex flex-direction-column gap-075'>
              <p className='text-secondary'>Academic colaborations</p>
              <div>
                <p>&#34;El futuro del trabajo latinx.&#34;</p>
                <p>Tecmilenio</p>
                <p>2022</p>
              </div>
            </div>
          </div>

          <div id="info" className='d-flex justify-content-between py-150'>
            <p>
              2024
            </p>
            <p>
              José Luis Rosas Baza
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;