import React from "react"
import { Link } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'

import layoutStyles from '../components/layout.module.scss'

const PodcastsContainer = styled.div`
	display: flex;
`


const PodcastsPage = () => {
	const intl = useIntl()

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
						
				</div>
				<PodcastsContainer>
							
				</PodcastsContainer>
			</section>
		</Layout>
	)
}

export default PodcastsPage