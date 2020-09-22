import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { useIntl } from "gatsby-plugin-intl"
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
						<h1>Contact</h1>
						<p>Looking to get in touch? I'd love to hear from you. The best way to get in touch with me is to send me an e-mail to <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> or fill out the form below.</p>
					</div>

					<div className={contactStyles.contact}>
						<div className={contactStyles.socialInfo}>
							<ul className={contactStyles.socialIcons}>
								{props.data.site.siteMetadata.socialLinks.map((socialItem) => {
									return (
										<li>
											<a href={socialItem.link} target="_blank" rel="noreferrer">
												<img src={socialItem.svg} alt={socialItem.name} alt="" />
											</a>
										</li>
									)
								})}
							</ul>
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
									<button type="submit">Send</button>
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
				}
			}
		}
	}

`