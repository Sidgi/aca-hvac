import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { stringify } from 'querystring';
import React, {useState} from 'react';
import '../styles/css/navBar.css';
import Logo from './Logo';



const NavItem = styled(Link)`
color: ${(props: {newColor:boolean}) => (props.newColor? 'white' : 'black')};
line-height: 40px;
margin-right: 1rem;
&:hover {
	&:after{
		width: 100%;
		height: 2px;
		background: ${(props: {newColor:boolean}) => (props.newColor? 'white' : 'black')};
	}
}
&:active {
	/* color: red; */
	border: none;
  }

&:after{
	content: "";
	display: block;
	height: 2px;
	width: 0;
	background: transparent;
	transition: width 0.7s ease, background-color 0.5s ease, color 1s ease;
}

`;

const Nav = styled.nav( (props:{newColor:boolean} )=> ({
	position: '-webkit-sticky',
	position: 'sticky',
	margin: 0,
	background: props.newColor?'#50505a':'',
	color: 'white',
	top: 0,
	padding: '30px',
	fontSize: '20px',
	transition: 'background 2s',
	zIndex:2,
}))




export default function Navbar(){

	const [newColor, setNewColor] = useState(false);

	const isBrowser = () => typeof window !== "undefined"

	const changeColor = () => {
		if(!isBrowser()) return

		if(window.scrollY > 90){
			setNewColor(true)
		}else{
			setNewColor(false)
		}
	}

	isBrowser()&&window.addEventListener('scroll', changeColor);

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
			markdownRemark(fileAbsolutePath: { regex: "/navbar/"}){
				  fileAbsolutePath
			  frontmatter {
				pages {
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
		<Nav newColor={newColor}>
			<Link to='/' style={{display:'flex', alignItems:'center', height: '40px', color:'black'}}>
				<Logo/>
				<Typography color={newColor?'white':'inherit'} variant='h5'>ACA HVAC</Typography>
			</Link>
			<div className='links'>
				{pages?.map(_=>(
					<NavItem newColor={newColor} to={_.src}>{_.pageName}</NavItem>
				))}
			</div>
		</Nav>
  )
}
