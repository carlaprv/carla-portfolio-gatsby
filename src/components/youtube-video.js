import React from 'react'

import styled from "styled-components"


const VideosList = styled.div`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	margin-top: 40px;
	padding: 0;
	justify-content: space-between;
`

const VideoItem = styled.div`
width: 450px;  

@media(min-width: 1500px) {
  width: 31%;  
  max-width: 31%;
}

@media screen and (max-width: 1501px) {
  width: 450px; 
  max-width: 48%;
}

@media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
}
`

const VideoThumbnail = styled.img`
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.08);
	-webkit-transition: -webkit-box-shadow .35s ease;
	transition: -webkit-box-shadow .35s ease;
	transition: box-shadow .35s ease;
	transition: box-shadow .35s ease, -webkit-box-shadow .35s ease;
	width: 100%; 
	height: auto; 
	object-fit: cover;

	&:hover{
	box-shadow: 0 6px 15px rgba(0,0,0,0.2);
	}

	@media screen and (max-width: 768px) {
		height:220px;
	}

	@media screen and (max-width: 600px) {
		height:150px;
	}
`

const Label = styled.span`
	position: absolute;
	z-index: 2;
	padding: 5px 10px;
	margin: 1.5rem 0 1rem 1.5rem;
	display: inline-block;
	font-size: .8rem;
	font-weight: 600;
	font-family: inherit;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: rgba(255, 255, 255, 0.9);
	border: 2px solid rgba(255, 255, 255, 0.6);
	background: rgba(255, 255, 255, 0.2);
	border-radius: 100px;
	transition: all 0.2s ease;

	&:hover{
		color: rgba(255, 255, 255, 0.9);
		border: 2px solid rgb(164, 82, 202);
		background: rgb(164, 82, 202);
	}
`

const YoutubeVideo = ({
	youtube
}) => {

	return (
		<>
			<VideosList>
				{youtube.map((edge) => {
					return (
						<VideoItem>
							<a href={edge.node.frontmatter.link}>
								<Label>{edge.node.frontmatter.channel}</Label>
								<VideoThumbnail src={edge.node.frontmatter.thumbnail.publicURL} alt="" />
							</a>
						</VideoItem>
					)
				})}
			</VideosList>
		</>
	)
}

export default YoutubeVideo;