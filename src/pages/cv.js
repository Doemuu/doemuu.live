import React from "react"
import Layout from "../components/layout"
import Timeline from "../components/timeline"

import "../style/cv.scss";

const CV = () => (
  <Layout>
    <div className="cv">
      <div className="timeline">
        <h2 className="title">Course of life</h2>
        <Timeline />
      </div>
    </div>
  </Layout>
)

export default CV
