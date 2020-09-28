import React from "react"
import { Link, graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

import SEO from '../components/seo'
import Card from '../components/card'
import Layout from '../components/layout'
import YoutubeVideo from '../components/youtube-video'
import Social from '../components/social-icons'

import cardStyles from '../components/card.module.scss'
import layoutStyles from '../components/layout.module.scss'
import indexStyles from './index.module.scss'

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
						<Social purple={false}/>
						<button className={indexStyles.headerButton}>
							<a href="/">{intl.formatMessage({ id: "cta" })}</a>
						</button>
					</div>
				</div>

			</section>
			<section id="about" className={layoutStyles.whiteSection}>
				<div className={layoutStyles.sectionContent}>
					<div className={indexStyles.about}>
						<div>

						
						<h2>{intl.formatMessage({ id: "about" })}</h2>
						{intl.locale === "pt" ? (
							<p>
								<b>Carla Vieira</b> é Bacharel em Sistemas de Informação pela USP, mestranda em <b>Inteligência Artificial</b> pela USP, engenheira de software e <a href="https://developers.google.com/community/experts/directory/profile/profile-carla_vieira">Google Developer Expert em Machine Learning</a>. Co-organizadora da <a href="https://perifaCode.com">perifaCode</a>, buscando levar a tecnologia para dentro das periferias. Acredita na tecnologia como ferramenta de transformação social e tem estudado sobre como o viés inconsciente tem afetado a Inteligência Artificial e como tornar algoritmos caixa-preta mais transparentes.
							</p>
						) : (
							<p>
								<b>Carla Vieira</b> holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-organizer of <a href="https://perifaCode.com">perifaCode</a> Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society.
							</p>
						)}
						</div>	
						<img src="/images/carla/foto-carla-2020.jpg" className={indexStyles.aboutImage}/>
					</div>				
				</div>
			</section>
			<section id="projects" className={layoutStyles.gradientSection}>
				<div className={layoutStyles.sectionContent}>
					<h2>{intl.formatMessage({ id: "projects" })}</h2>
					<div className={indexStyles.projects}>
						<div className={indexStyles.projectItem}>
							<div className={indexStyles.details}>
								<h3>ONG perifaCode</h3>
								{intl.locale === "pt" ? (
									<p>A comunidade de programação da periferia! Aqui reunimos pessoas que moram em periferias, favelas e guetos do Brasil para criar uma rede de apoio para conseguirmos vencer os desafios sociais que nos limitam a entrada ou evolução na área de programação.</p>
								) : (
									<p></p>
								)}
								<p><a href="">Conheça o projeto!</a></p>
							</div>
							<div className={indexStyles.projectImage}><img src="/images/projects/perifacode.jpg"/></div>
						</div>
						<div className={indexStyles.projectItem}>
							<div className={indexStyles.details}>
								<h3>Palestras</h3>
								{intl.locale === "pt" ? (
									<p>A comunidade de programação da periferia! Aqui reunimos pessoas que moram em periferias, favelas e guetos do Brasil para criar uma rede de apoio para conseguirmos vencer os desafios sociais que nos limitam a entrada ou evolução na área de programação.</p>
								) : (
									<p></p>
								)}
								<p><a href="">Acesse meu portfolio</a></p>
							</div>
							<div className={indexStyles.projectImage}><img src="/images/projects/carla-palestra-serasa.jpg"/></div>
						</div>
						<div className={indexStyles.projectItem}>
							<div className={indexStyles.details}>
								<h3>Pesquisa</h3>
								{intl.locale === "pt" ? (
									<p>A comunidade de programação da periferia! Aqui reunimos pessoas que moram em periferias, favelas e guetos do Brasil para criar uma rede de apoio para conseguirmos vencer os desafios sociais que nos limitam a entrada ou evolução na área de programação.</p>
								) : (
									<p></p>
								)}
								<p><a href="">Lattes</a></p>
							</div>
							<div className={indexStyles.projectImage}><img src="/images/projects/fairness.jpg"/></div>
						</div>
					</div>	
				</div>
			</section>
			<section id="videos" className={layoutStyles.whiteSection}>
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
					<YoutubeVideo youtube={youtube}/>
				</div>
			</section>
			<section id="blog" className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<div className={layoutStyles.titleContent}>
						{intl.locale === "pt" ? (
							<>
							<h2>Últimas do blog</h2>
							<Link className={layoutStyles.button} href="/blog">Veja todos os posts</Link>
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
		   }
		}
		posts: allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { fileAbsolutePath: { regex: "/(/content/posts)/" } }
			limit: 3
		    ) {
			edges {
			  node {
			    excerpt(pruneLength: 150)
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


