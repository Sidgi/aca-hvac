import { Typography } from '@mui/material';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { stringify } from 'querystring';
import React from 'react';
import '../styles/css/navBar.css';
import Logo from './Logo';

export default function Navbar(){

	type datagraphql = {
		markdownRemark: {
			frontmatter: {
				pages: [
					{pageName: string, src: string}
				]
			}
		}
	}

	const data: datagraphql = useStaticQuery(
		graphql`
			query {
				markdownRemark(fileAbsolutePath: { regex: "/pages-list/" }) {
					frontmatter {
					pages{
						pageName
						src
					}
					}
				}
			}
		`
	);
	const { pages } = data?.markdownRemark?.frontmatter;

	return (
		<nav style={{
			position: '-webkit-sticky',
			position: 'sticky',
			top: 0,
			padding: '50px',
			fontSize: '20px',
		}}>
			<Link to='/' style={{display:'flex', alignItems:'center', height: '40px', color:'black'}}>
				<Logo/>
				<Typography variant='h5'>ACA HVAC</Typography>
			</Link>
			<div className='links'>
				{pages?.map(_=>(
					<Link className='nav-item' to={_.src}>{_.pageName}</Link>
				))}
			</div>
		</nav>
  )
}
