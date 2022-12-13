import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Header from '../Navbar/Header';
import Offers from '../Offers'
import Loading from '../Loading';

const OffersPage = () => {
  
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
    <Offers/>
    <Footer/>
    </>
     }
    </>
  )
}

export default OffersPage