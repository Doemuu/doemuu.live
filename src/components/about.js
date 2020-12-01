import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import "../style/about.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profilepicture: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 940, maxWidth: 660) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="aboutme">
      <div className="aboutme-content container-md d-flex">
        <div className="image-container px-4">
          <Img
            className="image"
            fluid={data?.profilepicture?.childImageSharp?.fluid}
          />
        </div>
        <div className="chitchat">
          <p>Hello World</p>
        </div>
      </div>
    </div>
  )
}

export default About
