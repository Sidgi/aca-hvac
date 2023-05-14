import { Stack, TextField, Grid } from '@mui/material';
import React from 'react';

export default function BasicInfo() {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={5}
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginTop={4}
    >
      <Grid gap={4} item xs={5} columnSpacing={4}>
        <TextField required label="Full name" fullWidth />
      </Grid>
      <Grid gap={4} item xs={5} columnSpacing={4}>
        <TextField required label="Address" fullWidth />
      </Grid>
      <Grid item xs={5} columnSpacing={4}>
        <TextField required label="Phone number" fullWidth />
      </Grid>
      <Grid item xs={5} columnSpacing={4}>
        <TextField required label="Email" fullWidth />
      </Grid>
    </Grid>
  );
}
