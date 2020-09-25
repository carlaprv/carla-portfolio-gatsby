import React from 'react'
import youtubeVideoStyles from './youtube-video.module.scss'


const YoutubeVideo = ({
	youtube
}) => {

	return (
		<>
			<ul className={youtubeVideoStyles.cards}>
				{youtube.map((edge) => {
					return (
						<li className={youtubeVideoStyles.cards__item}>
							<div className={youtubeVideoStyles.card}>
								<a href={edge.node.frontmatter.link}>
									<span className={youtubeVideoStyles.card__label}> youtube </span>
									<img src={edge.node.frontmatter.thumbnail.publicURL} alt="" />
								</a>
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default YoutubeVideo;