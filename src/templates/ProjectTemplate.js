import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import ProjectContainer from '../components/Projects/ProjectContainer'
import Layout from '../components/Layout'

import BannerImage from '../components/Projects/BannerImage'

const shortcodes = { Link, BannerImage } // Provide common components here

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <ProjectContainer>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </ProjectContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
