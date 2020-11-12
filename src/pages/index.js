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
      <div class="motto-container">
        <div class="mottos">
          <div class="motto-1">
            <div class="spacer"></div>
            <div class="motto">Loyalty</div>
          </div>
          <div class="motto-2">
            <div class="spacer"></div>
            <div class="motto">Courage</div>
          </div>
          <div class="motto-3">
            <div class="spacer"></div>
            <div class="motto">Endurance</div>
          </div>
        </div>
        <div class="toolbar">
          <Link class="btn">Learn More</Link>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
