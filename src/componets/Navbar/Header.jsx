import React, { useState } from "react";
import styled from "styled-components";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {

  return (
    <>
      <Head>
          <Logo>
            <img className="img" src="https://res.cloudinary.com/clennation/image/upload/v1663896738/new_logo_mnpose.png" />
          </Logo>
          <Title>
            <h1 className="headline">
            Clean-Nation
          </h1>
          </Title>
      </Head>
      
    </>
  );
};

export default Header;
const Head = styled.div`
    background-color: orange;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    height:120px;

`
const Logo = styled.div`
    >img {
        width:170px;
        height:100px;

    }
    @media screen and (max-width:780px) {
      >img {
        width:120px;
        height:80px;
        position: relative;
        
    }
   }
`
const Title = styled.div`
    >.headline {
      text-align:center;
      align-items:center;
      line-height:120px;
      font-size:40px;
      color:black; 
    }
    @media screen and (max-width:780px) {
      .headline {
        line-height:50px;
        font-size:26px;
        color:black;
        position:relative;
        right: 16px;
      }
    }
`