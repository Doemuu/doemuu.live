import React from "react"
import Map from "../components/cantons/map"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../style/tds.scss"

/**
 *
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {import("../types/canton").Canton} props.pageContext.canton
 * @returns
 */
const TDS = ({ data, pageContext: { canton } }) => {
  return (
    <>
      <div className="map">
        <Map activeCanton={canton.id} />
      </div>
      <div id="album">
        <Img className="picture" fluid={data?.img1?.childImageSharp?.fluid} />
        <Img className="picture" fluid={data?.img2?.childImageSharp?.fluid} />
        <Img className="picture" fluid={data?.img3?.childImageSharp?.fluid} />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($img1: String, $img2: String, $img3: String) {
    img1: file(relativePath: { eq: $img1 }) {
      childImageSharp {
        fluid(maxHeight: 800, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: $img2 }) {
      childImageSharp {
        fluid(maxHeight: 800, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: $img3 }) {
      childImageSharp {
        fluid(maxHeight: 800, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default TDS
