import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Postlink = ({ post }) => {
  return (
    <div className="postCard">
      <div className="title">
        <div className="titleText">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <Img
          className="img"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
      </div>
      <div className="body">
        <p>{post.frontmatter.description}</p>
        <p>{post.frontmatter.thesisquestion}</p>
      </div>
      <div className="buttonContainer">
        <Link className="btn" to={post.frontmatter.slug}>
          <span>Learn more</span>
        </Link>
      </div>
    </div>
  )
}

export default Postlink
