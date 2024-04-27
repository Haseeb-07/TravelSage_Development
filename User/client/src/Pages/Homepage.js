import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Map from '../Components/Map'
import Footer from '../Components/Footer'
import BestServices from '../Components/BestServices'
import TopDestinations from '../Components/TopDestinations'
import Testimonials from '../Components/Testimonials'
export default function Homepage() {
  return (
    <div>
       <Navbar/>
      <Home/>
      <Map/>
      <BestServices/>
      <TopDestinations/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
