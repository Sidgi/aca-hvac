import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import NotFound from '../../static/images/404_page_not_found.webp';
import { Container, Stack, Typography, Button, ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";

const Title = styled(Typography)({
  fontSize: '3em'
})

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CustomizedContainer maxWidth='lg'>
      <img src={NotFound} style={{width: 'auto', height: '40vh', display:'flex', justifyContent:'center', margin: '0 auto'}}/>
        <div style={{display: 'flex', gap:'2em', alignItems: 'center', marginBottom:'2em', flexWrap:'wrap'}}>
          <hr style={{width: '100%', height: '2%', flex:'1'}}/>
          <Typography align="center" variant='h2'>Page not found</Typography>
          <hr style={{width: '100%', height: '2%', flex:'1'}}/>
        </div>
        <Container maxWidth="md">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Oops, we're sorry! It looks like the page you were trying to access isn't available.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <div style={{display:'flex', width:'40%', gap: 20}}>
              <Button style={{flex:'1', color:'white', outline:'none'}}  variant="contained">
                <Link to="/" style={{color:'white', outline:'none'}}>
                  Go Home
                </Link>
              </Button>
              <Button style={{flex:'1'}}  variant="outlined">
                <Link to="/contact" style={{color:'#1976d2', outline:'none'}}>
                  Contact us
                </Link>
              </Button>
            </div>
            </Stack>
          </Container>
      </CustomizedContainer>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
