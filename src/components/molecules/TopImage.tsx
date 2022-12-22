import React from "react";
import styled from '@emotion/styled';
import { Typography } from "@mui/material";

export const StyledDiv = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-weight: bold;
  /* border: 3px solid #f1f1f1; */
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
`;

const StyledImageContainer = styled.div`
  background-image: url(${(props) => props.ImageUrl});
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-position: "center" !important;
  background-repeat: "no-repeat" !important;
  background-size: "cover" !important;
  object-fit: "cover";
`;

export const TopImage = ({
  ImageUrl,
  Text,
  width = "100vw",
  height = "50vh",
}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ImageUrl})`,
          width,
          height,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      ></div>
      {Text && (
        <StyledDiv>
          <Typography variant="h3">{Text}</Typography>
        </StyledDiv>
      )}
      <br />
    </>
  );
};
