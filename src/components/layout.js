import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import '../css/tailwind.css'
import Header from './header'

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

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-stretch">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex-1">
          <main className="dd-content">{children}</main>
        </div>

        <footer className="my-16">
          <div className="dd-content">Designed by Dromedar</div>
        </footer>
      </div>
    </>
  )
}

export default Layout
