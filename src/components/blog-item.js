import React from 'react'
import { Link } from 'gatsby'
import blogItemStyles from './blog-item.module.scss'


const BlogItem = ({
      slug,
      date,
      title,
      description,
      categories,
      hyperlink,
      image
    }) => {

      return(
            <>
                  <li className={blogItemStyles.cardsItem}>
                        <div className={blogItemStyles.card}>
                              {image && (
                                    <div className={blogItemStyles.cardImage}>
                                          {hyperlink ? (
                                                <Link to={`${hyperlink}`} target="_blank" rel="noreferrer"><img src={image} alt=""/></Link>
                                          ):(
                                                <Link to={`/${slug}`}><img src={image} alt=""/></Link>
                                          )}
                                    </div>
                              )}
                              <div className={blogItemStyles.cardContent}>
                                    <div className={blogItemStyles.cardTitle}>
                                          {hyperlink ? (
                                                <Link to={`${hyperlink}`} target="_blank" rel="noreferrer">{title}</Link>
                                          ):(
                                                <Link to={`/${slug}`}>{title}</Link>
                                          )}
                                    </div>
                                    <div className={blogItemStyles.cardDate}>
                                          {date}
                                    </div>
                                    <p className={blogItemStyles.cardText}>{description}</p>
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