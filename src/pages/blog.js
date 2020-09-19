import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							date(formatString: "DD MMM[,] YYYY")
							description
							title
							language
						}
					}
				}
			}
		}
	  `)
	
	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts here</p>
			<ol className={blogStyles.posts}>
				{data.allMarkdownRemark.edges.map((edge) => {
					return(
						<li className={blogStyles.post}>
							<Link to={`/blog/${edge.node.fields.slug}`}>
								<h2>
									{edge.node.frontmatter.title}
								</h2>
							</Link>
							<p>{edge.node.frontmatter.date}</p>
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}

export default BlogPage