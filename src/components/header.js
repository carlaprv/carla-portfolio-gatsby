import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Language from "./language"
import Menu from '../components/menu'

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
            <div>
                <Menu></Menu>
            </div>
        </header>
        
    )
}

export default Header