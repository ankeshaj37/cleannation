import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Footer from './Footer';
import Loading from './Loading';
import Header from './Navbar/Header';
import Navbar from './Navbar/Navbar';
import Service from './Service';
import Team from './Team';

const Home = () => {
  
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000);
  }, [])

  return (
    <>
    <Header/>
    <Navbar/>
    {loading? <Loading/> :
    <>
    <Banner/>
    <Service/>
    <Team/>
    <Footer/>
    </>
    }
    </>
  )
}

export default Home