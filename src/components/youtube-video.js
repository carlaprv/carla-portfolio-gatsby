import React from 'react'

import styled from "styled-components"


const VideosList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	margin-top: 40px;
	padding: 0;
`

const VideoItem = styled.li`
	display: flex;
	padding-right: 2.2rem;
	width: 50%;

	&:last-child{
	  padding-right:0;
	}
  
	@media(min-width: 1300px) {
	  width: 40%;  
	}
  
	@media screen and (max-width: 900px) {
	  width: 50%;
	}
  
	@media screen and (max-width: 768px) {
	  width: 100%;
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
	display: flex;
	flex-direction: column;
	overflow: hidden;
	width: 100%; 
	height: auto; 
	object-fit: cover;

	&:hover{
	box-shadow: 0 6px 15px rgba(0,0,0,0.2);
	}
`

const Label = styled.span`
	position: absolute;
	z-index: 2;
	padding: 0px 10px;
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
	border: 2px solid #995692;
	background: #995692;
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