import React from "react"
import { Link } from "gatsby"

import "../style/navigation.scss"

const Navigation = ({ isNavOpen }) => (
  <div className={"nav" + (isNavOpen ? " active" : "")}>
    <div className="link-container">
      <Link to="/" activeClassName="current">
        <span>Home</span>
      </Link>
      <Link to="/cv" activeClassName="current">
        <span>CV</span>
      </Link>
      <Link activeClassName="current" to="/filler">
        <span>Featured Projects</span>
      </Link>
      <a href="">
        <span>Jenyus Org</span>
      </a>
    </div>
  </div>
)

export default Navigation
