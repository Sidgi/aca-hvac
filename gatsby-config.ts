import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TEST DEMO`,
    siteUrl: `https://example.com`,
    description: "Site for TEST DEMO",
    copyright: "SVS NYC 2023"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-transformer-remark",{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "static/images/logo-2.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-netlify-cms", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./content/"
    },
    __key: "content"
  }],
};

export default config;
