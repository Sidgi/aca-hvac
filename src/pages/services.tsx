import React from 'react'
import Portfolio from '../components/Portfolio'
import Layout from '../components/Layout'
import ServicesList from '../components/molecules/ServicesList'
import { Container } from '@mui/material'


export default function Services() {
  return (
	<Layout>
		<ServicesList/>
	</Layout>
  )
}
