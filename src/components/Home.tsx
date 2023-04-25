import React from 'react';
import styled from '@emotion/styled';
import { Typography, Button, ButtonGroup } from '@mui/material';
import HeroImage from '../../static/images/ContactUs3.jpg';

const HeroImg = styled.div`
	background-image: url(HeroImage);
	height: 50%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`
  
const HeroText = styled.h2`
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: black;
	&:hover {
        /* background-color: #555; */
		color: red;
    }
`  
const HeroButton = styled.button`
	border: none;
	outline: 0;
	display: inline-block;
	padding: 10px 25px;
	color: black;
	background-color: #ddd;
	text-align: center;
	cursor: pointer;

	&:hover {
        background-color: #555;
		color: white;
    }
`

const myStyle={
	backgroundImage: `url(${HeroImage})`,
	height:'100vh',
	width:'100vw',
	margin: 0,
	padding: 0, 
	objectFit: 'cover',
	// marginTop:'-70px',
	fontSize:'50px',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

export const Home = () => {
	return(
		<div style={myStyle}>
			<HeroText>
				<Typography variant="h3">Welcome to ACA HVAC</Typography>
				{/* <Typography variant='h6'>We are a group of talented </Typography> */}
				<ButtonGroup style={{padding: '11px'}}variant="contained" aria-label="outlined primary button group">
					<Button variant='contained'>Contact us</Button>
					<Button variant='outlined'>Schedule a service</Button>
				</ButtonGroup>
	
			</HeroText>
		</div>
	)
}