import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Navbar/Header';
import Navbar from '../Navbar/Navbar'

const PaymentMethod = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Section>
   
   <h1>Payment Method</h1><br></br>
   <br></br>

<h3 >Mobile Payments</h3>
<br></br>
<h3 >Others Payment</h3>
<br></br>
<h3 >Credit Cards</h3>
<br></br>
<h3 >Debit Cards</h3>
<br></br>
<h3 >Coming Soon</h3>
<br></br>
<br></br>


<p>
Now Please Pay in Cash</p>
   <div>
   <h3>
The manner a person pays for products and 
services is referred to as a payment method.
Barter, or an exchange of items between the 
parties, was one of the first forms of payment.
 The usage of cash, coins, and credit cards were
  later developments in payment techniques.
</h3>
   </div>
   </Section>
    <Footer/>
    </>
  )
}

export default PaymentMethod;

const Section = styled.div`
margin:24px;
>h3 {
 text-align:center;
}
`