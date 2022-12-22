import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import React, { useState, useRef, useEffect } from 'react'
import { css } from '@emotion/react';

const data = [
  {src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", alt:"pixic"},
  {src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", alt:"lopsik"},
  {src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", alt:"lopsik"},
]

export default function Carousel() {

  const [slideIndex, setSlideIndex] = useState(1)
  const caption = useRef(null);

  const plusSlides = (n: number) => {
    setSlideIndex(slideIndex+n)
  }

  const currentSlide = (n: number) => {
    setSlideIndex(n)
  }

  useEffect(()=>{
    if (slideIndex > data.length) setSlideIndex(1)
    if (slideIndex < 1) setSlideIndex(data.length)
  },[slideIndex])

  const ImageItem = styled.img`
    width: 100%;
    height: 70%;
    vertical-align: middle;
  `
  const Wrapper =  styled.div`
	  position: relative;
    width: 60%;
    margin: 5em auto;
  `

  const Slides = styled.div`
	  opacity: 1;
    animation-name: fade;
    animation-duration: 1.5s;
    @keyframes fade {
      from {opacity: .4} 
      to {opacity: 1}
    }
  `
  const CaptionContainer = styled.div`
    text-align: center;
    display: flex;
    background-color: #222;
    padding: 2px 16px;
    color: white;
  `
  
  const ImageRow = styled.img`
    cursor: pointer;
    height: 10em;
    vertical-align: middle;
    opacity: 0.6;
    width: 100%;
    &:hover {
     opacity: 1;
    }
  `

  const numberText = css`
    color: #f2f2f2;
    font-size: 1em;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  `

  const arrowStyles = ({isNext}) => css`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    ${
      isNext && (
        `
          right: 0;
          border-radius: 3px 0 0 3px;
        `
      )
    }
  `

  const buttonStylesContainer = css`
    position: absolute;
    top: 80%;
    left: 0; 
    right: 0; 
    display: flex;
    margin: 0 auto;
    justify-content: center;
  `

  const buttonStyles = (isActive: boolean) => css`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    ${
      isActive && (
        `
          background-color: #717171;
        `
      )
    }
    &:hover {
      background-color: #717171;
    }
  `


  return (
    <>
      <Typography variant='h3'>Slideshow Gallery</Typography>

      <Wrapper>
        {data.map((item, idx)=>{
          return(
            <>
            {(idx === slideIndex-1) && (
              <>
                <Slides key={`${idx}-slides`}>
                  <div css={numberText}>{idx+1}/{data.length}</div>
                  <ImageItem src={item.src} alt={item.alt}/>
                </Slides>
                <a key={`${idx}-left`} css={arrowStyles({isNext: false})} onClick={()=>plusSlides(-1)}>❮</a>
                <a key={`${idx}-right`} css={arrowStyles({isNext: true})} onClick={()=>plusSlides(1)}>❯</a>
                <CaptionContainer key={`${idx}-captions`}> 
                  <Button style={{color: 'white'}} size="small" onClick={()=>plusSlides(-1)}>
                    <KeyboardArrowLeft /> Back
                  </Button>
                  <p ref={caption} id="caption">{item.alt}</p>
                  <Button style={{color: 'white'}} size="small" onClick={()=>plusSlides(1)}>
                    Next <KeyboardArrowRight />
                  </Button>
                </CaptionContainer>      
              </>
            )}
            </>
          )
        })}
        <div css={buttonStylesContainer}>
          {data.map((item, idx)=>(
            <span css={buttonStyles(slideIndex-1 === idx)} onClick={()=>currentSlide(idx+1)}></span> 
          ))} 
        </div>
        {/* <BottomImagesRow>
          {data.map((item, idx)=>(
            <div key={`${idx}-bottomImages`}>
              <ImageRow src={item.src} onClick={()=>currentSlide(idx+1)} alt={item.alt}/>
            </div>
          ))} 
        </BottomImagesRow> */}
      </Wrapper>
    </>
  )
}
