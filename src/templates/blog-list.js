import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import layoutStyles from '../components/layout.module.scss'
import blogPostStyles from './blog-list.module.scss'

import Card from '../components/card'
import BlogItem from '../components/blog-item'

import cardStyles from '../components/card.module.scss'


const BlogListPage = (props) => {
	const list = props.data.allMarkdownRemark.edges
	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
	const nextPage = `/blog/page/${currentPage + 1}`

	return (
		<Layout>
			<SEO title='Blog' />
			<section className={layoutStyles.coloredSection}>
                        <div className={layoutStyles.sectionContent}>
					<h1>Blog</h1>
					<ul className={cardStyles.cards}>
						{list.map((edge) => {
							return (
								<BlogItem
									slug={edge.node.fields.slug}
									date={edge.node.frontmatter.date}
									title={edge.node.frontmatter.title}
									description={edge.node.frontmatter.description}
									categories={edge.node.frontmatter.categories}
									image={edge.node.frontmatter.thumbnail.publicURL}
								/>
							)
						})}
					</ul>

					<div className={blogPostStyles.pagination}>
						{!isFirst && (
							<Link to={prevPage} rel="prev" className={blogPostStyles.pageLink}>
								← Previous Page
							</Link>
						)}
						<span>{currentPage} de {numPages}</span>
						{!isLast && (
							<Link to={nextPage} rel="next" className={blogPostStyles.pageLink}>
								Next Page →
							</Link>
						)}
					</div>
				</div>
			</section>
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
		categories
		thumbnail {
		   id
		   publicURL
		}
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogListPage