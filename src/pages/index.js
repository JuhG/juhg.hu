import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import slugify from 'slugify'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = ({ data }) => {
  const [text, setText] = useState({
    state: 'INITIAL',
    content: data.page.html.split('<!--more-->')[0],
  })
  const [portfolio, setPortfolio] = useState({
    state: 'INITIAL',
    content: data.portfolio.nodes.slice(0, 3),
  })

  return (
    <Layout>
      <SEO />

      <div className="dd-editor flex flex-col">
        <div>
          <Img
            className="sm:mt-8 dd-image sm:float-left sm:mr-8 sm:mb-4"
            fixed={data.file.childImageSharp.fixed}
            alt="Gábor Juhász"
            imgStyle={{ width: '100%', objectFit: 'contain' }}
            placeholderStyle={{ opacity: 0 }}
          />
          <div dangerouslySetInnerHTML={{ __html: text.content }} />
          {'LOADED' !== text.state && (
            <button
              className="dd-button"
              onClick={() => {
                setText({ state: 'LOADED', content: data.page.html })
              }}
            >
              Read more
            </button>
          )}

          <div className="mt-8 mb-4 p-3 bg-gray-100 rounded">
            <span role="img" aria-labelledby="mailbox">
              📮
            </span>
            <span> You can reach me at </span>
            <a href={`mailto:${data.site.siteMetadata.email}`}>
              {data.site.siteMetadata.email}
            </a>
          </div>
        </div>

        <div className="clear-both">
          <h2>Stuff I've made</h2>

          {portfolio.content.map(node => (
            <article key={slugify(node.frontmatter.title)}>
              <h3>{node.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <hr />
            </article>
          ))}

          {'LOADED' !== portfolio.state && (
            <button
              className="dd-button mb-8"
              onClick={() => {
                setPortfolio({ state: 'LOADED', content: data.portfolio.nodes })
              }}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const QUERY = graphql`
  query {
    site {
      siteMetadata {
        email
      }
    }
    file(name: { eq: "gabor" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    page: markdownRemark(frontmatter: { slug: { eq: "home" } }) {
      frontmatter {
        title
      }
      html
    }
    portfolio: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___priority }
      filter: { fileAbsolutePath: { glob: "**/portfolio/*" } }
    ) {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
  }
`

export default Home
