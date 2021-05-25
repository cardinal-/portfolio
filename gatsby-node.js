const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetProjectURL {
      allMdx {
        nodes {
          id
          frontmatter {
            url
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create project pages.
  const projects = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  projects.forEach((node, index) => {
    createPage({
      pathPrefix: '/',
      // This is the slug you created before
      path: node.frontmatter.url,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/ProjectTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
