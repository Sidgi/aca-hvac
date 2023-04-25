import { Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'

export default function terms() {
  return (
	<Layout>
    <Container maxWidth='lg'>
      <div style={{display: 'flex', gap:'2em', alignItems: 'center'}}>
        <hr style={{width: '25%', height: '2%'}}/>
        <Typography variant='h2'>Terms of Service</Typography>
        <hr style={{width: '25%', height: '2%'}}/>
      </div>
    </Container>

  </Layout>
  )
}
