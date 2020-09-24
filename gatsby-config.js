/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'carlavieira.dev',
		author: 'Carla Vieira',
		description : 'Carla Vieira - Portfolio',
		url: "https://www.carlavieira.dev", // No trailing slash allowed!
		image: "/images/avatar-carla-2020.jpg", // Path to your image you placed in the 'static' folder
		socialLinks:[
			{
				name:'Twitter',
				link:'https://twitter.com/carlaprvieira',
				icon:"/images/social-icons/twitter.png",
				svg:"/images/social-icons/twitter.svg",
				svgpurple:"/images/social-icons/twitter_purple.svg",
			},
			{
				name:'Instagram',
				link:'https://instagram.com/carlaprvieira',
				icon:"/images/social-icons/instagram.png",
				svg:"/images/social-icons/instagram.svg",
				svgpurple:"/images/social-icons/instagram_purple.svg",
			},
			{
				name:'Linkedin',
				link:'https://linkedin.com/in/carlaprv',
				icon:"/images/social-icons/linkedin.png",
				svg:"/images/social-icons/linkedin.svg",
				svgpurple:"/images/social-icons/linkedin_purple.svg",
			},
			{
				name:'Github',
				link:'https://github.com/carlaprv',
				icon:"/images/social-icons/github.png",
				svg:"/images/social-icons/github.svg",
				svgpurple:"/images/social-icons/github_purple.svg",
			},
			{
				name:'Youtube',
				link:'https://youtube.com/eaicarla',
				icon:"/images/social-icons/youtube.png",
				svg:"/images/social-icons/youtube.svg",
				svgpurple:"/images/social-icons/youtube_purple.svg",
			},
			{
				name:'Email',
				link:'contato@carlavieira.dev',
				icon:"/images/social-icons/mail.png",
				svg:"/images/social-icons/mail.svg",
				svgpurple:"/images/social-icons/mail_purple.svg",
			},

		],
		menuLinks:[
			{
				name:'Home',
				namept:'Início',
				link: '/'
			},
			{
				name: 'About',
				namept:'Sobre',
				link: '/about'
			},
			{
				name:'Blog',
				namept:'Blog',
				link: '/blog'
			},
			{
				name:'Contact',
				namept:'Contato',
				link: '/contact'
			},

		]
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/content/posts/`,
			},
		},
		{
			resolve: 'gatsby-plugin-intl',
			options: {
				// language JSON resource path
				path: `${__dirname}/src/intl`,
				// supported language
				languages: [`en`, `pt`],
				// language file path
				defaultLanguage: `pt`,
				// option to redirect to `/ko` when connecting `/`
				redirect: false,
			},
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options:{
				plugins: [
					{
						resolve: '@weknow/gatsby-remark-twitter',
						options: {
							align: `center`
						}
					},
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
