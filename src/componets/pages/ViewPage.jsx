import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Header from "../Navbar/Header";
import styled from "styled-components";
import { db } from "../../../firebase";
import { useParams, Link } from "react-router-dom";
import Loading from "../Loading";


const ViewPage = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000);
  }, [])

  const handleSubmit = (price)=>{
      var options = {
        key: "rzp_live_ySj0i0y7GPYZXB",
        key_secret:"bSC1GsUXDUVBOz7nHqeLuOUy",
        amount:price*100,
        currency:"INR",
        name:"Clenanation.in",
        description:"Thanks For Payment",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"",
          email:"",
          contact:""
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#FFA500"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
  }

  useEffect(() => {
    if (id) {
      db.collection("services")
        .doc(id)
        .collection("submenu")
        .get()
        .then((querySnapshot) => {
          setData(
            querySnapshot.docs.map((doc) => ({
              data: doc.data(),
              id: doc.id,
            }))
          );
        });
    }
  }, [id]);

  return (
    <>
      <Header />
      <Navbar />
        {loading ? <Loading/> :
        <>
        {data.map((doc) => (
          <>
            <Section>
              <Main>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="1/3"
                >
                  <img style={{ width: 190 }} src={doc.data.image} alt="" />
                </div>
                <div className="bad">
                  <h1>{doc.data.name}</h1>
                </div>
                <div className="price">
                  <h1>Rs.{doc.data.price}</h1>
                  
                </div>
                <div className="price">
                  <Link to="/form">
                    <h1 style={{display:"block",visibility:"hidden"}}>HAPPY</h1>
                    <button style={{ background: "orange",padding:6,borderColor:"orange" }}>Book Now</button>
                  </Link>
                </div>
              </Main>

              <div className="p1">
                <p>
                  <span style={{ fontWeight: 700 }}>
                    <details>
                      <summary className="text-blue-500">Will Get Value</summary>
                      <p className="text-gray-500"> {doc.data.p}</p>
                      <a target="blank" href={`${doc.data.url}`}>Buy Cleaning Products Online</a>
                    </details>
                  </span>
                </p>
              </div>
            </Section>
          </>
        ))}
        <Footer />
        </>
        }
    </>
  );
};

export default ViewPage;


const Section = styled.div`
    height:auto;
    text-align: center;
    padding: 6px;
    color: black;
    margin-top: 40px;
    margin-left: 2%;
    box-shadow: rgba(10, 6, 238, 0.24) 0px 3px 8px;
`;

const Main = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;

    .bad h1 {
    
    width: 300px;
    font-weight: 600;
    font-size: 24px;
    color:purple;

}
.price h1 {
font-weight: 600;
font-size: 24px;
color:rgb(26, 197, 26);
}
@media only screen 
and (min-device-width: 300px) 
and (max-device-width: 480px)
{
.bad h1 {
    width: 310px;
    font-weight: 700;
    font-size: 18px;
 
}
.price h1 {
    font-weight: 600;
    font-size: 18px;
}

}
`
