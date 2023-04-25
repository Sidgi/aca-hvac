import styled from '@emotion/styled';
import { Grid, Container, Typography, Divider } from '@mui/material';
import React from 'react';
import { ContactInformation, WorkingHours } from './molecules';
import { Link } from 'gatsby';
import Logo from './Logo';

const footers = [
  {
    title: 'Company',
    description: [
      { name: 'Team', link: 'team' },
      { name: 'History', link: 'history' },
      { name: 'Contact us', link: 'contact' },
      { name: 'FAQ', link: 'faq' },
    ],
  },
  {
    title: 'Services',
    description: [
      { name: 'Heating', link: '/' },
      { name: 'Cooling', link: '' },
      { name: 'Testimonials', link: '' },
      { name: 'Final resource', link: '' },
    ],
  },
  {
    title: 'Legal',
    description: [
      { name: 'Privacy policy', link: 'privacy' },
      { name: 'Terms of use', link: 'terms' },
    ],
  },
];

const StyledFooterContent = styled.div`
  display: flex;
  gap: 5em;
  padding-top: 5px;
`;

const Copyright = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px 0 15px 0',
});

const StyledFooter = styled.footer`
  background: radial-gradient(at top left, #50505a 0%, #08050e 100%);
  background-repeat: no-repeat;
  color: white !important;
  margin-top: 10em;
  padding: 3em 0px 1em 0px;
`;

const StyledFooterItem = styled.a({
  ':hover': {
    color: 'grey',
  },
  transitionDuration: '1s',
  cursor: 'pointer',
});

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <Container
          maxWidth="xl"
          component="footer"
          sx={{
            color: 'white',
            pb: '3em',
          }}
        >
          <Grid container spacing={4} justifyContent="flex-start">
            <Grid item xs={2}>
              <Logo coefficient={2} />
              <Typography style={{ width: '80%', textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consec adipis elit. Ipsa sit magni
              </Typography>
            </Grid>
            {footers.map((footer, idx) => (
              <Grid item xs={3} sm={2} key={idx}>
                <Typography variant="h6" color="white" gutterBottom>
                  {footer.title}
                </Typography>
                <>
                  {footer.description.map((item) => (
                    <p key={item.name}>
                      <Link style={{ color: 'white' }} to={`/${item.link}`}>
                        {item.name}
                      </Link>
                    </p>
                  ))}
                </>
              </Grid>
            ))}
            <Grid item xs={3} style={{ margin: 'auto' }}>
              <ContactInformation />
            </Grid>
          </Grid>
        </Container>
      </StyledFooterContent>
      <Divider color="white" />
      <Copyright>
        <span style={{ cursor: 'pointer' }}>SVS NYC 2023 &copy;</span>
      </Copyright>
    </StyledFooter>
  );
}
