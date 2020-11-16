import React from "react"
import { Link } from "gatsby"
import "../style/burger.scss"

const Burger = ({isNavOpen, handleClick}) => {

  return (
    <div onClick={handleClick}>
      <div className="navbtn">
        <div className="btn-container">
          <span className={"line-1 line" + (isNavOpen ? " active" : "")}></span>
          <span className={"line-2 line" + (isNavOpen ? " active" : "")}></span>
          <span className={"line-3 line" + (isNavOpen ? " active" : "")}></span>
        </div>
      </div>
    </div>
  )
}

export default Burger
