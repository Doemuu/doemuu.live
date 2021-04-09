import React from "react"
import { useLocation } from "@reach/router"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi"

import "../style/blog.scss"

const BlogTemplate = ({ data }) => {
  const { pathname } = useLocation()
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const {
    site: { siteMetadata },
  } = data

  const title = React.useMemo(
    () => `${frontmatter.title} | ${siteMetadata.title}`,
    [frontmatter, siteMetadata]
  )

  const encodedTitle = React.useMemo(() => encodeURIComponent(title), [title])

  const url = React.useMemo(() => `${siteMetadata.siteUrl}${pathname}`, [
    siteMetadata,
    pathname,
  ])

  const encodedUrl = React.useMemo(() => encodeURIComponent(url), [url])

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
                <a
                  href={`https://www.linkedin.com/shareArticle/?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>
              </span>
              <span className="shareElement">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFacebook />
                </a>
              </span>
              <span className="shareElement">
                <a
                  href={`https://twitter.com/intent/tweet/?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiTwitter />
                </a>
              </span>
            </div>
          </div>
          <Img
            className="img"
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        </div>
        <div className="article" dangerouslySetInnerHTML={{ __html: html }}></div>
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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

export default BlogTemplate
