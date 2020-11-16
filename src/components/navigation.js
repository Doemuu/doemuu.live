import React from "react"
import { Link } from "gatsby"

import "../style/navigation.scss"

const Navigation = ({ isNavOpen }) => (
  <div className={"nav" + (isNavOpen ? " active" : "")}>
    <div className="link-container">
      <Link to="/" activeClassName="current" className="text-dark">
        <span>Home</span>
      </Link>
      <Link to="/cv" activeClassName="current" className="text-dark">
        <span>CV</span>
      </Link>
      <Link activeClassName="current"  className="text-dark">
        <span>Featured Projects</span>
      </Link>
      <a href="" className="text-dark">
        <span>Jenyus Org</span>
      </a>
    </div>
  </div>
)

export default Navigation
