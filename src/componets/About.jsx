import React from 'react'
import styled from 'styled-components';


const About = () => {
    
  return (
    <>
    <div className='container'>
        <Section>
        <h1>WHO WE ARE</h1>
        <div className='about'>
            <p>Clean-Nation Company Is All Type Of Service Provide At Home With Low Cost In All Over India . Home Cleaning , Car Cleaning & Dusting , Chandelier Cleaning & Fitting , Decoration & Function Events , Office & Home Shifting , Digital Support Service , Real Estate Agent ,We take all type of contract. check your website Cleannation.in We so far provede professional service 35 cities in india & Our experience is 10 year in this filed And we came online in 2021 now our customer is 1 lac 46 thousands in India Cleaning services include those for the home's floors, tiles, bathrooms, kitchens, living rooms, sofas, carpets, facades, blinds, curtains, air conditioners, chairs, restaurants, hotels, offices, and schools as well as for bird nets, pest control, cars, and commercial cleaning solutions. Our goal is to become a top-tier professional facilities management group that is well-known for creating and maintaining a remarkable, cutting-edge, eco-friendly, and clean environment.Do you need to clean your home but are unsure how to proceed? On cleannation.in, schedule a service. We've tailored our services to each customer's needs, and we likewise do the same with our product choices. Cleannation.in has everything covered, including full home cleaning, sofa cleaning, carpet cleaning, kitchen and bathroom cleaning, pest control, disinfection services, and painting.Today's intelligent homeowners need home-related services for effectively designed, flawlessly constructed homes. In addition to providing a platform for excellent professionals in the home services industry to createImageMedia an easily accessible online showcase with features like their own profiles, cleannation.in assists the homeowner by connecting them to verified professionals who are well-suited to execute their needs in a timely, cost-effective manner.</p>
        </div>
        <h4>The Customer Is The King And We Are The Servant</h4>
        </Section>
    </div>
    </>
  )
}

export default About;

const Section = styled.div`
    text-align:center;
    >h1 {
        color:blue;
        font-weight:700;
    }
    >h4 {
        color:blue;
        font-weight:700;
    }
    .about {
        background-color:#f5f5f5;
        padding:10px;
    }
`