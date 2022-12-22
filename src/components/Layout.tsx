import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/css/globalStyles.css'
import BasicSpeecDial from '../components/molecules/BasicSpeedDial'

export default function Layout({children}) {
  return (
	<div className='layout'>
		<Navbar/>
		<div className='content'>
			{children}
		</div>
		<Footer/>
		<BasicSpeecDial/>
	</div>
  )
}
