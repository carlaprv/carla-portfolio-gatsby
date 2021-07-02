import React from 'react'

import styled from "styled-components"


const VideosList = styled.div`
	list-style: none;
	margin: 0;
	margin-top: 40px;
	padding: 0;

	grid-column-start: 3;
      grid-column-end: 11;
      min-width: 100%;
      min-height: 200px;
      display: flex;
	overflow-x: auto;

      @media screen and (max-width: 1024px) {
            grid-column-start: 2;
            grid-column-end: 12;
	}
	
	@media screen and (max-width: 600px) {
            min-height: auto;
	}
	
	&::-webkit-scrollbar {
		width: 12px;               /* width of the entire scrollbar */
	}
	&::-webkit-scrollbar-track {
		background: #E2D9EA;   
		border-radius: 20px;        /* color of the tracking area */
	}
	&::-webkit-scrollbar-thumb {
		background-color: #958C9D;    /* color of the scroll thumb */
		border-radius: 20px;       /* roundness of the scroll thumb */
		border: 3px solid #E2D9EA;  /* creates padding around scroll thumb */
	}
`

const VideoItem = styled.div`
	margin-right: 20px;
	min-width: 450px;  

	@media(min-width: 1500px) {
		min-width: 31%;  
		max-width: 31%;
	}

	@media screen and (max-width: 1501px) {
		min-width: 450px; 
		max-width: 48%;
	}

	@media screen and (max-width: 800px) {
		min-width: 100%;
		max-width: 100%;
	}

	@media screen and (max-width: 600px) {
		min-width: 240px;
		max-width: 240px;
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
		width:240px;
		height:auto;
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
								<VideoThumbnail src={edge.node.frontmatter.thumbnail.publicURL} alt={edge.node.frontmatter.title} />
							</a>
						</VideoItem>
					)
				})}
			</VideosList>
		</>
	)
}

export default YoutubeVideo;