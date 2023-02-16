const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const NavbarTemplate = path.resolve(`src/components/Navbar.ts`)
//   const authorTemplate = path.resolve(`src/components/authorTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // const pageTemplate = (node.frontmatter.type == 'author' ? authorTemplate : bookTemplate)
    
    createPage({
      path: node.frontmatter.path,
      component: NavbarTemplate,
      context: {}
    })
  })
}