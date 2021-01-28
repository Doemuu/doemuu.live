import React from "react"
import Layout from "../components/layout"
import Timeline from "../components/timeline"
import About from "../components/about"
import Skillbar from "../components/skillbar"
import BuildingBlock from "../components/buildingblock"

import {
  BsFillPersonFill,
  BsCalendar,
  BsFillHouseDoorFill,
} from "react-icons/bs"
import { TiLocation } from "react-icons/ti"

import "../style/cv.scss"

const skills = [
  { id: 1, skillName: "JavaScript", level: 75, example: true },
  { id: 2, skillName: "C#", level: 35 },
]

const personalDetails = {
  title: "Personaldetails",
  details: [
    {
      icon: <BsFillPersonFill size={36} className="pt-1"/>,
      text: "Dominik",
      textTwo: "Berger",
    },
    {
      icon: <TiLocation size={36} className="pt-1"/>,
      text: "Büttenen",
      textTwo: "6006 Lucerne",
    },
    {
      icon: <BsCalendar size={32} className="pt-1"/>,
      text: "12. September 2000",
      textTwo: "Adligenswil LU",
    },
    {
      icon: <BsFillHouseDoorFill size={32} className="pt-1"/>,
      text: "Oberlangenegg",
      textTwo: "(BE)",
    },
  ],
}
const CV = () => (
  <Layout>
    <div className="cv">
      <div className="aboutme element" id="aboutme">
        <h2 className="title">About Me</h2>
        <About />
      </div>
      <div className="buildingblock element">
        <BuildingBlock {...personalDetails} />
      </div>
      <div className="skills element" id="skills">
        <h2 className="title">Technical Skills</h2>
        <p className="titlechild">in %</p>
        <div className="technicalskills">
          {skills.map((skill, index) => (
            <Skillbar key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="timeline element" id="courseoflife">
        <h2 className="title">Course of life</h2>
        <Timeline />
      </div>
    </div>
  </Layout>
)

export default CV
