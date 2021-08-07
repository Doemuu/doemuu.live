const cantons = require("./src/assets/cantons")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  const cantonPageTemplate = require.resolve("./src/templates/cantonTemplate.js")

  cantons.forEach(canton =>
    createPage({
      path: `tour-de-suisse/${canton.id.toLowerCase()}`,
      component: cantonPageTemplate,
      context: {
        img1: `tds/${canton.images?.[0]}`,
        img2: `tds/${canton.images?.[1]}`,
        img3: `tds/${canton.images?.[2]}`,
        canton,
      },
    })
  )
}
