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
        <div className="personal-header d-flex">
          <div className="image-container px-4">
            <Img
              className="image"
              fluid={data?.profilepicture?.childImageSharp?.fluid}
            />
          </div>
          <div className="responsive-header d-none">
            <h2>Dominik Berger</h2>
            <p>
              I am one to take mottos pretty seriously, which is why I spent a
              lot of time thinking of three distinctive words illustrating my
              character.
            </p>
          </div>
        </div>
        <div className="chitchat">
          <div className="nonresponsive-header">
            <h2>Dominik Berger</h2>
            <p>
              I am one to take mottos pretty seriously, which is why I spent a
              lot of time thinking of three distinctive words illustrating my
              character.
            </p>
          </div>
          <h2>Loyalty</h2>
          <p>
            This first word describes me well, as all I do, I do for a long
            time. All my hobbies, routines and even relationships last for
            multiple years at least, if not even the entire life.
          </p>
          <h2>Courage</h2>
          <p>
            Personally, I do not think I am the courageous type of person in the
            traditional sense of the word, but I do still think the word fits my
            character as I regularly try to leave my comfort zone and try new
            things and constantly challenge myself to be the best I can be.
          </p>
          <h2>Endurance</h2>
          <p>
            In a rapidly evolving world it is crucial not to lose focus. I chose
            the word not only to represent my character but also to keep
            reminding me of the fact, that nothing is unachievable all it does
            take, is time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
