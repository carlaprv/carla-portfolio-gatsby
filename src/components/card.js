import React from 'react'
// import { Link, graphql, useStaticQuery } from 'gatsby'
import cardStyles from './card.module.scss'

const Card = ({
      slug,
      date,
      title,
      description
    }) => {

      return(
            <div>
                  <ul className={cardStyles.cards}>
                        <li className={cardStyles.cards__item}>
                              <div className={cardStyles.card}>
                                    <div className={cardStyles.card__image}>
                                          <img src="https://unsplash.it/800/600?image=59"/>
                                    </div>
                                    <div className={cardStyles.card__content}>
                                          <div className={cardStyles.card__title}><a href="/">Flex</a></div>
                                          <p className={cardStyles.card__text}>This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                                          <button className={cardStyles.btn}>Button</button>
                                    </div>
                              </div>
                        </li>
                  </ul>
            </div>

      )

}

export default Card;