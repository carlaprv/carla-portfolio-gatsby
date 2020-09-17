import React from "react"
import Layout from "../components/layout"

import layoutStyles from '../components/layout.module.scss'
import indexStyles from './index.module.scss'
import errorStyles from './404.module.scss'


const NotFoundPage = () => (
      <Layout>
            <section className={layoutStyles.coloredSection}>
			<div className={indexStyles.aboutContainer}>
                        <div className={errorStyles.text}>
                              <h1>404</h1>
                              <p>Não tem nada aqui... Mas não se preocupe!</p>
                              <img src="https://media.tenor.com/images/23f6e3bc6f47952e2784e4091e08bd1e/tenor.gif"/>
                        </div>
                  </div>
            </section>
      </Layout>
)
export default NotFoundPage