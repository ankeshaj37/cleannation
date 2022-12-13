import React from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";


function Loading() {

  return (
    <Sweet>
     <HashLoader color="orange" />
    </Sweet>
  );
}

export default Loading;

const Sweet = styled.div`
    display:flex;
    justify-content:center;
    margin-top:15%;
`