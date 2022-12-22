
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const data = [
	{src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", alt:"pixic"},
	{src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", alt:"lopsik"},
	{src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", alt:"lopsik"},
  ]

  const CaptionContainer = styled.div`
    text-align: center;
    display: flex;
    background-color: #222;
    padding: 2px 16px;
    color: white;
  `


export default function Gallery() {

	const [slideIndex, setSlideIndex] = useState(0)
  
	const moveSlides = (n: number) => {
	  setSlideIndex(slideIndex+n)
	}
  
	useEffect(()=>{
	  if (slideIndex > data.length - 1) setSlideIndex(0)
	  if (slideIndex < 0) setSlideIndex(data.length - 1)
	},[slideIndex])

	console.log(slideIndex, 'slideIndex')
  return (
	<Carousel
		showArrows={false}
		showIndicators={false}
		selectedItem={slideIndex}
		autoPlay
		infiniteLoop
		useKeyboardArrows
		swipeable
		autoFocus
		stopOnHover
	>
		{data.map((_, idx)=>(
			<div key={idx}>
				<img src={_.src} />
				<CaptionContainer key={`${idx}-captions`}> 
                  <Button style={{color: 'white'}} size="small" onClick={()=>moveSlides(-1)}>
                    <KeyboardArrowLeft /> Back
                  </Button>
                  <p id="caption">{_.alt}</p>
                  <Button style={{color: 'white'}} size="small" onClick={()=>moveSlides(1)}>
                    Next <KeyboardArrowRight />
                  </Button>
                </CaptionContainer>  
			</div>
		))}
	</Carousel>
  )
}
