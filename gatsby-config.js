/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'carlavieira.dev',
		author: 'Carla Vieira',
		headline : 'Software Engineer • MSc Student Artificial Intelligence (USP) • Google Developer Expert @ Machine Learning',
		description : 'Carla Vieira - Portfolio',
		bio:"Carla holds a Bachelor's degree in Information Systems at USP, master student in Artificial Intelligence, software engineer and Google Developer Expert in Machine Learning. She promotes gender and race diversity in technology as co-organizer of perifaCode Community. She believes Technology is steadily changing the social good landscape and has been researching about the unconscious bias in Artificial Intelligence and its impacts on our society.",
		image: "/images/avatar-carla-2020.jpg", // Path to your image you placed in the 'static' folder
		socialLinks:[
			{
				name:'Twitter',
				link:'https://twitter.com/carlaprvieira',
				icon:"/images/social-icons/twitter.png",
			},
			{
				name:'Instagram',
				link:'https://instagram.com/carlaprvieira',
				icon:"/images/social-icons/instagram.png",
			},
			{
				name:'Linkedin',
				link:'https://linkedin.com/in/carlaprv',
				icon:"/images/social-icons/linkedin.png",
			},
			{
				name:'Github',
				link:'https://github.com/carlaprv',
				icon:"/images/social-icons/github.png",
			},
			{
				name:'Youtube',
				link:'https://youtube.com/eaicarla',
				icon:"/images/social-icons/youtube.png",
			},
			{
				name:'Email',
				link:'contato@carlavieira.dev',
				icon:"/images/social-icons/mail.png",
			},

		],
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
