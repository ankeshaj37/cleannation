import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import Footer from "../Footer";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPage = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    remark: "",
    pin: "",
    service: "",
  });

  const submitForm = (e) => {
    console.log(state);
    e.preventDefault();
    try {
      db.collection("customer-order").add({
        name: state.name,
        email: state.email,
        number:state.number,
        address: state.address,
        remark: state.remark,
        service: state.service,
        createdAt: new Date(),
        pin:state.pin
        })
        alert("Book Successfully!")
        setState("")
          toast.success("Book Successfully!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
         });
         setTimeout(() => {
          sendEmail()
         }, 100);
    } catch (error) {
      console.log(error);
    }
  }
  const handalChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const sendEmail =async()=> {
    
    const result = await fetch('http://localhost:8000/send-email',{
      method:"POST",
      headers: {
        'Content-Type' : "Application/json"
      },
      body: JSON.stringify({
        to:state.email,
        subject:state.service
      })
    })
    const res = await result.json()
    console.log(res);
  }
  return (
    <>
    <Header/>
    <Navbar/>
    <Section>
      <div class="container px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Book Service</h3>
            <p class="blue-text">With Low Cost For You.</p>
            <div class="">
                <form method="post" onSubmit={submitForm}>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Full Name<span class="text-danger"> *</span></label> <Input type="text" autoComplete="off"
                      required
                      value={state.name}
                      onChange={handalChange}
                      name="name"  onblur="validate(1)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email ID<span class="text-danger"> *</span></label> <Input type="text" required
                      value={state.email}
                      onChange={handalChange}  name="email"  onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Select Service<span class="text-danger"> *</span></label><Select
                        onChange={handalChange}
                      name="service"
                      value={state.service}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT">Select Service...</option>
                      <option>1 BHK Hall Rs.200</option>
                      <option>1 BHK Bedroom </option>
                      <option>Bedroom & Hall</option>
                      <option>1 BHK Room</option>
                      <option>2 BHK Room</option>
                      <option>Home Shifting</option>
                      <option>Office Shifting</option>
                      <option>House-Keeping Contract</option>
                      <option>Office Boy Contract</option>
                      <option>Security Guard Contract</option>
                      <option>Gym Trainer</option>
                      <option>Driver Contract</option>
                      <option>All Car Cleaning</option>
                      <option>Car Interior Cleaning</option>
                      <option>Diesel Cleaning</option>
                      <option>Other Contract</option>
                      <option>Other Cleaning</option>
                      <option>Chendelier Repairing</option>
                      <option>Chendelier Fitting</option>
                      <option>Chendelier Cleaning</option>
                      <option>Chendelier Other</option>
                          </Select> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone Number<span class="text-danger"> *</span></label> <Input autoComplete="off"
                      required
                      value={state.number}
                      type="number"
                      onChange={handalChange}
                      name="number" placeholder="" onblur="validate(4)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Remark<span class="text-danger"> *</span></label> <Input type="text" name="remark" required
                      value={state.remark}
                  
                      onChange={handalChange} placeholder="" onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Pin Code<span class="text-danger"> *</span></label> <Input type="text" required
                      value={state.pin}
                      onChange={handalChange} name="pin" placeholder="" onblur="validate(4)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Address?<span class="text-danger"> *</span></label> <Textarea onChange={handalChange}
                      name="address"
                      value={state.address} type="text" placeholder="" onblur="validate(6)"/> </div>
                    </div>
                    <div class="row justify-content-end">
                        <Button class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">BOOK NOW</button> </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</Section>
<ToastContainer/>
<Footer/>
    </>
  );
};

export default FormPage;

const Section = styled.div`
  
`
const Button = styled.div`
>button {
  margin-top:12px;
  background-color:orange;
  padding:12px;
  border-color:orange
}`
const Input = styled.input`
    border-radius: 4px;
    border: 1px solid gray;
    padding: 4px;
    background-color:#F5F5F5;
    padding:8px;
    :focus {
      outline:none;
    }
`
const Select = styled.select`
  border-radius: 4px;
    border: 1px solid gray;
    padding: 4px;
    background-color:#F5F5F5;
    padding:8px;
    :focus {
      outline:none;
    }
`
const Textarea = styled.textarea`
  border-radius: 4px;
    border: 1px solid gray;
    padding: 4px;
    background-color:#F5F5F5;
    padding:8px;
    :focus {
      outline:none;
    }
`