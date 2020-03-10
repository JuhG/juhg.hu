import React, { useRef } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  const gif = useRef()
  return (
    <Layout>
      <SEO title="404: Not found" />

      <div className="dd-editor">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>To ease the pain, here's a random cat gif:</p>

        <img
          ref={gif}
          className="mt-16 mx-auto"
          src="https://cataas.com/cat/gif"
          alt="CAT"
        />

        <div className="flex justify-center">
          <button
            className="dd-button mt-16"
            onClick={() => {
              gif.current.src =
                'https://cataas.com/cat/gif?' + new Date().getTime()
            }}
          >
            Load another
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
