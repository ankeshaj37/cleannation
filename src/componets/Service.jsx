import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Service = () => {

    const [data, setData] = useState([]);
    console.log(data);

    const res = data.filter((item)=>{
      let data = item.data.image
      console.log(data);
    })
    console.log(res);

  useEffect (() => {
    db.collection("services").onSnapshot((snapshot)=>{
      setData(snapshot.docs.map((doc)=>({
        id:doc.id,
        data:doc.data()
      })))
    })
   
  }, []);
    
  return (
    <>
    <Helmet>
    <meta charset="UTF-8"/>
    <meta name="home cleaning service, house cleaning,Cleaning Services Price" content="https://cleannation.in/"/>
  <meta name="author" content="ankesh jambharkar"/>‍

<title>house cleaning services according to you with low cost</title>‍
<meta name="House cleaning services and deep home cleaningThe duties
are performed by our efficient house cleaners in the
same time, you will get the best house cleaning services in low cost
6 x Wall + Kitchen Floor + Furniture + Fan-Ac + Windows + Stock Out And
In + Small Services As Per Your Requirements Capacity
1000-5000 L + In + Outside Cleaning + Small Services As Per Your Requirements
Depend On Window + Small Services As Per Your Requirements" content="Find all
the best quality products your pet may need" />   
 <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
</Helmet>

      <div className="container">
        {data.map((doc)=>(
            <div className="row">
            <div className="col-12 col-md-6">
               <Img>
               <img src={doc.data.image} alt=""/>
               </Img>
            </div>
            <div className="col-12 col-md-6">
                <Details>
                <div className="det">
                <h2>{doc.data.header}</h2>
                <h4>{doc.data.title}</h4>
                <p>{doc.data.descr}</p>
                <button>
                <Link to={`/${doc.id}`}>
                CHECK NOW
                    </Link>
                </button>
                </div>
                </Details>
            </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default Service;
const Img = styled.div`
   display:flex;
   justify-content:center;
   margin:24px;
    >img {
        width:250px;
        border-radius:50%;
    }
`
const Details = styled.div`
  display:flex;
   justify-content:center;
   align-items:center;
   margin:24px;
   height:250px;
   >.det {
    text-align:center;
   }
   >.det h2 {
    color:blue;
   }
   >.det h4 {
    color:purple;
   }
   >.det >button {
    background-color:orange;
    padding:12px;
    border-color:grey
    

   }
   .det >button >a {
    text-decoration:none;
    color:black;
   }
   @media screen and (max-width:780px) {
    height:200px;
    margin:2px;
   }
`