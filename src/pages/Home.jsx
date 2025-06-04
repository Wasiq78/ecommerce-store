import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import TrendingSlider from '../components/TrendingSlider'
import Card from '../components/Card'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Hero />
    <NewArrivals />
    <Card />
    <TrendingSlider />
    <Footer />
    </>
  )
}

export default Home