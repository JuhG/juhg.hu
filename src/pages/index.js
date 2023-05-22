import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = ({ data }) => {
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
          <div dangerouslySetInnerHTML={{ __html: data.page.html }} />

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
  }
`

export default Home
