import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Page = ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>{data.page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
      </div>
    </Layout>
  )
}

export const QUERY = graphql`
  query BySlug($slug: String!) {
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Page
