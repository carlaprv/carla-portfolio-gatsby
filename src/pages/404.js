import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'


import layoutStyles from '../components/layout.module.scss'
import errorStyles from './404.module.scss'
import { useIntl } from "gatsby-plugin-intl"


const NotFoundPage = () => {
      const intl = useIntl()

      return (
            <Layout>
                  <section className={layoutStyles.coloredSection}>
                        <div className={layoutStyles.sectionContent}>
                              <div className={errorStyles.content}>
                                    {intl.locale === "pt" ? (
                                          <>
                                          <h1>Não tem nada aqui...</h1>
                                          <img src="/images/avatar_carla_sad_transparent.png" alt="Ilustração da carla com uma carinha triste."/>
                                          <h2>Mas não se preocupe!</h2>
                                          <p>Que tal dar uma lida no meu <Link to="/blog">blog</Link>?</p>
                                          </>
                                    ):(
                                          <>
                                          <h1>404: Page Not Found</h1>
                                          <img src="/images/avatar_carla_sad_transparent.png" alt="Illustration of Carla with a sad face."/>
                                          <h2>Don't worry!</h2>
                                          <p>What about reading my <Link to="/blog">blog</Link>?</p>
                                          </>
                                    )}
                                    
                              </div>
                        </div>
                  </section>
            </Layout>
      )
}

export default NotFoundPage