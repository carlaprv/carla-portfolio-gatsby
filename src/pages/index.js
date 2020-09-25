import React from "react"
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Card from '../components/card'
import Layout from '../components/layout'
import YoutubeVideo from '../components/youtube-video'


import cardStyles from '../components/card.module.scss'
import layoutStyles from '../components/layout.module.scss'
import indexStyles from './index.module.scss'

import { useIntl } from "gatsby-plugin-intl"

const IndexPage = (props) => {
	const intl = useIntl()
	const list = props.data.posts.edges
	const youtube = props.data.youtube.edges

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
											<img src={socialItem.svg} alt={socialItem.name}/>
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
					<div className={indexStyles.about}>
						<h2>{intl.formatMessage({ id: "about" })}</h2>
						<img src="/images/avatar_carla_smile_transparent.png" className={indexStyles.aboutImage}/>
						{intl.locale === "pt" ? (
							<p>
								Carla é Bacharel em Sistemas de Informação pela USP, mestranda em <b>Inteligência Artificial</b> pela USP, engenheira de software e <a href="https://developers.google.com/community/experts/directory/profile/profile-carla_vieira">Google Developer Expert em Machine Learning</a>. Co-organizadora da <a href="https://perifaCode.com">perifaCode</a>, buscando levar a tecnologia para dentro das periferias. Acredita na tecnologia como ferramenta de transformação social e tem estudado sobre como o viés inconsciente tem afetado a Inteligência Artificial e como tornar algoritmos caixa-preta mais transparentes.
							</p>
						) : (
							<p>
								Carla holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-organizer of <a href="https://perifaCode.com">perifaCode</a> Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society.
							</p>
						)}	
					</div>				
				</div>
			</section>
			<section className={layoutStyles.whiteSection}>
				<div className={layoutStyles.sectionContent}>
					<div className={layoutStyles.titleContent}>
						{intl.locale === "pt" ? (
							<>
							<h2>Últimos vídeos do canal</h2>
							<a className={layoutStyles.button} href="https://youtube.com/eaicarla" target="_blank">Veja todos os vídeos</a>
							</>
						):(
							<><h2>Latest Youtube videos</h2>
							<a className={layoutStyles.button} href="https://youtube.com/eaicarla" target="_blank">See all videos</a>
							</>
						)}
					</div>
					<YoutubeVideo
							youtube={youtube}
						/>
				</div>
			</section>
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<div className={layoutStyles.titleContent}>
						{intl.locale === "pt" ? (
							<>
							<h2>Últimas do blog</h2>
							<Link className={layoutStyles.button} href="youtube.com/eaicarla">Veja todos os posts</Link>
							</>
						):(
							<><h2>Latest posts</h2>
							<Link className={layoutStyles.button} href="/blog">View All Posts</Link>
							</>
						)}
						
					</div>
					<ul className={cardStyles.cards}>
						{list.map((edge) => {
						return (
								<Card
									slug={edge.node.fields.slug}
									date={edge.node.frontmatter.date}
									title={edge.node.frontmatter.title}
									description={edge.node.frontmatter.description}
									image={edge.node.frontmatter.thumbnail.publicURL}
								/>
							)
						})}
					</ul>
					
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
		posts: allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { fileAbsolutePath: { regex: "/(/content/posts)/" } }
			limit: 3
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
				thumbnail {
                           id
                           publicURL
                        }
			    }
			  }
			}
		}
		youtube: allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: { fileAbsolutePath: { regex: "/(/content/youtube)/" } }
				limit: 3
			) {
			edges {
			  node {
			    frontmatter {
				title
				date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
				description
				videoid
				link
				channel
				thumbnail {
				  publicURL
				}
			    }
			  }
			}
		}
	}
`


