import React from 'react'
import Layout from '../components/Layout'
import SwipeableTextMobileStepper from '../components/molecules/SwipableComponent'
import TitlebarImageList from '../components/molecules/GalleryImageList'


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
