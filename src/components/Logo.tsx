import React from 'react'
import MainLogo from '../../static/images/logo-hvac.png';

export default function Logo({coefficient = 1}) {
  return (
	<>
		<img src={MainLogo} style={{width: 50*coefficient, height:50*coefficient}}/>
	</>
  )
}
