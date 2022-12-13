import React, { useEffect, useState } from 'react'
import About from '../About'
import Footer from '../Footer'
import Loading from '../Loading'
import Header from '../Navbar/Header'
import Navbar from '../Navbar/Navbar'

const AboutPage = () => {
  
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
    <About/>
    <Footer/>
    </>
    }
    </>
  )
}

export default AboutPage