import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  background-color: black;
  font-size: 17px;
  font-weight: 700;
  color: white;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  .logo {
    padding: 15px 0;
  }
  @media (max-width: 768px) {
    height:0;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;