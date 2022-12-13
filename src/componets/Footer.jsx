import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
    <Section>
    <a href="tel:+917021595850" class="float_call" target="_blank">
    <i class="fa fa-phone my-float"></i>
    </a>
    <a href="https://api.whatsapp.com/send?phone=7021595850&text=Hello I am interested in your service" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
     <ul>
      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
      <li><a href="https://merchant.razorpay.com/policy/KJRC94HTg35h4r/refund">Cancellation & Refund Policy</a></li>
      <li><Link to="/payment-method">Payment Method</Link></li>
     </ul>
     <ul>
      <li><a href='https://www.facebook.com/cleannation00'>Fecebook</a></li>
      <li><a href='https://www.instagram.com/cleannationin/'>Instagram</a></li>
      <li><a href='https://www.youtube.com/channel/UCu4dWliy_QEYzh5O6Jw6EWyQ'>Youtube</a></li>
      <li><Link to="/faqs">FAQs</Link></li>
     </ul>
    </Section>
    <Sec>
      <h5>© 2022 Cleannation in India | Design By Sumit Jambharkar ..</h5>
    </Sec>
    </>
  )
}

export default Footer;

const Section = styled.div`
  background-color:orange;
  height:170px;
  display:flex;
  justify-content:space-around;

  >ul li {
    margin:8px;
    list-style:none;
  }
  >ul >li >a {
    color:black;
    font-size:18px;
  }
  .float_call {
  position:fixed;
	width:60px;
	height:60px;
	bottom:260px;
	right:30px;
	background-color:blue;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
  }
  .float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:190px;
	right:30px;
	background-color:red;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}
.my-float{
	margin-top:16px;
}

`
const Sec = styled.div`
  text-align:center;
  background-color:orange;
  padding-bottom:12px;
  >h5 {
    color:blue;
  }
`