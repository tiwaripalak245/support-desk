import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const {user} = useSelector((state) => state.auth)
  const navigate = useNavigate()


  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user])
  return (
    <>
    <HeroSection/>  
  
    </>
  )
}

export default Home
