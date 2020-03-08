import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="dd-content">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header
