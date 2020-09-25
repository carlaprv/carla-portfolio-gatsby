import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import layoutStyles from '../components/layout.module.scss'

const ErrorContainer = styled.div`
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-flow: column wrap; 
      align-items: center;
      align-content: center;
      padding-top: 50px;

`
const ErrorTitle = styled.h1`
      display: block;
      font-size:2rem;
`

const ErrorSubTitle = styled.h2`
      display: block;
      font-size:1.5rem;
`
const ErrorImage= styled.img`
      max-width: 400px;
      border-radius: 50%;
      @media screen and (max-width: 500px) {
            max-width: 100%;      
      }
`

const NotFoundPage = () => {
      const intl = useIntl()

      return (
            <Layout>
                  <section className={layoutStyles.coloredSection}>
                        <div className={layoutStyles.sectionContent}>
                              <ErrorContainer>
                                    {intl.locale === "pt" ? (
                                          <>
                                          <ErrorTitle>Não tem nada aqui...</ErrorTitle>
                                          <ErrorImage src="/images/avatar_carla_sad_transparent.png" alt="Ilustração da carla com uma carinha triste."/>
                                          <ErrorSubTitle>Mas não se preocupe!</ErrorSubTitle>
                                          <p>Que tal dar uma lida no meu <Link to="/blog">blog</Link>?</p>
                                          </>
                                    ):(
                                          <>
                                          <ErrorTitle>404: Page Not Found</ErrorTitle>
                                          <ErrorImage src="/images/avatar_carla_sad_transparent.png" alt="Illustration of Carla with a sad face."/>
                                          <ErrorSubTitle>Don't worry!</ErrorSubTitle>
                                          <p>What about reading my <Link to="/blog">blog</Link>?</p>
                                          </>
                                    )}
                                    
                              </ErrorContainer>
                        </div>
                  </section>
            </Layout>
      )
}

export default NotFoundPage