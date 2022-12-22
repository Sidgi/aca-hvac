import { Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const StyledMaps = styled.div`
  margin: 3rem auto;
  height: 300px;
  padding-top: 5em;
  padding-bottom: 10em;
`;

export default function Maps({ height, width, style, src }) {
  return (
    <StyledMaps>
      <iframe
        src={src}
        width={width}
        height={height}
        style={style}
        loading="lazy"
      ></iframe>
    </StyledMaps>
  );
}
