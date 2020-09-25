import React from 'react'
import youtubeVideoStyles from './youtube-video.module.scss'


const YoutubeVideo = ({
      youtube,
    }) => {

      return(
            <>
            <ul className={youtubeVideoStyles.cards}>
                  {youtube.map((edge) => {
                        return (
                                    <li className={youtubeVideoStyles.cards__item}>
                                          <div className={youtubeVideoStyles.card}>
                                                <div className={youtubeVideoStyles.card__image}>
                                                      <a href={edge.node.frontmatter.link}><img src={edge.node.frontmatter.thumbnail.publicURL} alt=""/></a>
                                                </div>
                                                {/* <div className={youtubeVideoStyles.card__content}>
                                                      <div className={youtubeVideoStyles.card__title}>
                                                            <a href={edge.node.frontmatter.link}>{edge.node.frontmatter.title}</a>
                                                      </div>
                                                      {/* <p className={youtubeVideoStyles.card__text}>{edge.node.frontmatter.description}</p> */}
                                                      {/* <div className={youtubeVideoStyles.card__date}>
                                                            {edge.node.frontmatter.date} */}
                                                      {/* </div> */} 
                                                {/* </div> */}
                                                
                                          </div>
                                    </li>
                              )
                  })}
            </ul>   
            </>
      )
}

export default YoutubeVideo;