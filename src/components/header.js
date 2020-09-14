import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Language from "./language"

const Header = () => {
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
        <header className={headerStyles.header}>
            <nav className={headerStyles.navContainer}>
                <Link className={headerStyles.navBrand} to="/">
                    {data.site.siteMetadata.title}
                    
                </Link>
                <Language />
                <ul className={headerStyles.navList}>
                    {data.site.siteMetadata.menuLinks.slice(0).reverse().map((menuItem) => {
                        return(
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={menuItem.link}>
                                    {menuItem.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
        
    )
}

export default Header