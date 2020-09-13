import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
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
			<section className={indexStyles.coloredSection}>
				<div className={indexStyles.headerContainer}>
					<div className={indexStyles.headerImage}>
						<img src={data.site.siteMetadata.image}/>
					</div>
					<div className={indexStyles.headerText}>
						<h1>{data.site.siteMetadata.author}</h1>
						<h2 className={indexStyles.headline}>{data.site.siteMetadata.headline}</h2>
						<ul className={indexStyles.socialIcons}>
							{data.site.siteMetadata.socialLinks.slice(0).reverse().map((socialItem) => {
								return(
								<li>
									<Link to={socialItem.link}>
										<img src={socialItem.icon} alt={socialItem.name}/>
									</Link>
								</li>
								)
							})}
						</ul>
					</div>
				</div>
				<p className={indexStyles.intro}>{data.site.siteMetadata.bio}</p>
			</section>
			<section className={indexStyles.whiteSection}>
				<h1>
					Section 2
				</h1>
				<h2>
					Lorem ipsum
				</h2>
			</section>
			
		</Layout>
	)
}

export default IndexPage