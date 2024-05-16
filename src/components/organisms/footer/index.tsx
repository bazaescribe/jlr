import './style.css'
import Link from 'next/link'
import Logo from '@/components/atoms/logo';

const Footer = ({ color = '#2F2F2F' }) => {
  return(
    <>
      <footer style={{color}}>
        <div className="container">
          <div className=''>
            José Luis Rosas Baza / 2024
          </div>

          <div className="d-flex gap-100">
            <Link href='#'>
              Linkedin
            </Link>
            <Link href='#'>
              Twitter
            </Link>
            <Link href='#'>
              Resume
            </Link>
          </div>

          <div className="d-flex gap-100">
            <Link href='#'>
              jlrosasb@gmail.com
            </Link>
            <Link href='#'>
              +52 55 1677 7083
            </Link>
            <Link href='https://calendly.com/jlrosasb/30min?month=2024-05' target='blank'>
              Calendly
            </Link>
          </div>
        
        </div>
        
      </footer>
    </>
  );
}

export default Footer;