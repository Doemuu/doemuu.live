import React from "react"
import { BiCaretDown } from "react-icons/bi"
import { motion } from "framer-motion"

import "../style/skillbar.scss"

const Skillbar = ({ skill }) => {
  const [isExpanded, setExpanded] = React.useState(false)
  const handleClick = () => {
    setExpanded(!isExpanded)
  }
  const expandVariants = {
    isExpanded: { rotate: 180 },
    isNotExpanded: { rotate: 0 },
  }
  const expandContentVariants = {
    isExpanded: { height: 50 },
    isNotExpanded: { height: 0, transitionEnd: { display: "none" } },
  }
  return (
    <div className="skillbar container-md">
      <span>{skill.skillName}</span>
      <div className="bar d-flex justify-content-between">
        <div className="skill">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%`}}
            transition={{ ease: "easeIn", duration: 2 }}
            className="innerbar"
          >
            <span>{skill.level}</span>
          </motion.div>
        </div>
        <span>
          {skill.example !== undefined && (
            <motion.div
              animate={isExpanded ? "isExpanded" : "isNotExpanded"}
              variants={expandVariants}
              transition={{ ease: "easeIn", duration: 0.3 }}
            >
              <BiCaretDown
                id="aniIcon"
                className="hoverable expand-icon"
                onClick={handleClick}
              />
            </motion.div>
          )}
        </span>
      </div>
      {skill.example !== undefined && (
        <motion.div
          initial={{ height: 0 }}
          animate={isExpanded ? "isExpanded" : "isNotExpanded"}
          variants={expandContentVariants}
          transition={{ ease: "easeIn", duration: 1 }}
          className="d-flex justify-content-around expanded-div"
        >
          <div className="d-flex flex-column">
            <span>Total Github Projects</span>
            <span>{skill.example.privateProject}</span>
          </div>
          <div className="d-flex flex-column">
            <span>Last contributed Project</span>
            <span>{skill.example.lastcontributedproject}</span>
          </div>
          <div className="d-flex flex-column">
            <span>Total commits</span>
            <span>{skill.example.totalCommits}</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Skillbar
