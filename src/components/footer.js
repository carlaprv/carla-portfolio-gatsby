import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

import footerStyles from './footer.module.scss'
import Social from './social-icons'


const Footer = () => {
    const intl = useIntl()
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                    socialLinks {
                        name
                        link
                        icon
                        svg
                    }
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContent}>
                <Social purple={false}/>
                {intl.locale === "pt" ? (
                    <p>
                        © {data.site.siteMetadata.author} 2020. Feito com amor & <a href="/">código</a>.
                    </p>
                ):(
                    <p>
                        © {data.site.siteMetadata.author} 2020. Made with love & <a href="/">various tech</a>.
                    </p>
                )}
            </div>
        </footer>
    )
}

export default Footer