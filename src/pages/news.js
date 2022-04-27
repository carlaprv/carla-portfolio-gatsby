import React from "react"
import styled from "styled-components"

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Card from '../components/card'
import layoutStyles from '../components/layout.module.scss'

const NewsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	list-style: none;
	justify-content: space-between;
	margin: 0;
	margin-top: 40px;
	padding: 0;
`

const NewsPage = (props) => {
	const news = props.data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="News"/>
			<PageHeader
				slug="news"
				title="News"
				description="Matérias jornalísticas e entrevistas nas quais colaborei"
				background=""
			/>
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<NewsContainer>
                        {news.map((edge) => {
                            return (
                                <Card
                                    slug={""}
                                    external_link={edge.node.frontmatter.link}
                                    date={edge.node.frontmatter.date}
                                    title={edge.node.frontmatter.title}
                                    description={edge.node.frontmatter.midianame}
                                    image={edge.node.frontmatter.thumbnail.publicURL}
                                />
                            )
						})}	
					</NewsContainer>
				</div>
			</section>
		</Layout>
	)
}

export const NewsListQuery = graphql`
   query NewsListQuery {
	allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/(/content/news)/"}}) {
	  edges {
	    node {
		frontmatter {
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            midianame
            title
            author
            link
            thumbnail {
                id
                publicURL
            }
		}
	    }
	  }
	}
    }    
`

export default NewsPage