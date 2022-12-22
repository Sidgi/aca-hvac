import { Typography } from '@mui/material';
import { graphql, Link } from 'gatsby';
import React from 'react';
import '../styles/css/navBar.css';
import Logo from './Logo';

export default function Navbar() {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<nav>
			<Link to='/' style={{display:'flex', alignItems:'center', height: '40px', color:'black'}}>
				<Logo/>
				<Typography variant='h5'>TEST DEMO</Typography>
			</Link>
			<div className='links'>
				<Link className='nav-item' to="/">Home</Link>
				<Link className='nav-item' to="/about">About</Link>
				<Link className='nav-item' to="/">Portfolio</Link>
				<Link className='nav-item' to="/gallery">Gallery</Link>
				<Link className='nav-item' to="/contact">Contact</Link>
				<Link className='nav-item' to="/services">Services</Link>
			</div>
		</nav>
  )
}


