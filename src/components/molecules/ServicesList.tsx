import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Cooling from '@mui/icons-material/AcUnit';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled'
import Pricing from '../Pricing';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container } from '@mui/material';

const Item = styled(Paper)(({ }) => ({
  backgroundColor: 'white',
  textAlign: 'center',
}));

const data = [
  {
    content: 'Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ', 
    title: 'Cooling', 
    media: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    icon: Cooling
  },
  {
    content: 'Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis ', 
    title: 'Cooling', 
    media: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    icon: Cooling
  },
  {
    content: 'Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis ', 
    title: 'Cooling', 
    media: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    icon: Cooling
  },   
  {
    content: 'Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis ', 
    title: 'Cooling', 
    media: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    icon: Cooling
  }
]

const ServicesList = () => {
  return (
    <Container maxWidth='lg'>
      <Typography variant="h2" gutterBottom component="h3">Services</Typography>
      <div>
        <Typography textAlign={'center'} variant="h4" gutterBottom component="h4">Filter</Typography>
      </div>
      <Grid container alignContent={'center'} alignItems={'center'}>
        {data.map(_ =>(
            <Grid item md={4} xs={12} pt={5}> 
              <Card sx={{maxWidth: '300px', margin:'0 auto', borderSize:'50%'}}>
                <CardMedia
                  component={'img'}
                  height={'100'}
                  alt={_.title}
                  src={_.media}
                />
                <CardContent>
                  <div style={{display:'flex', gap:'10px'}}>
                    <Cooling/>
                    <Typography gutterBottom component={'div'} variant='h5'>
                      {_.title}
                    </Typography>
                  </div>
                  <Typography gutterBottom component={'div'} variant='body1'>
                    {_.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='text'>
                      Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default ServicesList