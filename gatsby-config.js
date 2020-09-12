/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Carla Portfolio',
		author: 'Carla Vieira'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
			  name: 'src',
			  path: `${__dirname}/src/`,
			},
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options:{
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 960,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
		

	]
}
