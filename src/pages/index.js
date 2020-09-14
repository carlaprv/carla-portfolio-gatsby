import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Card from '../components/card'
import Layout from '../components/layout'

import layoutStyles from '../components/layout.module.scss'
import indexStyles from './index.module.scss'

import { useIntl } from "gatsby-plugin-intl"

const IndexPage = () => {
	const intl = useIntl()
	const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
				author	
				headline
				bio
				image
				socialLinks {
					name
					link
					icon
				}
                }
            }
        }
    `)
	return(
		<Layout>
			<section className={layoutStyles.fullHeader}>
				<video poster="/images/carla_banner.jpg'" id="bgvid" loop muted autoPlay>
					<source src="/images/video-carla-banner.mp4" type="video/mp4"/>
				</video>
				<div className={layoutStyles.viewportHeader}>
					<div className={layoutStyles.hedcontainer}>
						<h1>
							{intl.formatMessage({ id: "greeting" })}
						</h1>
						<h2>
							{intl.formatMessage({ id: "headline" })}
						</h2>
						<ul className={layoutStyles.socialIcons}>
							{data.site.siteMetadata.socialLinks.map((socialItem) => {
								return(
								<li>
									<a href={socialItem.link} target="_blank" rel="noreferrer">
										<img src={socialItem.icon} alt={socialItem.name}/>
									</a>
								</li>
								)
							})}
						</ul>
						<button className={layoutStyles.headerButton} href="/">
							<a href="/">Visit my youtube channel</a>
						</button>
					</div>
				</div>

			</section>
			<section className={layoutStyles.fullHeader}>
				<div className={indexStyles.fullHeaderContainer}>
					<div className={indexStyles.fullHeaderContent}>
						<h1>
							{intl.formatMessage({ id: "greeting" })}
						</h1>
						<h2>
							{intl.formatMessage({ id: "headline" })}
						</h2>
						<ul className={indexStyles.socialIcons}>
							{data.site.siteMetadata.socialLinks.map((socialItem) => {
								return(
								<li>
									<a href={socialItem.link} target="_blank" rel="noreferrer">
										<img src={socialItem.icon} alt={socialItem.name}/>
									</a>
								</li>
								)
							})}
						</ul>
						<button className={indexStyles.headerButton} href="/">
							<a href="/">Visit my youtube channel</a>
						</button>
					</div>
				</div>
			</section>
			<section className={layoutStyles.coloredSection}>
				<div className={indexStyles.headerContainer}>
					<div className={indexStyles.headerImage}>
						<img src={data.site.siteMetadata.image}/>
					</div>
					<div className={indexStyles.headerText}>
						<h1>{data.site.siteMetadata.author}</h1>
						<h2 className={indexStyles.headline}>
							{intl.formatMessage({ id: "headline" })}
						</h2>
						<ul className={indexStyles.socialIcons}>
							{data.site.siteMetadata.socialLinks.map((socialItem) => {
								return(
								<li>
									<a href={socialItem.link} target="_blank" rel="noreferrer">
										<img src={socialItem.icon} alt={socialItem.name}/>
									</a>
								</li>
								)
							})}
						</ul>
					</div>
				</div>
				<p className={indexStyles.intro}>
					{intl.formatMessage({ id: "bio" })}
				</p>
			</section>
			<section className={layoutStyles.whiteSection}>
				<h2>
					Section 2
				</h2>
				<p>
					Lorem ipsum
				</p>
			</section>
			<section className={layoutStyles.coloredSection}>
				<h2>
					Section 2
					<a className={layoutStyles.button} href="/">View All Content</a>
				</h2>
				<Card></Card>
			</section>

			
			
		</Layout>
	)
}

export default IndexPage