import * as React from "react"
import { graphql, Script } from "gatsby"
import Button from '@mui/material/Button';
import Layout from "../components/Layout";
import { Box, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const Item = styled(Paper)(({ theme }) => ({
	textAlign: 'center',
	color: 'black',
	height: 60,
	lineHeight: '60px',
}));

type SiteInfoQuery = {
  data:{
    site: {
      siteMetadata: {
        siteUrl: string,
        title: string,
        description: string,
        copyright: string,
      }
    }
  }
}

const IndexPage = ({data}: SiteInfoQuery) => {

  const {title, description} = data.site.siteMetadata;

  return (

      <Layout>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        <ul style={listStyles}>
       { title && <Typography>{title}</Typography>}
       { description && <Typography>{description}</Typography>}
        <Button variant="text">Text</Button>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr 1fr' },
                  gap: 2,
                }}
              >
                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                  <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                  </Item>
                ))}
              </Box>
            </li>
          ))}
        </ul>
      </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        siteUrl
        title
        description
        copyright
      }
    }
  }
`
