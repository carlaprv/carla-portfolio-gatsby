import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"

const LanguageContainer = styled.div`
  display: inline-block;
  margin-left:30px;
  margin-top: -3px;

  @media screen and (max-width: 1024px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 170px;
  }
`
const LanguageButton = styled.a`
  font-family: $font-family-sans-serif;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  font-size: 12px;
`

const languageName = {
  en: "EN",
  pt: "PT",
}

const Language = () => {
  return (
    <LanguageContainer>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <LanguageButton
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#bb3dd5` : `#33204B`,
                background: currentLocale === language ? `white` : `#D8BBE8`,
                fontWeight: currentLocale === language ? `bold` : `normal`
              }}
            >
              {languageName[language]}
            </LanguageButton>
          ))
        }
      </IntlContextConsumer>
    </LanguageContainer>
  )
}

export default Language