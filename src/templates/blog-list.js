import React from "react"
import { Link, graphql } from 'gatsby'
import classNames from 'classnames';

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogItem from '../components/blog-item'
import PageHeader from '../components/page-header'


import cardStyles from '../components/card.module.scss'
import layoutStyles from '../components/layout.module.scss'
import blogListStyles from './blog-list.module.scss'

import { useIntl } from "gatsby-plugin-intl"


const BlogListPage = (props) => {
	const intl = useIntl()
	const list = props.data.allMarkdownRemark.edges
	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
	const nextPage = `/blog/page/${currentPage + 1}`

	return (
		<Layout>
			<SEO title='Blog' />
			<PageHeader
				slug="blog"
				title="Blog"
				description="Por aqui você vai encontrar conteúdos sobre: tecnologia, Inteligência Artificial, livros, séries, política, discussões de raça e gênero — e a relação entre todos esses tópicos."
				background="/images/blog-bg-stabilo.jpg"
			/>
			<section className={classNames ({ [layoutStyles.coloredSection]: true, [blogListStyles.smallPadding]: true})}>
                        <div className={layoutStyles.sectionContent}>
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

					<div className={blogListStyles.pagination}>
						{!isFirst && (
							<Link to={prevPage} rel="prev" className={blogListStyles.pageLink}>
								← {intl.formatMessage({ id: "previous" })}
							</Link>
						)}
						<span>{intl.formatMessage({ id: "page" })} {currentPage} de {numPages}</span>
						{!isLast && (
							<Link to={nextPage} rel="next" className={blogListStyles.pageLink}>
								{intl.formatMessage({ id: "next" })} →
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
	filter: { fileAbsolutePath: { regex: "/(/content/posts)/" } }
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