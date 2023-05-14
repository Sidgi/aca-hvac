import { Button, Rating, TextField, Typography } from '@mui/material';
import React from 'react';



export default function RateUs() {
	const [value, setValue] = React.useState<number | null>(4);
	
		return (
			<div>
				<Typography marginTop={3} textAlign='center' component='h2' variant='h5' gutterBottom>How was your experience</Typography>
				<Rating
					sx={{
						textAlign:'center',
						display:'flex',
						margin:'0 auto',
						justifyContent:'center'
					}}
					size='large'
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
				<br/>
				<TextField multiline rows={2} fullWidth label='Description'/>
			</div>
		)
}
