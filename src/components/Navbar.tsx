import { Typography } from '@mui/material';
import { graphql, Link } from 'gatsby';
import React from 'react';
import '../styles/css/navBar.css';
import Logo from './Logo';

export default function Navbar(data){
	const [click, setClick] = React.useState(false);
	const { markdownRemark } = data 
	console.log(markdownRemark, 'markdown')

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<nav>
			<Link to='/' style={{display:'flex', alignItems:'center', height: '40px', color:'black'}}>
				<Logo/>
				<Typography variant='h5'>{"hello"}</Typography>
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

export const pageQuery = graphql`
  query($path: String!) {
	markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
      }
    }
  }
`
