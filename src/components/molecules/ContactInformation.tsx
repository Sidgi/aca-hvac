import React from "react";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";



const IconWrapper = styled.a({
  cursor: 'pointer',
  color: 'inherit',
 ':hover': {
    color: 'grey'
  }, 
  transitionDuration:'1s',
})

export default function ContactInformation() {
  return (
    <>
      <Typography variant="h5" component="h5">
        Stay Connected
      </Typography>
      <br/>
      <div style={{display: 'flex'}}>
        <TextField style={{backgroundColor: 'white'}} id="subscribe" label="" variant="outlined" />
        <Button variant="contained">Sign up</Button>
      </div>
      <br/>
      <div style={{display:'flex', justifyContent: 'flex-start', gap:'1em'}}>
        <IconWrapper href="https://www.google.com" target="_blank">
          <EmailIcon />
        </IconWrapper>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
        <IconWrapper>
          <FacebookIcon />
        </IconWrapper>
        <IconWrapper>
          <TwitterIcon />
        </IconWrapper>
        <IconWrapper>
          <InstagramIcon />
        </IconWrapper>
      </div>
      {/* <Typography>
        <EmailIcon /> acahvacheating@gmail.com
      </Typography> */}
    </>
  );
}
