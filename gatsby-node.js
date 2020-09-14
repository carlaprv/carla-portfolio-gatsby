const path = require('path')
const { create } = require('domain')

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md')

		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve('./src/templates/blog.js')
	// Query for markdown nodes to use in creating pages.
	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug 
						}
					}
				}
			}
		}
	`)
	
	const { edges } = res.data.allMarkdownRemark

	edges.forEach((edge) => {
		createPage({
			component: blogPostTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		})
	})

}


const locales = require('./src/constants/locales')
module.exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      })
    })

    resolve()
  })
}