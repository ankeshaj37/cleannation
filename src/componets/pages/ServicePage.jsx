import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Header from '../Navbar/Header'
import Service from '../Service'
import Loading from '../Loading'

const ServicePage = () => {

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
    <Service/>
    <Footer/>
    </> }
    </>
  )
}

export default ServicePage