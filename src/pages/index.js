import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Burger from "../components/burger"
import "../style/landingpage.scss"

const IndexPage = () => (
  <div className="body">
    <SEO title="Home" />
    <Burger />
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
)

export default IndexPage
