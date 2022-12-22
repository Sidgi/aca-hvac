import { Typography } from '@mui/material'
import React from 'react'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import CarouselComponent from '../components/molecules/Carousel'


export default function gallery() {
  return (
	  <Layout>
      <Typography variant='h3'> Gallery</Typography>
      
      <Gallery/>
    </Layout>
  )
}
