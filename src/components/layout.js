/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Burger from "../components/burger"
import "../style/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isNavOpen, setNavOpen] = React.useState(false)

  function handleNav() {
    setNavOpen(!isNavOpen)
  }

  return (
    <div>
      <div>
        <Navigation isNavOpen={isNavOpen} />
        <Burger isNavOpen={isNavOpen} handleClick={handleNav} />
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
