import React from "react"

import "../style/experience.scss"

const Experience = ({ title, details }) => (
  <div className="experience p-3 container-md">
    <h2>{title}</h2>
    <div className="details d-flex flex-wrap justify-content-center align-items-center">
      {details.map((detail, index) => (
        <div className="detail card m-2" key={index}>
          <div className="p-3 border-bottom card-header">
            <h3>{detail.job}</h3>
          </div>
          <div className="p-3 card-body d-flex flex-column justify-content-between">
            <p className="topText">{detail.description}</p>
            <span>{detail.location}</span>
            <br/>
            <span>{detail.date}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Experience
