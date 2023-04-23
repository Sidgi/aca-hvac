import { Typography } from '@mui/material'
import React from 'react'
import Gallery from '../components/ArchiveGallery'
import Layout from '../components/Layout'
import CarouselComponent from '../components/molecules/Carousel'
import { Home } from '../components/Home'
import SwipeableTextMobileStepper from '../components/molecules/SwipableComponent'
import TitlebarImageList from '../components/molecules/GalleryImageList'
import { Height } from '@mui/icons-material'


export default function gallery() {
  return (
	  <Layout>
      <div style={{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        height:'100vh',
        width:'100vw'
      }}>
        <SwipeableTextMobileStepper/>
      </div>
      <TitlebarImageList/>
    </Layout>
  )
}
