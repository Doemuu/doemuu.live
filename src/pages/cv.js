import React from "react"
import Layout from "../components/layout"
import Timeline from "../components/timeline"
import About from "../components/about"
import Skillbar from "../components/skillbar"

import "../style/cv.scss"
const skills = [
  { id: 1, skillName: "Javascript", level: 75 },
  { id: 2, skillName: "C#", level: 35 },
]
const CV = () => (
  <Layout>
    <div className="cv">
      <div className="aboutme element" id="aboutme">
        <h2 className="title">About Me</h2>
        <About />
      </div>
      <div className="skills element" id="skills">
        <h2 className="title">Technical Skills</h2>
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
