import React from 'react'
import Grid from '../components/Grid'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VerticalNav from '../components/VerticalNav'

function page() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <VerticalNav />
        <Grid />

      </div>
            
      <Footer />

    </div>
  )
}

export default page
