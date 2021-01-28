import React from "react"

import "../style/buildingblock.scss"

const BuildingBlock = ({ title, details }) => (
  <div className="buildingblock p-3 container-md">
    <h2>{title}</h2>
    <div className="details d-flex justify-content-around flex-wrap">
      {details.map((detail, index) => (
        <div className="detail d-flex" key={index}>
          <div className="p-2 m-2 icon">{detail.icon}</div>
          <div className="text-left pt-3">
            <span>{detail.text}</span>
            <br />
            <span>{detail.textTwo}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default BuildingBlock
