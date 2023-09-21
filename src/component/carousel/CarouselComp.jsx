import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// OWN
import './CarouselComp.css';
import imagenUno from '../../assets/banner-1.webp';
import imagenDos from '../../assets/banner-2.webp';
import imagenTres from '../../assets/banner-3.webp';

export const CarouselComp = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carouselEspace'>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item className='justify-content-start'>
          <img className="d-block w-100" src={imagenUno} alt="First slide" />
          <Carousel.Caption>
            <div className='titleHeaderCarousel'>Más Rico <br />Imposible</div>
            <p className='subtitleHeaderCarousel'>Te Esperamos!...</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={imagenDos} alt="Second slide" />
          <Carousel.Caption>
          <div className='titleHeaderCarousel'>Exquisito lujo  <br />gastronómico</div>
            <p className='subtitleHeaderCarousel'>Sabor sin igual!...</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={imagenTres} alt="Third slide" />
          <Carousel.Caption>
          <div className='titleHeaderCarousel'>Elegancia   <br />culinaria sublime</div>
            <p className='subtitleHeaderCarousel'>Sabores que enamoran siempre!...</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};
