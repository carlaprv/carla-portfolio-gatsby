import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Blog = (props) => {
      return(
            <Layout>
                  <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                  <p>{props.data.markdownRemark.frontmatter.date}</p>
                  <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            </Layout>
      )
}

export const query = graphql`
      query PostBySlug($slug: String!) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
                  id
                  html
                  fields {
                        slug
                  }
                  frontmatter {
                        title
                        date
                  }
            }
      }

`

export default Blog