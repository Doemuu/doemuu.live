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
    <div className="p-3 intro container-md">
      <div className="img 2-3 pr-3">
        <Img
          className="image"
          fluid={data?.profilepicture?.childImageSharp?.fluid}
        />
      </div>
      <div className="t-1">
        <h3 className="d-inline">Dominik Berger</h3>
        <br />
        <p className="d-inline">
          I am one to take mottos pretty serious, which is why I spent a lot
          of time thinking of three distinctive words illustrating my character.
        </p>
      </div>
      <div className="t-2 pt-md-3">
        <h3>Loyalty</h3>
        <p>
          This first word describes me well, as all I do, I do for a long time.
          All my hobbies, routines and even relationships last for multiple
          years at least, if not even the entire life.
        </p>
      </div>
      <div className="t-3">
        <h3>Courage</h3>
        <p>
          Personally, I do not think I am the courageous type of person in the
          traditional sense of the word, but I do still think the word fits my
          character as I regularly try to leave my comfort zone and try new
          things and constantly challenge myself to be the best I can be.
        </p>
      </div>
      <div className="t-4">
        <h3>Endurance</h3>
        <p>
          In a rapidly evolving world it is crucial not to lose focus. I chose
          the word not only to represent my character but also to keep reminding
          me of the fact, that nothing is unachievable all it does take, is
          time.
        </p>
      </div>
    </div>
  )
}

export default About
