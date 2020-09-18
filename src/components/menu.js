import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Language from "./language"
import menuStyles from './menu.module.scss'
import classNames from 'classnames';

const Menu = () => {
      const [menuActive, setMenuActive] = useState(false);
      const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title
                    menuLinks {
                        name
                        link
                      }
                }
            }
        }
    `)

      return (
            <nav className={menuStyles.navContainer}>
                  {/* Brand and toggle get grouped for better mobile display  */}
                  <Link className={menuStyles.navBrand} to="/">{data.site.siteMetadata.title}</Link>
                  <Language />

                  {/* Button for mobile */}
                  <button onClick={() => setMenuActive(!menuActive)} className={classNames({[menuStyles.activeOne]: menuActive})}>
                        <span className={classNames({[menuStyles.hamburger]: true, [menuStyles.hamburgerOne]: true})}></span>
                  </button>

                  {/* Collect the nav links and content for toggling */}
                  <ul className={classNames({[menuStyles.navList]: true, [menuStyles.toogle]: menuActive})}>
                        {data.site.siteMetadata.menuLinks.slice(0).reverse().map((menuItem) => {
                              return(
                                    <li>
                                          <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to={menuItem.link}>{menuItem.name}</Link>
                                    </li>
                              )
                        })}
                  </ul>
            </nav>
      )
}

export default Menu