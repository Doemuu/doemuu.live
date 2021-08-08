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
        <div className="pictureFrame">
          <div className="pictureDescription">
            <h3 className="titleText">{canton.descriptions?.[0].title}</h3>
            <p className="bodyText">{canton.descriptions?.[0].body}</p>
          </div>
          <Img className="picture" fluid={data?.img1?.childImageSharp?.fluid} />
        </div>
        <div className="pictureFrame">
          <div className="pictureDescription">
            <h3 className="titleText">{canton.descriptions?.[1].title}</h3>
            <p className="bodyText">{canton.descriptions?.[1].body}</p>
          </div>
          <Img className="picture" fluid={data?.img2?.childImageSharp?.fluid} />
        </div>
        <div className="pictureFrame">
          <div className="pictureDescription">
            <h3 className="titleText">{canton.descriptions?.[2].title}</h3>
            <p className="bodyText">{canton.descriptions?.[2].body}</p>
          </div>
          <Img className="picture" fluid={data?.img3?.childImageSharp?.fluid} />
        </div>
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
