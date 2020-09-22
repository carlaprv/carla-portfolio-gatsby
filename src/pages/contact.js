import React from "react"
import Layout from '../components/layout'
import SEO from '../components/Seo'
import { useIntl } from "gatsby-plugin-intl"


const ContactPage = () => {
	const intl = useIntl()

	return(
		<Layout>
			<SEO title={intl.formatMessage({ id: "contact" })}/>
			<h1>Contact</h1>
			<p>You can send an e-mail to: contato@carlavieira.dev</p>
			<p><a href="https://twitter.com/carlaprvieira">Twitter</a></p>
		</Layout>
	)
}

export default ContactPage