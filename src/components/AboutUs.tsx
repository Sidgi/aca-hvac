import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid  from '@mui/material/Grid';
import AboutImage from '../../static/images/AboutUs1.jpg';
import AboutImage2 from '../../static/images/AboutUs2.jpg';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';
import {  graphql, useStaticQuery } from 'gatsby';



const GridContainer = styled.div`
	display: grid;
`


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: 'ease 1s',
}));

export default function AboutUs() {

	const data = useStaticQuery(
		graphql`
			query {
				markdownRemark(fileAbsolutePath: { regex: "/people/" }) {
					fileAbsolutePath
					frontmatter {
						title
						job
						image
					}
				}
			}
		`
	);

  return (
	<>
		<Container maxWidth="lg">
		<Box
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6,
			}}
			>
				<Container maxWidth="sm">
					<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
					>
					Who are we?
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						We are ACA HVAC
					</Typography>
				</Container>
			</Box>
			<Grid container spacing={2} minHeight={160}>
				<Grid xs display="flex" justifyContent="center" sx={{ maxWidth: '80%' }}>
					<Grid sx={{ maxWidth: '70%'}}>
						<Typography
							variant="h6" 
							align="left" 
						>
							At ACA HVAC, we believe that a business is only as good as the people behind it. That's why we want to take a moment to tell you a little bit about ourselves.
							Our team is made up of passionate, skilled professionals who are committed to providing the best possible HVAC solutions to our clients. With years of experience in the industry, we have honed our expertise in everything from installations to repairs and maintenance.
							But what truly sets us apart is our dedication to customer satisfaction. 
							We understand that every client has unique needs, which is why we work closely with you to develop a customized solution that meets your specific requirements. 
						</Typography>
					</Grid>
					<Grid sx={{ maxWidth: '100%'}}>
						<img style={{ maxWidth: '100%', borderRadius: 30}} src={AboutImage}/>
					</Grid>
				</Grid>
			</Grid>
			<Divider sx={{margin: '5em'}}/>
			<Grid  xs display="flex">
				<Grid sx={{ maxWidth: '100%', marginRight: '2em' }}>	
					<img style={{ maxWidth: '100%', borderRadius: 30}} src={AboutImage2}/>
				</Grid>
				<Grid>
					<Typography
						variant="h6" 
						align="left" 
					>
						We take the time to listen to your concerns and offer guidance and advice to help you make the best possible decisions for your home or business.
						At the end of the day, we are here to make your life easier. We know that HVAC issues can be stressful and disruptive, and our goal is to provide a seamless, stress-free experience that leaves you feeling confident in your choice of provider.
						So whether you need a new system installed, routine maintenance, or emergency repairs, you can count on ACA HVAC to deliver top-quality service with a personal touch. Contact us today to learn more about how we can help you keep your space comfortable year-round.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='lg'>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Meet Our Team
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
				At ACA HVAC, we're proud to have a diverse and talented team of professionals who are passionate about what they do. From our skilled technicians to our knowledgeable sales representatives, everyone on our team is dedicated to delivering the best possible service to our clients.
            </Typography>
          </Container>
        </Box>
		<Grid container spacing={2} minHeight={160}>
			<Grid xs display="flex" justifyContent="center" alignItems="center">
				
			<Card sx={{ maxWidth: 445, padding: '20px'}}>
				<div style={{display:'flex', justifyContent:'flex-start' }}>
					<Avatar src={AboutImage} sizes='20px'  sx={{ width: 100, height: 100 }} aria-label="recipe">
						BR
					</Avatar>
					<CardHeader
						title="Yefim Ferits"
						subheader="CEO"
					/>
				</div>

				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Through their visionary leadership and dedication to excellence, our CEO has built a team of experts that are committed to delivering the best possible results for our clients. 
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
				</CardActions>
				</Card>
			</Grid>
		</Grid>
	</>

  );
}
