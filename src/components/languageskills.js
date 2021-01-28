import React from "react"

import "../style/languageSkill.scss"

const LanguageSkill = ({ title, details }) => (
  <div className="languageSkill p-3 container-md">
    <h2>{title}</h2>
    <div className="details d-flex flex-column flex-wrap align-items-center">
      {details.map((detail, index) => (
        <div className="detail d-flex" key={index}>
          <div className="p-2 m-2">{detail.icon}</div>
          <div className="text-left pt-3">
            <span className="topText">{detail.text}</span>
            <br />
            <span>{detail.textTwo}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default LanguageSkill
