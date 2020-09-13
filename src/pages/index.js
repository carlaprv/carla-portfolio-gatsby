import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Card from '../components/card'

import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.scss'

import indexStyles from './index.module.scss'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
				author	
				headline
				bio
				image
				socialLinks {
					name
					link
					icon
				}
                }
            }
        }
    `)
	return(
		<Layout>
			<section className={layoutStyles.coloredSection}>
				<div className={indexStyles.headerContainer}>
					<div className={indexStyles.headerImage}>
						<img src={data.site.siteMetadata.image}/>
					</div>
					<div className={indexStyles.headerText}>
						<h1>{data.site.siteMetadata.author}</h1>
						<h2 className={indexStyles.headline}>{data.site.siteMetadata.headline}</h2>
						<ul className={indexStyles.socialIcons}>
							{data.site.siteMetadata.socialLinks.map((socialItem) => {
								return(
								<li>
									<a href={socialItem.link} target="_blank" rel="noreferrer">
										<img src={socialItem.icon} alt={socialItem.name}/>
									</a>
								</li>
								)
							})}
						</ul>
					</div>
				</div>
				<p className={indexStyles.intro}>{data.site.siteMetadata.bio}</p>
			</section>
			<section className={layoutStyles.whiteSection}>
				<h1>
					Section 2
				</h1>
				<h2>
					Lorem ipsum
				</h2>
			</section>
			<section className={layoutStyles.coloredSection}>
				<h1>
					Section 2
				</h1>
				<Card></Card>
			</section>

			
			
		</Layout>
	)
}

export default IndexPage