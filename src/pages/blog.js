import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = (props) => {
	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts here</p>
			<ol className={blogStyles.posts}>
				{props.data.allMarkdownRemark.edges.map((edge) => {
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

export const data = graphql`
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
`
	

export default BlogPage