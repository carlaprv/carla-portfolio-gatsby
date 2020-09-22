import React from "react"
import { graphql } from 'gatsby'

import SEO from '../components/Seo'
import Card from '../components/card'
import Layout from '../components/layout'

import layoutStyles from '../components/layout.module.scss'
import indexStyles from './index.module.scss'

import { useIntl } from "gatsby-plugin-intl"

const IndexPage = (props) => {
	const intl = useIntl()

	return(
		<Layout>
			<SEO title={intl.formatMessage({ id: "home" })} lang={intl.locale}/>
			<section>
				<video poster="" id="bgvid" loop muted autoPlay>
					<source src="/images/video-carla-banner.mp4" type="video/mp4"/>
				</video>
				<div className={indexStyles.viewportHeader}>
					<div className={indexStyles.fullHeaderContainer}>
						<h1>{intl.formatMessage({ id: "greeting" })}</h1>
						<h2>{intl.formatMessage({ id: "headline" })}</h2>
						<ul className={indexStyles.socialIcons}>
							{props.data.site.siteMetadata.socialLinks.map((socialItem) => {
								return(
									<li>
										<a href={socialItem.link} target="_blank" rel="noreferrer">
											<img src={socialItem.svg} alt={socialItem.name} alt=""/>
										</a>
									</li>
								)
							})}
						</ul>
						<button className={indexStyles.headerButton}>
							<a href="/">{intl.formatMessage({ id: "cta" })}</a>
						</button>
					</div>
				</div>

			</section>
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<h2>{intl.formatMessage({ id: "about" })}</h2>
					{intl.locale === "pt" ? (
						<p>
							Carla é Bacharel em Sistemas de Informação pela USP, mestranda em Inteligência Artificial pela USP, engenheira de software e Google Developer Expert em Machine Learning. Co-organizadora da <a href="https://perifaCode.com">perifaCode</a>, buscando levar a tecnologia para dentro das periferias. Acredita na tecnologia como ferramenta de transformação social e tem estudado sobre como o viés inconsciente tem afetado a Inteligência Artificial e como tornar algoritmos caixa-preta mais transparentes.
						</p>
					) : (
						<p>
							Carla holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-organizer of <a href="https://perifaCode.com">perifaCode</a> Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society.
						</p>
					)}
				</div>
			</section>
			<section className={layoutStyles.whiteSection}>
				<div className={layoutStyles.sectionContent}>
					<h2>Section 2</h2>
					<p>Lorem ipsum</p>
				</div>
			</section>
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<h2>
						Section 2
						<a className={layoutStyles.button} href="/">View All Content</a>
					</h2>
					<Card></Card>
				</div>
			</section>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		site{
			siteMetadata{
				author	
				image
				socialLinks {
					name
					link
					icon
					svg
				}
			}
		}
	}

`


