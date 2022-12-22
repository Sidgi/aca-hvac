import React from 'react'
import '../../../styles/css/services.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled'
import Pricing from '../../Pricing';

const Item = styled(Paper)(({ }) => ({
  backgroundColor: 'white',
  textAlign: 'center',
}));

const ServicesList = () => {
  return (
    <div>
      <Box id="services" >
      <Typography variant="h2" component="h3">Services</Typography>
          <br/>
          <Typography variant="subtitle1" component="p">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid className="box wow fadeInLeft" item xs={6}>
            <div>
              <AcUnitIcon/>
              <Typography variant="h4" component="h4">Services</Typography>
              <p className="description">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
            </div>  
          </Grid>
        <Grid className="box wow fadeInLeft" item xs={6}  >
          <span>
            <AcUnitIcon/>
          </span>
          <Typography variant="h4" component="h4">Services</Typography>
          <p className="description">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
        </Grid>        
        <Grid className="box wow fadeInLeft" item xs={6}  >
          <AcUnitIcon/>
          <Typography variant="h4" component="h4">Services</Typography>
          <p className="description">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
        </Grid>
        <Grid className="box wow fadeInLeft" item xs={6}  >
          <AcUnitIcon/>
          <Typography variant="h4" component="h4">Services</Typography>
          <p className="description">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
        </Grid>
      </Grid>
      <div className="row">

      <div className="col-lg-6">
        <div className="box wow fadeInRight" data-wow-delay="0.2s">
          <div className="icon"><LocalFireDepartmentIcon/></div>
          <h4 className="title"><a href="">Magni Dolores</a></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
        </div>
      </div>
      <Pricing/>
    </div>
      </Box>
    </div>
  )
}

export default ServicesList