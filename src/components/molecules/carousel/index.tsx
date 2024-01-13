import Image from "next/image";
import "./style.css";

const Carousel = () => {
  const items = Array.from({ length: 1 }, (_, i) => (
    <div className="logos-slide" key={i}>
      <Image 
        src='/img/logos/telcel.png' 
        alt='Telcel'
        width='143' 
        height='32'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/liverpool.png' 
        alt='Liverpool'
        width='114' 
        height='32'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/udem.png' 
        alt='Universidad de Monterrey'
        width='80' 
        height='80'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/careme.png' 
        alt='careme.mx'
        width='106' 
        height='40'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/design-week.png' 
        alt='Design Week Mexico Puebla 2019'
        width='71' 
        height='48'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/microsoft.png' 
        alt='Microsoft'
        width='112' 
        height='32'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/shark-tank.png' 
        alt='Shark Tank México'
        width='60' 
        height='48'
        className="carousel-item"
      />
      <Image 
        src='/img/logos/tecmilenio.png' 
        alt='Universidad Tecmilenio'
        width='119' 
        height='32'
        className="carousel-item"
      />
    </div>
  ));

  return (
    <article>
      <div className="container">
        <div className="parent">
          <div className="logos">
            {items}
            {items}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Carousel;
