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
              <Link href="#">Home</Link>
              <Link href="#">About Me</Link>
              <Link href="#">Case studies</Link>
              <Link href="#">Resume</Link>
              <Link href="#">Concepts</Link>
              <Link href="#">Open source</Link>
            </div>
            <div id="map" className='d-flex flex-direction-column gap-075'>
              <p className='text-secondary'>Connect</p>
              <Link href="#">jlrosasb@gmail.com</Link>
              <Link href="#">+52 55 1677 7083</Link>
              <Link href="#">linkedin</Link>
              <Link href="#">x/twitter</Link>
              <Link href="#">resume</Link>
            </div>
            <div id="map" className='d-flex flex-direction-column gap-075'>
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
                <p>Computer Science</p>
                <p>IPN</p>
                <p>2010 - 2014</p>
              </div>
              <div>
                <p>Computer Science</p>
                <p>IPN</p>
                <p>2010 - 2014</p>
              </div>
            </div>
            <div id="map" className='d-flex flex-direction-column gap-075'>
              <p className='text-secondary'>Speaker @</p>
              <div>
                <p>Shark Tank Mexico</p>
                <p>2022</p>
              </div>
              <div>
                <p>UDEM</p>
                <p>2019</p>
              </div>
              <div>
                <p>Design Week Mexico</p>
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
                <p>"El futuro del trabajo latinx."</p>
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