import React from "react"
import Map from "../components/cantons/map"

/**
 *
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {import("../types/canton").Canton} props.pageContext.canton
 * @returns
 */
const TDS = ({ pageContext: { canton } }) => {
  return (
    <>
      {canton.name}
      <Map activeCanton={canton.id} />
    </>
  )
}

export default TDS
