import React from 'react'
import Helmet from 'react-helmet'
import '../css/tailwind.css'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-stretch">
        <Header />

        <div className="flex-1 mb-16">
          <main className="dd-content">{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
