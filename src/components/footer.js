import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

import Social from './social-icons'

const FooterContainer = styled.footer`
    padding:50px 0px;
    display: block;
    text-align: center;
    bottom:0;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 5;
    grid-row-end: 6;
    background-color: #33204B;
    color:#fff;
`
const FooterContent = styled.div`
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin: 1em 0;
    font-size: 0.95rem;
    ul{
        justify-content: center;
    }
    p{
        color:#fff;
    }
    p a{
        font-weight: bold;
        text-decoration: none;
        color:#fff;
        background-image: linear-gradient(0deg,rgba(151, 99, 194, 0.5) 0,rgba(151, 99, 194,.5) 30%,transparent 40%,transparent);
        &:hover{
            color:#fff;
            background-image: linear-gradient(0deg,rgba(151, 99, 194,.7) 0,rgba(151, 99, 194,.7) 30%,transparent 40%,transparent);
        }
    }
`

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
        <FooterContainer>
            <FooterContent>
                <Social purple={false} />
                {intl.locale === "pt" ? (
                    <p>
                        © {data.site.siteMetadata.author} 2020. Feito com amor & <a href="/">código</a>.
                    </p>
                ) : (
                        <p>
                            © {data.site.siteMetadata.author} 2020. Made with love & <a href="/">various tech</a>.
                        </p>
                    )}
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer