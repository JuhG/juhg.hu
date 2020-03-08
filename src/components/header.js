import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="dd-content">
      <h1 className="text-3xl mt-8 mb-4">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="dd-editor mb-12">
        <hr />
      </div>
    </div>
  </header>
)

export default Header
