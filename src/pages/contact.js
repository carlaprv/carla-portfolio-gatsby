import React from "react"
import { graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social-icons'

import contactStyles from './contact.module.scss'
import layoutStyles from '../components/layout.module.scss'


const ContactPage = (props) => {
	const intl = useIntl()

	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "contact" })} />
			<section className={layoutStyles.coloredSection}>
        			<div className={layoutStyles.sectionContent}>
					<div className={contactStyles.text}>
						<h1>{intl.formatMessage({ id: "contact" })}</h1>
						{intl.locale === "pt" ? (
							<p>Se você tem interesse em uma palestra minha na sua conferência/evento ou quer apenas entrar em contato, pode só enviar um e-mail para <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> ou preencher o formulário abaixo.</p>
						) : (
							<p>Looking to get in touch? I'd love to hear from you. The best way to get in touch with me is to send me an e-mail to <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> or fill out the form below.</p>
						)}
						
					</div>

					<div className={contactStyles.contact}>
						<div className={contactStyles.socialInfo}>
							<Social purple={true}/>
						</div>
						<div className={contactStyles.contactForm}>
							<form name="contact" method="POST" data-netlify="true">
								<p>
									<label>{intl.formatMessage({ id: "name" })}: <input type="text" name="name" /></label>
								</p>
								<p>
									<label>Email: <input type="email" name="email" /></label>
								</p>
								<p>
									<label>{intl.formatMessage({ id: "subject" })}: <input type="text" name="subject" /></label>
								</p>
								<p>
									<label>{intl.formatMessage({ id: "message" })}: <textarea name="message"></textarea></label>
								</p>
								<p>
									<button type="submit">{intl.formatMessage({ id: "submit" })}</button>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default ContactPage

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
					svgpurple
				}
			}
		}
	}

`