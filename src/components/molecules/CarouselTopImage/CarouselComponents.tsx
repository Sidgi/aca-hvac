import { Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from '@emotion/styled';

export const MainSlideContainer = styled.div`
  max-width: 100vw;
  position: relative;
  margin: auto;
`;

export const StyledCaptionText = styled(Typography)`
  color: #f2f2f2;
  padding: 8px 12px;
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
`;

/* Number text (1/3 etc) */
export const NumberText = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 300px) {
    font-size: 11px;
  }
`;

/* The dots/bullets/indicators */
export const Dots = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:active,
  hover {
    background-color: #717171;
  }
`;

const fade = keyframes`
   from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

export const ImageSlide = styled.img`
  width: 100vw;
  height: 50vh;
  /* -webkit-animation-name: ${fade};
  -webkit-animation-duration: 1.5s;
  animation-name: ${fade};
  animation-duration: 1.5s; */
`;

/* Fading animation */
export const FadeAnimation = styled.div`
  -webkit-animation-name: ${fade};
  -webkit-animation-duration: 1.5s;
  animation-name: ${fade};
  animation-duration: 1.5s;
`;

/* Fading animation */
export const CenteredDiv = styled.div`
  text-align: center;
`;
