import React from "react"

import "../style/skillbar.scss"

const Skillbar = ({ skill }) => {
  return (
    <div className="skillbar container-md">
      <span>{skill.skillName}</span>
      <div className="bar">
        <div className="skill" style={{ width: `${skill.level}%` }}>
          <div className="innerbar">
            <span>{skill.level}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillbar
