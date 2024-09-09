import React from 'react'
import Grid from '../components/Grid'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VerticalNav from '../components/VerticalNav'

function page() {
  return (
    <div>
      <Navbar />
      <VerticalNav />
      <Grid />      
      <Footer />

    </div>
  )
}

export default page
