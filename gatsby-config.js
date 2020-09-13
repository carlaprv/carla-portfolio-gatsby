/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'carlavieira.dev',
		author: 'Carla Vieira',
		description : '',
		image: "/images/avatar-carla-2020.jpg", // Path to your image you placed in the 'static' folder
		twitter: "carlaprvieira",
		instagram: "@carlaprvieira",
		linkedin: "carlaprv",
		github: "carlaprv",
		youtube: "eaicarla",
		mail: "contato@carlavieira.dev",
		menuLinks:[
			{
				name:'Home',
				link: '/'
			},
			{
				name: 'About',
				link: '/about'
			},
			{
				name:'Blog',
				link: '/blog'
			},
			{
				name:'Contact',
				link: '/contact'
			},

		]
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
