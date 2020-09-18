import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
import { useIntl } from "gatsby-plugin-intl"


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
                <ul className={footerStyles.socialIcons}>
                    {data.site.siteMetadata.socialLinks.map((socialItem) => {
                        return(
                        <li>
                            <a href={socialItem.link} target="_blank" rel="noreferrer">
                                <img src={socialItem.svg} alt={socialItem.name}/>
                            </a>
                        </li>
                        )
                    })}
                </ul>
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