import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import styled from '@emotion/styled';

export const CustomPaper = styled(Paper)`
  width: 256px;
  height: 128px;
  margin: 8px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #008cba !important;
`;

export const CustomGrid = styled(Grid)`
  @media screen and (min-width: 468px) {
    flex-direction: column;
    direction: "row";
    justify-content: "center";
    align-items: "center";
  }
`;

export const Input = styled("input")({
  display: "none",
});

export const FadeInContainer = styled.div`
  position: relative;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #008cba;

  &:hover {
    opacity: 1;
  }
`;

export const StyledFadeInText = styled(Typography)`
  color: white;
  font-size: 2rem !important;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const CenteredGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const IconStyle = {
  fontSize: "100px",
  display: "flex",
};

export const SingleCenteredIcon = ({ Text, Icon }) => {
  return (
    <>
      <CenteredGrid item xs={12} md={4}>
        <CustomPaper elavation={24}>
          <FadeInContainer>
            <Icon style={IconStyle} />
            <Overlay>
              <StyledFadeInText>{Text}</StyledFadeInText>
            </Overlay>
          </FadeInContainer>
        </CustomPaper>
      </CenteredGrid>
    </>
  );
};

export const CenteredIconsArray = ({ Icons }) => {
  return (
    <>
      {Icons.map(({ Text, Icon }) => {
        return (
          <CenteredGrid item xs={12} md={12 / Icons.length}>
            <CustomPaper elavation={24}>
              <FadeInContainer>
                <Icon style={IconStyle} />
                <Overlay>
                  <StyledFadeInText>{Text}</StyledFadeInText>
                </Overlay>
              </FadeInContainer>
            </CustomPaper>
          </CenteredGrid>
        );
      })}
    </>
  );
};
