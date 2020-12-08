import React from "react"
import Layout from "../components/layout"
import Timeline from "../components/timeline"
import About from "../components/about"

import "../style/cv.scss";

const CV = () => (
  <Layout>
    <div className="cv">
     <div className="aboutme" id="aboutme">
      <h2 className="title">About Me</h2>
      <About/>
     </div>
      <div className="timeline">
        <h2 className="title">Course of life</h2>
        <Timeline />
      </div>
    </div>
  </Layout>
)

export default CV
