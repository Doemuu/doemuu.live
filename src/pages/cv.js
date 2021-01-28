import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Timeline from "../components/timeline"
import About from "../components/about"
import Skillbar from "../components/skillbar"
import BuildingBlock from "../components/buildingblock"
import LanguageSkill from "../components/languageskills"

import personalDetails from "../assets/personalDetails"

import Img from "gatsby-image"

import "../style/cv.scss"

const CV = () => {
  const skills = [
    { id: 1, skillName: "JavaScript", level: 75, example: true },
    { id: 2, skillName: "C#", level: 35 },
  ]

  const data = useStaticQuery(graphql`
    query {
      swiss: file(relativePath: { eq: "swiss.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      germany: file(relativePath: { eq: "germany.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      uk: file(relativePath: { eq: "uk.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      france: file(relativePath: { eq: "france.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      italy: file(relativePath: { eq: "italy.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spain: file(relativePath: { eq: "spain.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const languageSkills = {
    title: "language skills",
    details: [
      {
        icon: (
          <Img
            className="country"
            fluid={data?.swiss?.childImageSharp?.fluid}
          />
        ),
        text: "Swiss-German",
        textTwo: "Native",
      },
      {
        icon: (
          <Img
            className="country"
            fluid={data?.germany?.childImageSharp?.fluid}
          />
        ),
        text: "German",
        textTwo: "C2",
      },
      {
        icon: (
          <Img className="country" fluid={data?.uk?.childImageSharp?.fluid} />
        ),
        text: "English",
        textTwo: "C2",
      },
      {
        icon: (
          <Img className="country" fluid={data?.france?.childImageSharp?.fluid} />
        ),
        text: "French",
        textTwo: "B2",
      },
      {
        icon: (
          <Img className="country" fluid={data?.italy?.childImageSharp?.fluid} />
        ),
        text: "Italian",
        textTwo: "A2",
      },
      {
        icon: (
          <Img className="country" fluid={data?.spain?.childImageSharp?.fluid} />
        ),
        text: "Spanish",
        textTwo: "A1",
      },
    ],
  }

  return (
    <Layout>
      <div className="cv">
        <div className="aboutme element" id="aboutme">
          <h2 className="title">about me</h2>
          <About />
        </div>
        <div className="buildingblock element">
          <BuildingBlock {...personalDetails} />
        </div>
        <div className="languageSkill element">
          <LanguageSkill {...languageSkills} />
        </div>
        <div className="skills element" id="skills">
          <h2 className="title">technical skills</h2>
          <p className="titlechild">in %</p>
          <div className="technicalskills">
            {skills.map((skill, index) => (
              <Skillbar key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div className="timeline element" id="courseoflife">
          <h2 className="title">course of life</h2>
          <Timeline />
        </div>
      </div>
    </Layout>
  )
}

export default CV
