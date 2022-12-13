import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Header from '../Navbar/Header'
import Team from '../Team'
import Loading from '../Loading'

const TeamPage = () => {
  
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
   <Team/>
   <Footer/>
   </>
   }
   </>
  )
}

export default TeamPage