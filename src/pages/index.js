import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import "../style/landingpage.scss"

const IndexPage = () => (
  <Layout>
    <div className="body">
      <SEO title="Home" />
      <div id="landingpage">
        <div className="motto-container">
          <div className="mottos">
            <div className="motto-1">
              <div className="spacer"></div>
              <div className="motto">Loyalty</div>
            </div>
            <div className="motto-2">
              <div className="spacer"></div>
              <div className="motto">Courage</div>
            </div>
            <div className="motto-3">
              <div className="spacer"></div>
              <div className="motto">Endurance</div>
            </div>
          </div>
          <div className="toolbar">
            <Link className="btn">
              Learn More <span className="triangle">▸</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
