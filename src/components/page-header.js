import React from 'react'
import { Link } from 'gatsby'
import pageHeaderStyles from './page-header.module.scss'

const PageHeader = ({
      title,
      slug,
      description,
      background
    }) => {

      const style = {
            backgroundImage: `url(${background})`
      }

      return(
            <div className={pageHeaderStyles.blogHeader}>
                  <div className={pageHeaderStyles.blogHeaderContent}>
                        <div class={pageHeaderStyles.bg} style={style}></div>
                        <Link to={`/${slug}`}><h1>{title}</h1></Link>
                        <p>{description}</p>
                  </div>
            </div>
      )
}

export default PageHeader;