const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/page.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileRelativePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  nodes.forEach(({ node }, index) => {
    createPage({
      path: `/${node.frontmatter.slug === 'home' ? '' : node.frontmatter.slug}`,
      component: template,
      context: {},
    })
  })
}
