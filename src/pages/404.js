import React from "react"
import Layout from "../components/layout"

import layoutStyles from '../components/layout.module.scss'
import indexStyles from './index.module.scss'
import errorStyles from './404.module.scss'
import { useIntl } from "gatsby-plugin-intl"


const NotFoundPage = () => {
      const intl = useIntl()

      return (
            <Layout>
                  <section className={layoutStyles.coloredSection}>
                        <div className={indexStyles.aboutContainer}>
                              <div className={errorStyles.content}>
                                    {intl.locale === "pt" ? (
                                          <h1>Não tem nada aqui...</h1>
                                    ):(
                                          <h1>Page Not Found</h1>
                                    )}
                                    <img src="/images/avatar_carla_sad_transparent.png" alt=""/>
                              </div>
                        </div>
                  </section>
            </Layout>
      )
}

export default NotFoundPage