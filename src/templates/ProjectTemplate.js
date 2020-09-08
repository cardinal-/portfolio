import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import ProjectContainer from '../components/Projects/ProjectContainer'
import Layout from '../components/Layout'

import Blockquote from '../components/Blockquote'
import {
  BannerImage,
  ProjectTitle,
  ProjectOverview,
  ProjectTag,
  ProjectContent,
} from '../components/Projects/'

// Provide common components here
const shortcodes = {
  Link,
  BannerImage,
  ProjectTitle,
  ProjectOverview,
  ProjectTag,
  ProjectContent,
  Blockquote,
}

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
