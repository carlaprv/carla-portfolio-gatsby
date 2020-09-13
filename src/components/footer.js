import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContent}>
                <p>
                    Made with coffee & various tech in São Paulo - Brazil<br/>
                    Created by {data.site.siteMetadata.author} © 2020
                </p>
            </div>
        </footer>
    )
}

export default Footer