import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component from Next.js
import "./style.css";
import Logo from '@/components/atoms/logo';

const Navbar = ({ className = '' }) => {
  return (
    <nav className={className}>
      <div className="container">
        <Link href="/">
          <div className="home">
            <div className="blob-1"></div>
            <div className="blob-2"></div>
            <div className="blob-3"></div>
            <div className="lens"></div>
            <Logo></Logo>
          </div>
        </Link>
        <div className="menu">
          <Link href="#intro" className='btn'>
            let&#39;s connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
