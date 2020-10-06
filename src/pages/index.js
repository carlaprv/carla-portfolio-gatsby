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
	const events = props.data.upcomingevents.edges

	return(
		<Layout>
			<SEO title={intl.formatMessage({ id: "home" })} lang={intl.locale}/>
			<section id="header">
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
			<section id="about" className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<div className={indexStyles.about}>
						<div>
						<h2>{intl.formatMessage({ id: "about" })}</h2>
						{intl.locale === "pt" ? (
							<p>
								<b>Carla Vieira</b> é Bacharel em Sistemas de Informação pela USP, mestranda em <a href="http://ppgsi.each.usp.br/orientandos/" target="_blank">Inteligência Artificial</a> pela USP, engenheira de software e <a href="https://developers.google.com/community/experts/directory/profile/profile-carla_vieira">Google Developer Expert em Machine Learning</a>. Co-fundadora da <a href="https://perifaCode.com">perifaCode</a>, buscando levar a tecnologia para dentro das periferias. Acredita na tecnologia como ferramenta de transformação social e tem estudado sobre como o viés inconsciente tem afetado a Inteligência Artificial e como tornar algoritmos caixa-preta mais transparentes.
							</p>
						) : (
							<p>
								<b>Carla Vieira</b> holds a Bachelor's degree in Information Systems at USP, master student in <a href="http://ppgsi.each.usp.br/orientandos/" target="_blank">Artificial Intelligence</a>, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-founder of <a href="https://perifaCode.com">perifaCode</a> Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society.
							</p>
						)}
						</div>	
						<img src="/images/carla/foto-carla-2020.jpg" className={indexStyles.aboutImage}/>
					</div>				
				</div>
			</section>
			<section id="projects" className={layoutStyles.whiteSection}>
				<div className={layoutStyles.sectionContent}>
					<h2>{intl.formatMessage({ id: "projects" })}</h2>
					<div className={indexStyles.projects}>
						<div className={indexStyles.projectItem}>
							<div className={indexStyles.details}>
								<h3>ONG perifaCode</h3>
								{intl.locale === "pt" ? (
									<>
									<p>
										Sou uma das fundadoras da ONG perifaCode. A ONG tem a missão de combater a desigualde social através da diversidade e inclusão de pessoas que moram em periferias, favelas e guetos do Brasil na área de tecnologia. Realizamos diversas atividades, grupos de estudos e capacitação técnica que jovens tenham o primeiro acesso a programação através de representatividade.
									</p>
									<p><a href="https://perifacode.com/manifesto/">Conheça o projeto</a></p>
									</>
								) : (
									<>
									<p>
										I am co-founder of perifaCode, a non-profit organization that aims to increase the presence of people from brazilian favelas in the technology field. Our initiatives include study groups, events related to technology and community building (through our online forums). Our mission is to introduce programming and technology to a new generation of coders, coders who will become builders of technological innovation and of their own futures.
									</p>
									<p><a href="https://perifacode.com/manifesto/">More about the project</a></p>
									</>
								)}
							</div>
							<div className={indexStyles.projectImage}><img src="/images/projects/perifacode.jpg"/></div>
						</div>
						<div className={indexStyles.projectItem}>
							<div className={indexStyles.details}>
								<h3>Palestras</h3>
								{intl.locale === "pt" ? (
									<>
									<p>
										Já participei de diferentes eventos como palestrante tanto no Brasil quanto fora. Realizo palestras sobre Inteligência Artificial, impactos da tecnologia na sociedade, diversdade e sobre a perifaCode. Minha missão é promover oportunidades de aprendizado sobre programação para meninas e mulheres periféricas na ciência e pesquisa. 
									</p>
									<p><a href="">Acesse meu portfolio</a></p>
									</>
								) : (
									<>
									<p>
										I've given quite a few talks around the world about technology,  Artificial Intelligence and its impacts on our society. My mission is to prommote learning opportunities about STEM to black girls and women from Brazil.
									</p>
									<p><a href="">Access my portfolio</a></p>
									</>
								)}
								
							</div>
							<div className={indexStyles.projectImage}><img src="/images/projects/wids-event.jpg"/></div>
						</div>
						<div className={indexStyles.projectItem}>
							<div className={indexStyles.details}>
								<h3>Pesquisa em Inteligência Artificial e Sociedade</h3>
								{intl.locale === "pt" ? (
									<p>
										Acredito na tecnologia como ferramenta de transformação social e como pesquisadora tenho desafiado os estereótipos de gênero e de raça que influenciam nossa relação com as áreas de STEM. Tenho pesquisado sobre racismo algorítmico e Explicabilidade em Inteligência Artificial, buscando tornar algoritmos mais inteligíveis para seres humanos.
									</p>
								) : (
									<p>
										I believe Technology is steadily changing the social good landscape. As a researcher I have been challenging gender and race stereotypes in STEM. I've been researching about algorithmic racism and Explanability in Artificial Intelligence, seeking to make algorithms more intelligible to humans.
									</p>
								)}
								<p><a href="http://lattes.cnpq.br/7512704307943563">CV Lattes</a> | <a href="https://www.researchgate.net/profile/Carla_Vieira16">Research Gate</a></p>
							</div>
							<div className={indexStyles.projectImage}><img src="/images/projects/ai-girl.jpg"/></div>
						</div>
					</div>	
				</div>
			</section>
			<section id="events" className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
				<div className={layoutStyles.titleContent}>
					<h2>{intl.formatMessage({ id: "events" })}</h2>
					{intl.locale === "pt" ? (
						<>
						<Link className={layoutStyles.button} href="/speaking">Veja todas as palestras</Link>
						</>
					):(
						<>
						<Link className={layoutStyles.button} href="/speaking">See all talks</Link>
						</>
					)}
					</div>
					
					<div className={indexStyles.events}>
						{events.map((edge) => {
							return (
								<div className={indexStyles.event}>
									<div className={indexStyles.eventDetails}>
										<h4>{edge.node.frontmatter.eventname}</h4>
										<h3>{edge.node.frontmatter.title}</h3>
										<p>{edge.node.frontmatter.date}</p>
										<p><a href={edge.node.frontmatter.eventlink}>Inscreva-se</a></p>
									</div>
								</div>
							)
						})}						
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
					{/* <YoutubeVideo youtube={youtube}/> */}
				</div>
				<YoutubeVideo youtube={youtube}/>	
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
	site {
		siteMetadata {
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
					link
					channel
					thumbnail {
						publicURL
					}
				}
			}
		}
	}
	upcomingevents: allMarkdownRemark(
		sort: { fields: frontmatter___date, order: ASC }
		filter: { fileAbsolutePath: { regex: "/(/content/events)/" } }
		limit: 3
	) {
		edges {
			node {
				frontmatter {
					title
					date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
					eventname
					eventlink
				}
			}
		}
	}
}
`


