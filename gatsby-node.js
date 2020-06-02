const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { glob: "**/blog/*" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                hidden
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges.filter(
    p => !p.node.frontmatter.hidden
  )

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `blog/${post.node.frontmatter.slug}`,
      component: blogPost,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })
}
