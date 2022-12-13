import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  
  
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitContact =(e)=>{
    e.preventDefault();
    try {
      db.collection("feedback").add({
        name:state.name,
        email:state.email,
        message:state.message
      })
      alert("send successfull")
      toast.success("Send FeedBack !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
     })
     setState("")
      
    } catch (error) {
      console.log(error);
    }
  }


  
  const inputChange =(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <Map>
              <iframe
                width={900}
                height={500}
                class="absolute inset-0"
                frameborder={0}
                title="map"
                marginheight={0}
                marginwidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3769.3743246504946!2d72.81242141473072!3d19.13508518705404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1629261544325!5m2!1shi!2sin"
              ></iframe>
              <Cover>
                <div>
                  <h2>ADDRESS</h2>
                  <p class="mt-1">
                    Yari Road ,versova , Andheri West Mumbai-400061 .
                  </p>
                </div>
                <div>
                  <h6>EMAIL</h6>
                  <a href="mailto:cleannation00@gmail.com">
                    cleannation00@gmail.com
                  </a>
                  <h6>PHONE</h6>
                  <p>
                    <a href="tel:+9323969471">7021595850</a>
                  </p>
                  <a href="tel:+7738727683">9323969471</a>
                </div>
              </Cover>
            </Map>
          </div>
          <div className="col-12 col-md-4">
            <Map>
              <form onSubmit={submitContact}>
                <h2>Feedback</h2>
                <Input>
                  <label>Name</label>
                  <input
                    autoComplete="off"
                    required
                    type="text"
                    onChange={inputChange}
                    value={state.name}
                    name="name"
                  />
                </Input>
                <Input>
                  <label>Email</label>
                  <input
                    autoComplete="off"
                    required
                    type="email"
                    value={state.email}
                    onChange={inputChange}
                    name="email"
                  />
                </Input>
                <Input>
                  <label>Message</label>

                  <textarea
                    autoComplete="off"
                    required
                    value={state.message}
                    onChange={inputChange}
                    name="message"
                  ></textarea>
                </Input>
                <button type="submit">Send</button>
                <p>
                  The Customer Is The King And We Are The Servant [ Clean-Nation
                  ]
                </p>
              </form>
            </Map>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Contact;

const Map = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  >form {
    display:flex;
    justify-content:center;
    flex-direction:column
  }
  >form button {
    background-color:orange;
    margin-top:24px;
    padding:6px;
    border-color:orange;
    margin-bottom:24px;
  }
`;
const Cover = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  padding: 12px;
  top: 320px;
`;
const Input = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-top:24px;
    >input,textarea {
    border-radius: 4px;
    border: 1px solid gray;
    padding: 4px;
    background-color:#F5F5F5;
    }
    >input,textarea:focus{
      outline:none;
    }
`