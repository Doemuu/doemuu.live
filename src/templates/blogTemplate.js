import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi"

import "../style/blog.scss"

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blogTemplate">
        <div className="header">
          <h1>{frontmatter.title}</h1>
          <div className="headerDescription">
            <div className="headerSpecifics">
              <span className="specificsElement">{frontmatter.date}</span>
              <span className="specificsElement">by {frontmatter.author}</span>
            </div>
            <div className="shareContainer">
              <span className="shareElement">
                <FiLinkedin />
              </span>
              <span className="shareElement">
                <FiFacebook />
              </span>
              <span className="shareElement">
                <FiTwitter />
              </span>
            </div>
          </div>
          <Img
            className="img"
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
        author
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate
