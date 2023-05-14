import { Stack, TextField, Button, Grid } from '@mui/material'
import React from 'react'

export default function ProblemDescription() {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={5}
      direction="column"
      marginTop={2}
    >
      <Grid item>
        <TextField fullWidth multiline rows={3} label="Description" />
      </Grid>
      <Grid item>
        <Button variant="contained" component="label" size="medium">
          Upload Photos
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Grid>
    </Grid>
  );
}
