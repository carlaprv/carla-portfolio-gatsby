import React from "react"
import { Link, graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Layout from '../components/layout'
import SEO from '../components/seo'
import layoutStyles from '../components/layout.module.scss'

const SpeakingContent = styled.div`
	display: flex;
	align-items: center;
`

const SpeakingText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const SpeakingImage = styled.img`
	margin-left:30px;
	width:300px;
	flex-grow:0;
    flex-shrink:0;
	border-radius: 6px;
`
const SpeakingPage = () => {
	const intl = useIntl()

	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "speaking" })} />
			<section className={layoutStyles.coloredSection}>
				<div className={layoutStyles.sectionContent}>
					<SpeakingContent>
						<SpeakingText>
							<h1>{intl.formatMessage({ id: "speaking" })}</h1>
							{intl.locale === "pt" ? (
								<><p>
									Já participei de diferentes eventos como palestrante tanto no Brasil quanto fora. Se você tem interesse nas palestras que eu já dei, os slides estão disponíveis no speakerdeck. 
								</p><p>
									Se você tem interesse em uma palestra minha na sua conferência/evento ou quer apenas entrar em contato, pode só enviar um e-mail para <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> ou preencher o <Link to="/contact">formulário de contato</Link>.
								</p></>
							) : (
								<p>
									I've given quite a few talks around the world about Python, Artificial Intelligence, Data science and more.
									If you're interested in me speaking at your conference or podcast, you can send an e-mail to <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> or fill out my <Link to="/contact">contact form</Link>.
								</p>
							)}
						</SpeakingText>
						<SpeakingImage src="images/carla-palestra-cp-goias.jpg"/>
					</SpeakingContent>
				</div>
			</section>
		</Layout>
	)
}

export default SpeakingPage