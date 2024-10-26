import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'; 
import image1 from '../Assets/bg-1.jpg';
import image2 from '../Assets/bg-2.jpg'; 
import image3 from '../Assets/bg-3.jpg';
import image4 from '../Assets/bg-4.jpg';
import image5 from '../Assets/bg-5.jpg';
import card1 from '../Assets/card-1.png';
import card2 from '../Assets/card-2.png';
import card3 from '../Assets/card-3.png';
import card4 from '../Assets/card-4.png';
import card5 from '../Assets/card-5.png';
import card6 from '../Assets/card-6.png';
import card7 from '../Assets/card-7.png';
import card8 from '../Assets/card-8.png';


const cardData = [
  { title: 'Gaming accessories', image: card1, linkedText: 'See More' },
  { title: 'Headsets', image: card2, linkedText: 'See all deals' },
  { title: 'Jeans under $50', image: card3, linkedText: 'Discover more in Home' },
  { title: 'Kitchen & dining', image: card4, linkedText: 'Shop the latest from Home' },
  { title: 'Home Decor', image: card5, linkedText: 'Explore all products in Kitchen' },
  { title: 'Keyboards', image: card6, linkedText: 'See more' },
  { title: 'Tops under $25', image: card7, linkedText: 'Shop gaming' },
  { title: 'Home Improvement', image: card8, linkedText: 'Shop now' }
];



function Home() {
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = [image1, image2, image3, image4, image5];

  const handleSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <div className="home">
      <Carousel fade activeIndex={carouselIndex} onSelect={handleSelect}>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block "
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="card-section">
        {cardData.map((card, index) => (
          <div key={index} className="card">
              <h4>{card.title}</h4>
            <img src={card.image} alt={card.title} className="card-image" />
           <div className='see-more'>{card.linkedText}</div>
           
          </div>
        ))}
      </div>




    </div>



  );
}

export default Home;
