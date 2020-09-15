import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Language from "./language"
import menuStyles from './menu.module.scss'

const Menu = () => {
      const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title
                    menuLinks {
                        name
                        link
                      }
                }
            }
        }
    `)
      return (
            <nav className={menuStyles.navContainer}>
                    <Link className={menuStyles.navBrand} to="/">
                        {data.site.siteMetadata.title}
                        
                    </Link>
                    <Language />
                    <ul className={menuStyles.navList}>
                        {data.site.siteMetadata.menuLinks.slice(0).reverse().map((menuItem) => {
                            return(
                                <li>
                                    <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to={menuItem.link}>
                                        {menuItem.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            </nav>

      )
}

export default Menu