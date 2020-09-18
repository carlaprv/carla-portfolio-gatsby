import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
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
                {/* twitter instagram linkedin github youtube email  */}
                <p>
                    © {data.site.siteMetadata.author} 2020. Made with love & various tech.
                </p>
            </div>
        </footer>
    )
}

export default Footer