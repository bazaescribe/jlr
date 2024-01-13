import "./style.css"

import Link from 'next/link'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container d-flex flex-direction-column gap-150">
        <div>
          <h3>José Luis Rosas Baza</h3>
          <h1 className="text-bold">product, strategy and innovation</h1>
        </div>
        <div>
          <Link href="#">
            <h4>jlrosasb@gmail.com</h4>
          </Link>
          <Link href="#">
            <h4>+52 55 1677 7083</h4>
          </Link>
          <Link href="#">
            <h4>linkedin</h4>
          </Link>
          <Link href="#">
            <h4>x/twitter</h4>
          </Link>
          <Link href="#">
            <h4>resume</h4>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;