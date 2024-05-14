import "./style.css"

import Link from 'next/link'

const Hero = () => {
  return (
    <header className="hero">
      <h1>
        José Luis Rosas Baza
      </h1>
      <h5>
        Product Designer + Developer + Entrepreneur
      </h5>
      <div className="d-flex gap-100">
        <Link href='https://www.linkedin.com/in/jlrosasb/'>
          <h5>linkedin</h5>
        </Link>
        <Link href='https://twitter.com/jlrosasb'>
          <h5>x [twitter]</h5>
        </Link>
        <Link href='https://twitter.com/jlrosasb'>
          <h5>resume</h5>
        </Link>
      </div>
    </header>
  );
}

export default Hero;