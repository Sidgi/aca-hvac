import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/css/globalStyles.css'
import BasicSpeecDial from '../components/molecules/BasicSpeedDial'
import { Container } from '@mui/material';

export default function Layout({children}) {
  return (
	<div className='layout'>
		<Navbar/>
		<div className='content'>
			{children}
		</div>
		<Footer/>
		<div 
			style={{
				position: '-webkit-sticky',
				position: 'sticky',
				bottom: '0',
				padding: '-50px',
			}}
		>
			<BasicSpeecDial />
		</div>
	
	</div>
  )
}
