import React from "react"
// import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import TalkItem from '../components/talk-item'
import layoutStyles from '../components/layout.module.scss'

const PodcastsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	list-style: none;
	justify-content: space-between;
	margin: 0;
	margin-top: 40px;
	padding: 0;
`

const PodcastsPage = (props) => {
	// const intl = useIntl()
	const podcasts = props.data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Podcasts"/>
			<PageHeader
				slug="podcasts"
				title="Podcasts"
				description="Por aqui você vai encontrar episódios de podcasts que já participei"
				background="/images/speaking/podcast.jpg"
			/>
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<PodcastsContainer>
						{podcasts.map((edge) => {
							return (
								<TalkItem
									image={edge.node.frontmatter.thumbnail.publicURL}
									date={edge.node.frontmatter.date}
									title={edge.node.frontmatter.title}
									eventname={edge.node.frontmatter.podcastname}
									slides={edge.node.frontmatter.episodelink}
								/>
							)
						})}		
					</PodcastsContainer>
				</div>
			</section>
		</Layout>
	)
}

export const PodcastsListQuery = graphql`
   query PodcastsListQuery {
	allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/(/content/podcasts)/"}}) {
	  edges {
	    node {
		frontmatter {
		  title
		  date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
		  podcastname
		  thumbnail {
		    id
		    publicURL
		  }
		  slides
		}
	    }
	  }
	}
    }    
`

export default PodcastsPage