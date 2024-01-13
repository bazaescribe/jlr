import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component from Next.js
import "./style.css";
import Logo from '@/components/atoms/logo'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="home">
          <Link href="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className="menu">
          <Link href="#intro">
            about me
          </Link>
          <Link href="#projects">
            case studies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
