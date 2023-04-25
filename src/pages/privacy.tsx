import { Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'



const data = [
  {
    title: 'Privacy Policy for HVAC Company',
    description: `At ACA HVAC, we are committed to protecting the privacy and security of our customers' personal information.
    This privacy policy explains how we collect, use, and protect your personal information, 
    and your rights in relation to that information.`
  }, 
  {
    title: 'Information We Collect',
    description: `We may collect personal information about you when you use our services, including:
      Your name, address, and contact information
      Your payment information
      Information about your HVAC system and usage
      Your service history and preferences
      Other information relevant to your specific requests or needs
      We may collect this information through various means, including our website, phone conversations, and in-person interactions.`
  }, 
  {
    title: 'Use of Your Information',
    description: `We use your personal information to:
      Provide you with the services you request
      Manage our business operations, including accounting and billing
      Improve our products and services
      Communicate with you about our services, promotions, and other updates
      Meet our legal obligations
      We do not sell, rent, or share your personal information with third parties for their own marketing purposes.`
  }, 
  {
    title: 'Security of Your Information',
    description: `We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
    We use industry-standard security technologies and procedures to safeguard your information, 
    and we require our employees to maintain the confidentiality of your information.
    However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. 
    Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
  },
  {
    title: 'Your Rights',
    descripition: `
      You have the right to:
      Access and review your personal information
      Request that we correct or delete your personal information
      Object to or restrict the processing of your personal information
      Request a copy of your personal information in a structured, machine-readable format
      To exercise your rights, please contact us using the information provided below.
    `
  },
  {
    title: 'Changes to Our Privacy Policy',
    description: `
      We reserve the right to modify or amend this privacy policy at any time. 
      If we make any material changes to the way we collect, use, or protect your personal information,
      we will notify you by posting an updated privacy policy on our website or by other means.
    `
  },
]

const CustomizedTitle = styled(Typography)({
  margin: '1em 0 1em 0',
  fontSize:'3em',
  fontWeight:'500'

})

const CustomizedSectionTitle = styled(Typography)({
  margin: '1rem 0',
  // fontWeight: 'bolder',
  fontSize:'2em',
  fontWeight:'400'

})

const CustomizedSectionDescription = styled(Typography)({
  margin: '1rem 0',
  fontSize:'1em',
  fontWeight:'400'

})

export default function privacy() {
  return (
	<Layout>
    <Container maxWidth="lg">
      <CustomizedTitle variant='h1'>Privacy Policy for HVAC Company</CustomizedTitle>
      <Divider/>
      {data.map((item)=>(
        <>
          <CustomizedSectionTitle variant='h2'>{item.title}</CustomizedSectionTitle>
          <CustomizedSectionDescription variant='h3'>
            {item.description}
          </CustomizedSectionDescription>
        </>
      ))}
    </Container>

  </Layout>
  )
}
