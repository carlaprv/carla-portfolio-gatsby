import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.scss'
import indexStyles from '../pages/index.module.scss'

import blogPostStyles from './blog.module.scss'


const BlogPost = (props) => {
      const post = props.data.markdownRemark
      const next = props.pageContext.next
      const previous = props.pageContext.previous
      
      return(
            <Layout>
                  <div className={blogPostStyles.postHeader}>
                        {/* Post Header with picture */}
                        <img src={post.frontmatter.thumbnail.publicURL}/>
                  </div>

                  <section className={layoutStyles.coloredSection}>
                        <div className={layoutStyles.sectionContent}>
                              <div className={blogPostStyles.postData}>
                                    {/* button back to blog list */}<Link to="/" rel="prev" className={blogPostStyles.backLink}>← Voltar na listagem</Link>
                                    <p className={blogPostStyles.date}>
                                          {post.frontmatter.date} · Leitura de {post.timeToRead} min
                                    </p>
                                    <h1 className={blogPostStyles.postTitle}>{post.frontmatter.title}</h1>
                                    <p  className={blogPostStyles.postDescription}>{post.frontmatter.description}</p>

                                    <div className={blogPostStyles.postSocial}>
                                          <div className={blogPostStyles.tags}>
                                                {post.frontmatter.tags.map((tag) => {
                                                      return(
                                                            <div className={blogPostStyles.tagButton}>
                                                                  <a href="/">{tag}</a>
                                                            </div>
                                                      )
                                                })}  
                                          </div>
                                          <div className={blogPostStyles.share}>

                                          </div>
                                    </div>
                              </div>

                              <div className={blogPostStyles.postContent}>
                                    <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
                              </div>

                              <div className={blogPostStyles.blogPagination}>
                                    {previous && (
                                          <div className={blogPostStyles.blogNav}>
                                                Anterior - {previous.frontmatter.title}        
                                          </div>
                                          
                                    )}
                                    {next && (
                                          <div className={blogPostStyles.blogNav}>
                                                Próximo - {next.frontmatter.title}
                                          </div>
                                    )}
                              </div>

                              {/* <PostNav previous={previous} next={next} /> */}
                              {/* webmention */}
                              
                        </div>
                  </section>
            </Layout>
      )
}

export default BlogPost

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