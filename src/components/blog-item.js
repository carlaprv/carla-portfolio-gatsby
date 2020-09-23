import React from 'react'
import { Link } from 'gatsby'
import blogItemStyles from './blog-item.module.scss'


const BlogItem = ({
      slug,
      date,
      title,
      description,
      categories,
      image
    }) => {

      return(
            <>
                  <li className={blogItemStyles.cards__item}>
                        <div className={blogItemStyles.card}>
                              {image && (
                                    <div className={blogItemStyles.card__image}>
                                          <img src={image} alt=""/>
                                    </div>
                              )}
                              <div className={blogItemStyles.card__content}>
                                    <div className={blogItemStyles.card__title}>
                                          <Link to={`/${slug}`}>{title}</Link>
                                    </div>
                                    <div className={blogItemStyles.card__date}>
                                          {date}
                                    </div>
                                    <p className={blogItemStyles.card__text}>{description}</p>
                                    <div className={blogItemStyles.tags}>
                                          {categories.map((tag) => {
                                                return(
                                                      <div className={blogItemStyles.tagButton}>
                                                            <a href="/">{tag}</a>
                                                      </div>
                                                )
                                          })}  
                                    </div>
                              </div>
                        </div>
                  </li>
            </>
      )
}

export default BlogItem;