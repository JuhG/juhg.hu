import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { remarkForm } from 'gatsby-tinacms-remark'
import React from 'react'
import slugify from 'slugify'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = ({ data }) => (
  <Layout>
    <SEO />

    <div className="dd-editor">
      <div>
        <Img
          className="sm:float-left sm:mr-8 sm:mb-8"
          fixed={data.file.childImageSharp.fixed}
        />
        <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
      </div>

      <div className="pt-8 clear-both">
        <h2>Stuff I did</h2>

        {data.portfolio.nodes.map(node => (
          <article key={slugify(node.frontmatter.title)}>
            <h3>{node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <hr />
          </article>
        ))}
      </div>
    </div>
  </Layout>
)

export const QUERY = graphql`
  query {
    file(name: { eq: "gabor" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    page: markdownRemark(frontmatter: { slug: { eq: "home" } }) {
      frontmatter {
        title
      }
      html
      ...TinaRemark
    }
    portfolio: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___priority }
      filter: { fileAbsolutePath: { glob: "**/portfolio/*" } }
    ) {
      nodes {
        frontmatter {
          title
          priority
        }
        html
      }
    }
  }
`

export default remarkForm(Home, { queryName: 'page' })
