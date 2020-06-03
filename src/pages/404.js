import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const getCatUrl = () => {
  return fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=SSJvg27oBJtfwU228k9C2hXe77kfPibz&tag=cat'
  )
    .then(resp => resp.json())
    .then(resp => resp.data.image_url)
}

const NotFoundPage = () => {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if ('undefined' === typeof window) {
      return
    }

    getCatUrl().then(url => setUrl(url))
  }, [])

  return (
    <Layout>
      <SEO title="404" description="Page not found" />

      <div className="dd-editor">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>To ease the pain, here's a random cat gif:</p>

        {url && <img className="mt-16 mx-auto" src={url} alt="CAT" />}

        <div className="flex justify-center">
          <button
            className="dd-button mt-16"
            onClick={async () => setUrl(await getCatUrl())}
          >
            Load another
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
