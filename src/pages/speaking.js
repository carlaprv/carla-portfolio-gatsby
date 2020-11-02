import React from "react"
import { graphql, Link } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import TalkItem from '../components/talk-item'

import layoutStyles from '../components/layout.module.scss'

const SpeakingContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	list-style: none;
	justify-content: space-between;
	margin: 0;
	margin-top: 40px;
	padding: 0;
`

const SpeakingSection = styled.div`
	display: grid;
	grid-template-columns: repeat(12, [col-start] 1fr);
	background: #fbf4ff;
	padding:15px 0;
	background-image: url('/images/background.png');
	background-position: top;
	background-attachment: fixed;
	text-align: left;
	color: #251b33;
`

const SpeakingPage = (props) => {
	const intl = useIntl()
	const talks = props.data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "speaking" })} />
			<PageHeader
				slug="speaking"
				title={intl.formatMessage({ id: "speaking" })}
				description="Por aqui você vai encontrar os conteúdos das minhas palestras."
				background=""
			/>
			<SpeakingSection>
				<div className={layoutStyles.sectionContent}>
					<SpeakingContainer>
						{talks.map((edge) => {
							return (
								<TalkItem
									image={edge.node.frontmatter.thumbnail.publicURL}
									date={edge.node.frontmatter.date}
									title={edge.node.frontmatter.title}
									eventname={edge.node.frontmatter.eventname}
									video={edge.node.frontmatter.video}
									slides={edge.node.frontmatter.slides}
								/>
							)
						})}	
					</SpeakingContainer>	
				</div>
			</SpeakingSection>
		</Layout>
	)
}

export const TalksListQuery = graphql`
   query TalksListQuery {
	allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/(/content/talks)/"}}) {
	  edges {
	    node {
		frontmatter {
		  title
		  date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
		  eventname
		  thumbnail {
		    id
		    publicURL
		  }
		  video
		  slides
		}
	    }
	  }
	}
    }    
`

export default SpeakingPage