import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          email
        }
      }
    }
  `)

  return (
    <header>
      <div className="dd-content">
        <h1 className="dd-title mt-8 mb-4">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <p>{data.site.siteMetadata.description}</p>

        <div className="dd-editor">
          <hr />
        </div>
      </div>
    </header>
  )
}

export default Header
