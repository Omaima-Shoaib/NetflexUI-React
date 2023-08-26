import React from 'react'
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Navbar from '../components/Navbar/Navbar';
import FeaturedImage from '../components/featuredImage/FeaturedImage';
function Home() {
  return (
    <>
   <Navbar></Navbar>
   <FeaturedImage type='Series'></FeaturedImage>
  
   </>
  )
}

export default Home