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
			markdownRemark(fileAbsolutePath: { regex: "/index_data.md/" }) {
				html  
				frontmatter {
				title
					lang
				}
			}
		}
	`)  


	return(
		<Layout>
			<section>
				<video poster="" id="bgvid" loop muted autoPlay>
					<source src="/images/video-carla-banner.mp4" type="video/mp4"/>
				</video>
				<div className={indexStyles.viewportHeader}>
					<div className={indexStyles.fullHeaderContainer}>
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
							<a href="/">{intl.formatMessage({ id: "cta" })}</a>
						</button>
					</div>
				</div>

			</section>
			<section className={layoutStyles.coloredSection}>
				<h2>{intl.formatMessage({ id: "about" })}</h2>
				<p className={indexStyles.intro} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></p>
			</section>
			<section className={layoutStyles.whiteSection}>
				<h2>Section 2</h2>
				<p>Lorem ipsum</p>
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