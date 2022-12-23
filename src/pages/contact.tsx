import React, { useState, useRef, ChangeEvent } from "react";
import styled from '@emotion/styled';
import Maps from "../components/Maps";
import { ContactInformation } from "../components/molecules";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ReCAPTCHA from "react-google-recaptcha";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const DivComponent = styled.div`
  text-align: center;
  margin-top: 5em;
  border-right: 1px solid #50d8af;
`;

const ContactComponent = {
  fontSize: '48px',
  display: 'inline-block',
  marginBottom: '30',
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Contact() {
  const [st, setSt] = useState("ny");
  const [isVerified, setIsVerified] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipError, setZipError] = useState(false);
  const [zipCity, setCity] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const form = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current, 'this is form')
    emailjs.sendForm('service_cd4xjoo', 'template_x3y0gtm', form.current, 'ztvNfuJ3TprLZZxKW')
      .then((result) => {
          console.log(result.text);
          setShowSuccess(true)
          setShowError(false)
      }, (error) => {
          setShowSuccess(false)
          setShowError(true)
          console.log(error.text);
    });
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    setSt(event.target.value);
  };

  const handleValidation = (token: string | null): (void | undefined) => {
    console.log(token);
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin": "*" ,
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
      },
    };
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GATSBY_RECAPTCHA_SECRET_KEY}response=${token}`, requestOptions)
      .then(response=>response.json())
      .then(data=> console.log('data - ', data))
    setIsVerified(true)
  };

  return (
    <Layout>
      {showSuccess && <Alert severity="success">This is a success message!</Alert>}
      {showError && <Alert severity="error">Sorry sending email failed. Please try again!</Alert>}
      <div>
        <Typography component="h3" variant="h3"> Contact Us </Typography>
      </div>
      <Grid container >
        <Grid item xs={4}>
            <DivComponent>
              <LocationOnIcon style={ContactComponent}
              />
              <h3>ADDRESS</h3>
              <address><p>A108 Adam Street, NY 535022, USA</p></address>
            </DivComponent>
        </Grid>     
        <Grid item xs={4}>
            <DivComponent>
              <PhoneEnabledIcon style={ContactComponent}
              />
              <h3>PHONE NUMBER</h3>
              <p><a href={`tel:+15445455444`}>+15445455444</a></p>
            </DivComponent>
        </Grid>      
        <Grid item xs={4}>
          <DivComponent style={{borderRight: 'none'}}>
              <EmailIcon style={ContactComponent}/>
              <h3>EMAIL</h3>
              <p><a href={`mailto:samanduyev@gmail.com`}>test@example.com</a></p>
          </DivComponent>
        </Grid>
      </Grid>
      <Grid >
            <Maps
              height="380"
              width={"100%"}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6057.656200094997!2d-73.96912608365665!3d40.611616175107166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244e8f0504275%3A0xe4011ccf116bf44c!2s1510%20Ocean%20Pkwy%2C%20Brooklyn%2C%20NY%2011230!5e0!3m2!1sen!2sus!4v1622082083935!5m2!1sen!2sus"
              }
              style={{
                border: 0,
                margin: " 0 auto",
              }}
            />
          </Grid>
        <Grid container>
          <form ref={form} onSubmit={sendEmail}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={11} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    value={firstName}
                    type="text"
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={11} md={6}>
                  <TextField fullWidth label="Last Name" value={lastName} required type="text" onChange={(e)=>setLastName(e.target.value)} />
                </Grid>
                <Grid item xs={11} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Grid>
                <Grid xs={11} md={6} item>
                  <TextField
                    fullWidth
                    label="Phone number"
                    required
                    type="string"
                    value={phoneNumber}
                    onChange={(e)=>{
                      const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                      if(e.target.value.match(phoneNumberRegex)) {
                        setPhoneNumberError(false)
                      }
                      else{
                        setPhoneNumberError(true)
                      }
                      setPhoneNumber(e.target.value)
                    }}
                    error={phoneNumberError}
                    helperText={phoneNumberError && "Please follow format xxx-xxx-xxxx"}
                  />
                </Grid>
                <Grid item xs={11} md={12}>
                  <TextField fullWidth label="Address" required type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
                </Grid>
                <Grid item xs={11} md={4}>
                  <Select
                    onChange={handleChange}
                    value={st}
                    fullWidth
                    label="State"
                  >
                    <MenuItem value="ny"> NY </MenuItem>
                    <MenuItem value="nj"> NJ </MenuItem>
                    <MenuItem value="pa"> PA </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={11} md={4}>
                  <TextField fullWidth label="City" value={zipCity} onChange={(e)=>setCity(e.target.value)}/>
                </Grid>
                <Grid item xs={11} md={4}>
                  <TextField fullWidth label="ZIP code" value={zipCode} onChange={(e)=>{
                      const zipValidation = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/
                      if(e.target.value.match(zipValidation)) {
                        setZipError(false)
                      }
                      else{
                        setZipError(true)
                      }
                      setZipCode(e.target.value)            
                    }}
                    error={zipError}
                    helperText={zipError && `Please follow format xxxxx or xxxxx-xxxx`}
                  />
                </Grid>
                <Grid item xs={11} md={12}>
                  <TextField fullWidth rows={4} label="Message" value={message} multiline onChange={(e)=> setMessage(e.target.value)}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11} md={6} sx={{ marginTop: "2rem" }}>
              <ReCAPTCHA
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY as string}
                onChange={handleValidation}
              />
            </Grid>
            <Grid item xs={11} md={6} sx={{ marginTop: "2rem" }}>
              <Button
                data-action="submit"
                variant="contained"
                type="submit"
                disabled={!isVerified}
              >
                SEND A MESSAGE
              </Button>
            </Grid>
          </form>
        </Grid>
        <br />
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          ></Grid>
        </Grid>
    </Layout>
  );
}