const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: `/projects${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create project pages.
  const projects = result.data.allMdx.edges

  // you'll call `createPage` for each result
  projects.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/ProjectTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
