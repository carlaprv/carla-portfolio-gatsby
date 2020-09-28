import React from "react"
import { graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social-icons'

import layoutStyles from '../components/layout.module.scss'

const ContactForm = styled.div`
	input[type=text], input[type=email], select, textarea {
		width: 100%; 
		padding: 5px; 
		border: 1px solid #D6BDDC; 
		border-radius: 6px;
		margin-top: 16px;
		margin-bottom: 16px; 
	}
	
	button[type=submit] {
		background-color: #33204B;
		color: white;
		padding: 8px 30px;
		border-radius: 6px;
		&:hover {
			opacity: 0.8
		}
	}
	label{
		font-weight: 600;
	}
`

const ContactPage = () => {
	const intl = useIntl()

	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "contact" })} />
			<section className={layoutStyles.coloredSection}>
        			<div className={layoutStyles.sectionContent}>
					<div>
						<h1>{intl.formatMessage({ id: "contact" })}</h1>
						{intl.locale === "pt" ? (
							<p>Se você tem interesse em uma palestra minha na sua conferência/evento ou quer apenas entrar em contato, pode só enviar um e-mail para <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> ou preencher o formulário abaixo.</p>
						) : (
							<p>Looking to get in touch? I'd love to hear from you. The best way to get in touch with me is to send me an e-mail to <a href="mailto:contato@carlavieira.dev">contato@carlavieira.dev</a> or fill out the form below.</p>
						)}
					</div>
					
					<Social purple={true}/>
					<ContactForm>
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
					</ContactForm>
				</div>
			</section>
		</Layout>
	)
}

export default ContactPage