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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <Container maxWidth="sm">
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
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
		<Grid container spacing={2} minHeight={160}>
			<Grid xs display="flex" justifyContent="center" alignItems="center">
			<Card sx={{ maxWidth: 345, margin: '5em' }}>
				<CardHeader
					title="Yefim Ferits"
					subheader="CEO"
				/>
				<Avatar src={AboutImage} sizes='20px'  sx={{ width: 200, height: 200, margin: '0 auto' }} aria-label="recipe">
					BR
				</Avatar>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the mussels,
					if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
						title='Learn more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
					<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the mussels,
					if you like.
					</Typography>
					</CardContent>
				</Collapse>
				</Card>
			</Grid>
		</Grid>
	</>

  );
}
