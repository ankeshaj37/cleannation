import React from "react";
import styled from "styled-components";
import sunkesh from "../assets/maneg.jpg";
import ankesh from "../assets/dw.jpg";
import sumit_jambharkar from "../assets/iamsumit.jpg";
import rakesh from "../assets/team.jpg";

const Team = () => {
  const name = [
    { name: "Nilesh Vaswani", image: sunkesh, post: "CEO & Co-Founder" },
    { name: "Ronak Sharma", image: ankesh, post: "COO & Co-Founder" },
    {
      name: "Sumit Jambharkar",
      image: sumit_jambharkar,
      post: "Full Stack Devloper",
    },
    { name: "Rakesh Tiwari", image: rakesh, post: "Supervisor" },
  ];
  return (
    <>
      <div className="container">
        <Title>
        <h1>OUR TEAM</h1>
        <p>You Will Get All Types Of Services With Low Cost In All Over India...</p>
        </Title>
        <div className="row">
          {name.map((doc)=>(
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
            <Avtar>
              <img
                src={doc.image}
                alt=""
              />
              <h5>{doc.name}</h5>
              <span>{doc.post}</span>
              <p></p>
              <span>CLEANNATION.IN</span>
              {/* <div className="social">
              <div class="face" ><i class="fa fa-facebook" aria-hidden="true"></i></div>
              <div class="inst" ><i class="fa fa-instagram" aria-hidden="true"></i></div>
              <div class="you" ><i class="fa fa-youtube" aria-hidden="true"></i></div>
              <div class="what" ><i class="fa fa-whatsapp" aria-hidden="true"></i></div>
              </div> */}
            </Avtar>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
const Title = styled.div`
    text-align: center;
    margin:24px;
`
const Avtar = styled.div`
  align-items: center;
  text-align: center;
  margin:24px;
  > img {
    width: 250px;
    border-radius: 50%;
  }
  .social {
    display:flex;
    justify-content:center;
    margin:6px;
  }
  .inst {
  width:30px;
  height:30px;
  background-color: #c13548;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  color:white;
  margin:4px; 
}
.what {
  width:30px;
  height:30px;
  background-color:#25D366;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  color:white;
  margin:4px; 
}
.you {
  width:30px;
  height:30px;
  background-color:red;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  color:white; 
  margin:4px; 
}
.face {
  width:30px;
  height:30px;
  background-color:#4267B2;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  color:white; 
  margin:4px; 
}
`;
