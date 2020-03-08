import { graphql } from 'gatsby'
import { remarkForm } from 'gatsby-tinacms-remark'
import React from 'react'
import Layout from '../components/layout'

const Home = ({ data }) => (
  <Layout>
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        className="dd-editor"
        dangerouslySetInnerHTML={{ __html: data.page.html }}
      />

      <h2>Stuff I did</h2>

      {data.portfolio.nodes.map(node => (
        <article>
          <h3>{node.frontmatter.title}</h3>
          <div
            className="dd-editor"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </article>
      ))}
    </div>
  </Layout>
)

export const QUERY = graphql`
  query {
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
        }
        html
      }
    }
  }
`

export default remarkForm(Home, { queryName: 'page' })
