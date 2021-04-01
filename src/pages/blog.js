import React from "react"
import Layout from "../components/layout"
import Postlink from "../components/postlink"

import "../style/blog.scss"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <Postlink key={edge.node.id} post={edge.node} />
  ))
  return (
    <Layout>
      <div className="blog">{Posts}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
            description
            thesisquestion
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
