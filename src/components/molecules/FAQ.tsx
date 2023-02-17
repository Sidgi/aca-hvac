import React, {useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Autocomplete, Container, TextField } from "@mui/material";
import { TopImage } from "../molecules/TopImage";
import HR from "../../../static/images/HR.jpg";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import { Link } from "gatsby";

const data = [
	{
		firstTopic: "Bofkid", 
		secondTopic: "Lomik",
		description:`
			Bobik Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
			feugiat. Aliquam eget maximus est, id dignissim quam.
		`
	},
	{
		firstTopic: "What is Shopify and how does it work?", 
		secondTopic: "Secondary (optional)",
		description:`
			
			Shopify is a complete commerce platform that lets you start, grow, and manage a business.

			With Shopify, you can:

			Create and customize an online store
			Sell in multiple places, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops
			Manage products, inventory, payments, and shipping
			Shopify is completely cloud-based and hosted, which means you don’t have to worry about upgrading or maintaining software or web servers. This gives you the flexibility to access and run your business from almost anywhere, including your mobile device.
		`
	},
	{
		firstTopic: "How much does Shopify cost?", 
		secondTopic: "Secondary (optional)",
		description:`
			Try Shopify free for 3 days, no credit card required.

			After your trial expires, choose a pricing plan that suits the size and stage of your business.
		`
	},
	{
		firstTopic: "You are currently not an owner", 
		secondTopic: "Lobzikd",
		description:`
			Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
			feugiat. Aliquam afdfdafdt maximus est, id dignissim quam.
		`
	}
]

  const ItemG = styled(Paper)(({ theme }) => ({
	// color: 'black',
	height: '15em',
  }));


export default function SFAQ() {
  const [expanded, setExpanded] = useState("");

  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (panel: string) => (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };

  const handleFilterChange = (event: React.SyntheticEvent<Element, Event>) =>{
	const filteredList = event.target.dataset.testid !== "CloseIcon"? data.filter(_=>(
		_.firstTopic === event.target.innerHTML
	)) : data;
	setFilteredData(filteredList);
  }

  const handleClose =  (event: React.SyntheticEvent<Element, Event>) =>{
	setFilteredData(data);
  }

  return (
    <>
      <Container>
        <Typography style={{display:'flex', justifyContent: 'center' }} sx={{ margin: "1em auto" }} variant="h3">
          FAQs
        </Typography>
		<Autocomplete
			options={data.sort((a, b) => -b.firstTopic.localeCompare(a.firstTopic) ||  -b.secondTopic.localeCompare(a.secondTopic))}
			groupBy={(option) => option.secondTopic}
			getOptionLabel={(option) => option.firstTopic}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="Search" />}
			style={{margin: '4em auto'}}
			onChange={handleFilterChange}
		/>
		<Grid  container spacing={2}>
			<Grid item xs={12}>
				<Box
					sx={{
						p: 2,
						bgcolor: 'background.default',
						display: 'grid',
						gridTemplateColumns: { md: '1fr' },
					}}
				>
				{filteredData.map((item, idx)=>{
					return(
						<>
							<Accordion
								expanded={expanded === `panel-${idx}`}
								onChange={handleChange(`panel-${idx}`)}
								>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
									style={{height:'5em'}}
								>
									<Typography style={{fontWeight:'bold'}} sx={{ width: "33%", flexShrink: 0 }}>
										{item.firstTopic}
									</Typography>
									<Typography sx={{ color: "text.secondary" }}>
										{item.secondTopic}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
									{item.description}
									</Typography>
								</AccordionDetails>
							</Accordion>
						</>
					)
				})}
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Box
					sx={{
						p: 2,
						bgcolor: 'background.default',
						display: 'grid',
						gridTemplateColumns: { md: '1fr' },
						gap: 1,
					}}
				>
					<ItemG key={10} elevation={10}>
						<Typography sx={{textAlign:'center', pt: 4}} variant="h4">Need more help?</Typography>
						<Stack
							sx={{ pt: 8 }}
							direction="row"
							spacing={2}
							justifyContent="center"
							>
							<Link to="/contact"> 
								<Button variant="contained">Contact US</Button>
							</Link>
							<Button variant="outlined">Schedule a service</Button>
						</Stack>
					</ItemG>
				</Box>
			</Grid>
		</Grid>

      </Container>
    </>
  );
}
