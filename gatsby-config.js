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
				link:'mailto:contato@carlavieira.dev',
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
				link: '/#about'
			},
			{
				name: 'Projects',
				namept:'Projetos',
				link: '/#projects'
			},
			{
				name: 'Palestras',
				namept:'Palestras',
				link: '/speaking'
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
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `carlavieira.dev`,
				short_name: `carlavieira.dev`,
				start_url: `/`,
				background_color: `#fbf4ff`,
				theme_color: `#995692`,
				display: `standalone`,
				icon: `static/images/avatar_carla_final.jpg`, // This path is relative to the root of the site.			
			},
		},
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
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `youtube`,
				path: `${__dirname}/content/youtube/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `events`,
				path: `${__dirname}/content/events/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `events`,
				path: `${__dirname}/content/talks/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `podcasts`,
				path: `${__dirname}/content/podcasts/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `news`,
				path: `${__dirname}/content/news/`,
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
						resolve: `gatsby-remark-autolink-headers`,
						options: {
						  offsetY: `100`,
						  icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
						  maintainCase: true,
						  removeAccents: true,
						  isIconAfterHeader: true,
						  elements: [`h1`, `h2`],
						},
					},
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
