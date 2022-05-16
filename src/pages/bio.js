import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "styled-components"

import Layout from '../components/layout'
import SEO from '../components/seo'

import layoutStyles from '../components/layout.module.scss'

const TextBox = styled.div`
	width: 100%; 
	border-radius: 6px;
	margin-top: 6px;
	margin-bottom: 40px; 
	background:#fff;
	padding:30px;
	display:flex;
	flex-direction:column;

	h2{
		margin-top:16px;
		color:#6f4a84;
		font-size:1.8rem;
		opacity:0.7;
	}

	button{
		align-self:end;
		border:none;
		background:none;
		&:hover{
			opacity:0.5;
		}
		img{
			width:20px;
			margin-bottom:0;
		}
	}
	
`

const Photos = styled.div`
	display: flex;
	flex-direction:row;
	margin-top:20px;
	
		
	img{
		margin-right:30px;
		max-width: 48%;
		border-radius:6px;
		&:last-child{
			margin-right:0;
		}
	}
`

const copyDivToClipboard = (element) => {
	var range = document.createRange();
	range.selectNode(document.getElementById(element));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges();// to deselect
}


const BioPage = (props) => {
	const intl = useIntl()
	const bio = props.data.bio.edges


	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "biography" })} />
			<section className={layoutStyles.coloredSection}>
        			<div className={layoutStyles.sectionContent}>
					<h1>{intl.formatMessage({ id: "biography" })}</h1>
					{intl.locale === "pt" ? (
						<div>
							<TextBox>
								<h2>Mini bio</h2>
								<p id="shortbio">
									{bio.map((edge) => {return (<p>{edge.node.frontmatter.minibiopt}</p>)})}
								</p>
								<button onClick={() => copyDivToClipboard("shortbio")}><img src="/images/copy.svg" alt="" aria-label="copiar"/></button>
							</TextBox>
							<TextBox>
								<h2>Bio</h2>
								<p id="longbio">
									{bio.map((edge) => {return (<p>{edge.node.frontmatter.biopt}</p>)})}
								</p>
								<button onClick={() => copyDivToClipboard("longbio")}><img src="/images/bio/copy.svg" alt="" aria-label="copiar"/></button>
							</TextBox>
							<TextBox>
								<h2>Fotos</h2>
								<p>
									Se você precisa de fotos minhas em alta resolução, pode selecionar uma das opções abaixo.
								</p>
								<Photos>
									<img src="/images/bio/carla-foto-montreal-1.png" alt=""/>
									<img src="/images/bio/carla-foto-montreal-2.png" alt=""/>
								</Photos>
							</TextBox>
						</div>
						
					) : (
						<div>
							<TextBox>
								<h2>Short bio</h2>
								<p id="shortbio">{bio.map((edge) => {return (<p>{edge.node.frontmatter.minibioen}</p>)})}</p>
								<button onClick={() => copyDivToClipboard("shortbio")}><img src="/images/copy.svg" alt="" aria-label="copiar"/></button>
							</TextBox>
							<TextBox>
								<h2>Long bio</h2>
								<p id="longbio">{bio.map((edge) => {return (<p>{edge.node.frontmatter.bioen}</p>)})} </p>
								<button onClick={() => copyDivToClipboard("longbio")}><img src="/images/copy.svg" alt="" aria-label="copiar"/></button>
							</TextBox>
							<TextBox>
								<h2>Photos</h2>
								<p>
									If you need a good web resolution photo help publicize a talk I'm giving, you can choose one of these, or contact me for other options.
								</p>
								<Photos>
									<img src="/images/bio/foto-1-carla.jpg" alt=""/>
									<img src="/images/bio/foto-2-carla.jpg" alt=""/>
								</Photos>
							</TextBox>
						</div>
					)}
				</div>
			</section>
		</Layout>
	)
}

export default BioPage

export const query = graphql`
query {
	bio: allMarkdownRemark(
		sort: {fields: frontmatter___date, order: DESC}, 
		filter: {fileAbsolutePath: {regex: "/(/content/bio)/"}}, 
		limit: 1
	) {
		edges {
			node {
			frontmatter {
					title
					biopt
					bioen
					minibiopt
					minibioen
				}
			}
		}
	}
}
`
