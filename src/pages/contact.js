import React from "react"
import Layout from '../components/layout'
import SEO from '../components/Seo'
import { useIntl } from "gatsby-plugin-intl"


const ContactPage = () => {
	const intl = useIntl()

	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "contact" })} />
			<h1>Contact</h1>
			<p>You can send an e-mail to: contato@carlavieira.dev</p>
			<p><a href="https://twitter.com/carlaprvieira">Twitter</a></p>

			<form name="contact" method="POST" data-netlify="true">
				<p>
					<label>Your Name: <input type="text" name="name" /></label>
				</p>
				<p>
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p>
					<label>Subject: <input type="text" name="subject" /></label>
				</p>
				<p>
					<label>Message: <textarea name="message"></textarea></label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>

		</Layout>
	)
}

export default ContactPage