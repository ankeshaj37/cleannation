import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

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