import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutPage from './componets/pages/AboutPage';
import Home from './componets/Home';
import ServicePage from './componets/pages/ServicePage';
import TeamPage from './componets/pages/TeamPage';
import ContactPage from './componets/pages/ContactPage';
import ViewPage from './componets/pages/ViewPage';
import FormPage from './componets/pages/FormPage';
import OffersPage from './componets/pages/OffersPage';
import PrivacyPolicy from './componets/pages/PrivacyPolicy';
import TermsConditions from './componets/pages/TermsConditions';
import FAQs from './componets/pages/FAQs';
import PaymentMethod from './componets/pages/PaymentMethod';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/offer' element={<OffersPage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path="/:id" element={<ViewPage/>} />
        <Route path="/form" element={<FormPage/>} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> 
        <Route path="/terms-conditions" element={<TermsConditions/>} /> 
        <Route path="/faqs" element={<FAQs/>} /> 
        <Route path="/payment-method" element={<PaymentMethod/>} /> 
      </Routes>
    </Router>
  )
}

export default App