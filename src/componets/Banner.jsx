import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { db } from '../../firebase';

function Banner() {

    const [img,setImg] = useState([])
  console.log(img);
  useEffect (() => {
    db.collection("image").onSnapshot((snapshot)=>{
      setImg(snapshot.docs.map((doc)=>(doc.data())))
    })
    
 
  }, []);
  return (
  <>
   {img.map((doc)=>(
    <Section>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={doc.one}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={doc.two}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={doc.four}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Section>
   ))}
  </>
  );
}

export default Banner;

const Section = styled.div`
    .carousel-indicators {
        z-index:0;
    }
`