import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from '@emotion/styled';

const StyledSocialMedia = styled.div`
  display: flex;
  gap: 12px;
  margin: 1em;
  cursor: pointer;
  color: white;
`;

const IconWrapper = ({ href, children, style }) => {
  return (
    <a target="_blank" style={style} href={href} rel="noreferrer">
      {children}
    </a>
  );
};
const Icons = [
  { content: <TwitterIcon />, url: "https://twitter.com/i/flow/login" },
  { content: <FacebookIcon />, url: "https://facebook.com" },
  {
    content: <InstagramIcon />,
    url: "https://facebook.com",
    style: { color: "white" },
  },
  {
    content: <EmailIcon />,
    url: "mailto: acahvac@gmail.com",
    style: { color: "red" },
  },
  {
    content: <PhoneIcon />,
    url: "tel:6464539764",
    style: { color: "#010106" },
  },
];
export default function SocialMedia() {
  return (
    <StyledSocialMedia>
      {Icons.map((icon) => (
        <IconWrapper href={icon.url} style={icon.style}>
          {icon.content}
        </IconWrapper>
      ))}
    </StyledSocialMedia>
  );
}
