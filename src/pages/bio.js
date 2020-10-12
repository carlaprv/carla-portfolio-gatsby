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


const BioPage = () => {
	const intl = useIntl()

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
									Carla Vieira é Bacharel em Sistemas de Informação pela USP, mestranda em Inteligência Artificial pela USP, engenheira de software e Google Developer Expert em Machine Learning.
								</p>
								<button onClick={() => copyDivToClipboard("shortbio")}><img src="/images/copy.svg"/></button>
							</TextBox>
							<TextBox>
								<h2>Bio</h2>
								<p id="longbio">
									Carla Vieira é Bacharel em Sistemas de Informação pela USP, mestranda em Inteligência Artificial pela USP, engenheira de software e Google Developer Expert em Machine Learning. Co-fundadora da perifaCode, buscando levar a tecnologia para dentro das periferias. Acredita na tecnologia como ferramenta de transformação social e tem estudado sobre como o viés inconsciente tem afetado a Inteligência Artificial e como tornar algoritmos caixa-preta mais transparentes.
								</p>
								<button onClick={() => copyDivToClipboard("longbio")}><img src="/images/bio/copy.svg"/></button>
							</TextBox>
							<TextBox>
								<h2>Fotos</h2>
								<p>
									Se você precisa de fotos minhas em alta resolução, pode selecionar uma das opções abaixo.
								</p>
								<Photos>
									<img src="/images/bio/foto-1-carla.jpg"/>
									<img src="/images/bio/foto-2-carla.jpg"/>
								</Photos>
							</TextBox>
						</div>
						
					) : (
						<div>
							<TextBox>
								<h2>Short bio</h2>
								<p id="shortbio">Carla holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning.</p>
								<button onClick={() => copyDivToClipboard("shortbio")}><img src="/images/copy.svg"/></button>
							</TextBox>
							<TextBox>
								<h2>Long bio</h2>
								<p id="longbio">Carla holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-organizer of perifaCode Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society. </p>
								<button onClick={() => copyDivToClipboard("longbio")}><img src="/images/copy.svg"/></button>
							</TextBox>
							<TextBox>
								<h2>Photos</h2>
								<p>
									If you need a good web resolution photo help publicize a talk I'm giving, you can choose one of these, or contact me for other options.
								</p>
								<Photos>
									<img src="/images/bio/foto-1-carla.jpg"/>
									<img src="/images/bio/foto-2-carla.jpg"/>
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