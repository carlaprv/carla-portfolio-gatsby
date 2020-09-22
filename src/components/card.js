import React from 'react'
import { Link } from 'gatsby'
import cardStyles from './card.module.scss'

const Card = ({
      slug,
      date,
      title,
      description,
      image
    }) => {

      return(
            <>
            {/* <ul className={cardStyles.cards}> */}
                  <li className={cardStyles.cards__item}>
                        <div className={cardStyles.card}>
                              {image && (
                                    <div className={cardStyles.card__image}>
                                          <img src={image}/>
                                    </div>
                              )}
                              <div className={cardStyles.card__content}>
                                    <div className={cardStyles.card__date}>
                                          {date}
                                    </div>
                                    <div className={cardStyles.card__title}>
                                          <Link to={`/${slug}`}>{title}</Link>
                                    </div>
                                    <p className={cardStyles.card__text}>{description}</p>
                                    {/* <button className={cardStyles.btn}>Button</button> */}
                              </div>
                        </div>
                  </li>
            {/* </ul> */}
            </>
      )
}

export default Card;