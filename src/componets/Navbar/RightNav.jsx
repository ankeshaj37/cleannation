import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  width:100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    height:60px;
  }
  li a {
    text-decoration:none;
    color:white;
  }
  .service {
    background-color:aqua;
    
  }
  .offer {
    background-color:black;
    position: relative;
    outline-color: yellow;
    text-transform: uppercase;
    outline: none;
    animation-name: offer;
    animation-duration: 3s;
    animation-iteration-count: infinite;

  }
  @keyframes offer{
    0%,18%,50%,60%,80%,90% {
        color:white;
        text-shadow: none; 
    }
    18.1%,50.1%,60.1%,80.1%,90.1%{
        color:red;
        text-shadow: blue,10px;
    }
    
    
}
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    z-index: 2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      transition: transform 0.3s ease-in-out;
    }
    .service {
    background-color:aqua;
    height:auto;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" style={{textTransform :'uppercase'}}>Home</Link>
      </li>
    
      <li className='service'>
      <Link style={{color:"black",textTransform :'uppercase'}} to="/service">Service</Link>
         
      </li>
      <li>
      <Link to="/about" style={{textTransform :'uppercase'}}>About Us</Link>
         
       </li >
      <li className='offer' style={{borderRadius:"20px"}} >
          <Link to="/offer" className='offer'>Offer</Link>
       </li>
      <li>
      <Link to="/team" style={{textTransform :'uppercase'}}>TEAM</Link>
        </li>
      <li>
      <Link to="/contact"style={{textTransform :'uppercase'}}>Contact Us</Link>
        
        </li>
    </Ul>
  )
}




export default RightNav