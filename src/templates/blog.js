import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <SEO />

      <div className="dd-editor">
        <div className="flex items-baseline justify-between">
          <h2>{frontmatter.title}</h2>
          <p className="ml-8">{frontmatter.date}</p>
        </div>

        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export const QUERY = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`
