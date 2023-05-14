import { Alert, Box, Grid, Typography } from '@mui/material';
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
 
export default function SuccessPage() {
  return (
      <Grid
        sx={{
          height: '40vh',
          // background: 'radial-gradient(circle, green, yellow)',
        }}
        container
      >
        <Grid item xs={12} md={12} sm={6}>
          <Typography textAlign="center" variant="h3" component="h1">
            You successfully completed Scheduling!
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sm={6}
          alignContent={'center'}
          justifyContent={'center'}
        >
          <CheckCircleIcon
            style={{ color: 'green', fontSize: '5em', margin: '0 auto' }}
          />
        </Grid>

        <Grid item xs={12} md={12} sm={12}>
          <Typography
            textAlign="center"
            variant="h5"
            component="h2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            We will contact you shortly
            <PhoneAndroid />
          </Typography>
        </Grid>
      </Grid>
  );
}
