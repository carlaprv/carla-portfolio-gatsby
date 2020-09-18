import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import languageStyles from './language.module.scss'


const languageName = {
  en: "EN",
  pt: "PT",
}

const Language = () => {
  return (
    <div className={languageStyles.inline}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              className={languageStyles.button}
              style={{
                color: currentLocale === language ? `#C551B9` : `#33204B`,
                background: currentLocale === language ? `white` : `#D6BDDC`,
                fontWeight: currentLocale === language ? `bold` : `normal`
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language