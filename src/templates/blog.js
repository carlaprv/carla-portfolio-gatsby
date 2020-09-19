import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Blog = (props) => {
      const post = props.data.markdownRemark
      // const next = props.pageContext.next
      // const previous = props.pageContext.previous
      
      return(
            <Layout>
                  {/* Post Header with picture */}
                  <h1>{post.frontmatter.title}</h1>
                  <p>{post.frontmatter.date}</p>
                  <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
                  {/* Post Footer with author info */}
                  {/* Post tags */}
                  {/* <PostNav previous={previous} next={next} /> */}
                  {/* webmention */}
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
                        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                        description
                        title
                        tags
                        thumbnail {
                              id
                              publicURL
                        }
                  }
                  timeToRead
            }
      }

`

export default Blog