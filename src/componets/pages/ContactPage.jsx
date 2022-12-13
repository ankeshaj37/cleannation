import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Contact from '../Contact'
import Header from '../Navbar/Header'
import Navbar from '../Navbar/Navbar'
import Loading from '../Loading'

const ContactPage = () => {

  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1000);
  }, [])
  return (
    <>
    <Header/>
    <Navbar/>
    {loading ? <Loading/> :
    <>
    <Contact/>
    <Footer/>
    </>
     }
    </>
  )
}

export default ContactPage