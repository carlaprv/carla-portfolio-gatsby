import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogItem from '../components/blog-item'
import Pagination from '../components/pagination'

import blogStyles from './blog-list.module.scss'

const BlogListPage = (props) => {
	const list = props.data.allMarkdownRemark.edges
	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
	const nextPage = `/blog/page/${currentPage + 1}`

	return (
		<Layout>
			<h1>Blog</h1>
			<ol className={blogStyles.posts}>
				{list.map((edge) => {
					return (
						<li className={blogStyles.post}>
							<Link to={`/${edge.node.fields.slug}`}>
								<h2>{edge.node.frontmatter.title}</h2>
							</Link>
							<p>{edge.node.frontmatter.date}</p>
							<p>{edge.node.frontmatter.description}</p>
						</li>
					)
				})}
			</ol>

			{/* /* your code to display a list of posts */}
			{!isFirst && (
				<Link to={prevPage} rel="prev">
					← Previous Page
				</Link>
			)}
			{!isLast && (
				<Link to={nextPage} rel="next">
					Next Page →
				</Link>
			)}
		</Layout>
	)
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogListPage