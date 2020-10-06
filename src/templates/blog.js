import React from 'react'
import { Link, graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

import SEO from '../components/seo'
import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.scss'
import blogPostStyles from './blog.module.scss'


const BlogPost = (props) => {
	const intl = useIntl()
      const post = props.data.markdownRemark
      const next = props.pageContext.next
      const previous = props.pageContext.previous
      
      return(
            <Layout>
                  <SEO
                        title={post.frontmatter.title}
                        description={post.frontmatter.description}
                        image={post.frontmatter.thumbnail}
                  />
                  <div className={blogPostStyles.postHeader}>
                        <img src={post.frontmatter.thumbnail.publicURL} alt=""/>
                  </div>

                  <section className={layoutStyles.coloredSection}>
                        <div className={layoutStyles.sectionContent410}>
                              <div className={blogPostStyles.postData}>
                                    <Link to="/blog" rel="blog" className={blogPostStyles.backLink}>← Voltar na listagem</Link>
                                    <p className={blogPostStyles.date}>
                                          {post.frontmatter.date} · Leitura de {post.timeToRead} min · Escrito por <b>{props.data.site.siteMetadata.author}</b>
                                    </p>
                                    <h1 className={blogPostStyles.postTitle}>{post.frontmatter.title}</h1>
                                    <p  className={blogPostStyles.postDescription}>{post.frontmatter.description}</p>

                                    <div className={blogPostStyles.postSocial}>
                                          <div className={blogPostStyles.tags}>
                                                {post.frontmatter.categories.map((category) => {
                                                      return(
                                                            <div className={blogPostStyles.tagButton}>
                                                                  <a href="/">{category}</a>
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
                              
                              {intl.locale === "pt" ? (
                                    <div className={blogPostStyles.blogSupport}>
                                          <div className={blogPostStyles.blogSupportText}>
                                                <p>Se você achou esse artigo útil e gostou do conteúdo! Que tal apoiar meu trabalho?</p>
                                          </div>
                                          <div className={blogPostStyles.blogSupportButton}>
                                                <img src="/images/coffee-cup.png"/>
                                                <a href="https://picpay.me/carlaprv">Aceito um café</a>
                                          </div>
                                    </div>
                              ):(
                                    <div className={blogPostStyles.blogSupport}>
                                          <div className={blogPostStyles.blogSupportText}>
                                                <p>If you found this article useful or it’s saved you time, I would be grateful for your support.</p>
                                          </div>
                                          <div className={blogPostStyles.blogSupportButton}>
                                                <img src="/images/coffee-cup.png"/>
                                                <a href="https://picpay.me/carlaprv">Buy me a coffee</a>
                                          </div>
                                    </div>
                              )}

                              <div className={blogPostStyles.blogPagination}>
                                    {previous && (
                                          <div className={blogPostStyles.blogNav}> 
                                                <h2>Anterior</h2>
                                                 
                                                <Link to={`/${previous.fields.slug}`}>
                                                      <div className={blogPostStyles.blogNavItem}> 
                                                            <time>{previous.frontmatter.date}</time>
                                                            <h3>{previous.frontmatter.title}</h3>
                                                      </div>
                                                </Link>
                                          </div>
                                          
                                    )}
                                    {next && (
                                          <div className={blogPostStyles.blogNav}> 
                                                <h2>Próximo</h2>
                                                <Link to={`/${next.fields.slug}`}>
                                                      <div className={blogPostStyles.blogNavItem}> 
                                                            <time>{next.frontmatter.date}</time>
                                                            <h3>{next.frontmatter.title}</h3>
                                                      </div>
                                                </Link>
                                          </div>
                                    )}
                              </div>

                              {/* webmention */}
                              
                        </div>
                  </section>
            </Layout>
      )
}

export default BlogPost

export const query = graphql`
      query PostBySlug($slug: String!) {
            site{
                  siteMetadata{
                       author	
                       image
                  }
            }
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
                        categories
                        thumbnail {
                              id
                              publicURL
                        }
                  }
                  timeToRead
            }
      }

`