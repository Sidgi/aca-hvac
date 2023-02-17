import React from 'react'
import Portfolio from '../components/Portfolio'
import Layout from '../components/Layout'
import ServicesList from '../components/molecules/ServicesList'


export default function Services() {
  return (
	<Layout>
		<ServicesList/>
		<Portfolio/>
	</Layout>
  )
}
