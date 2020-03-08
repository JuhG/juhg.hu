import { graphql, useStaticQuery } from 'gatsby'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import React from 'react'
import Helmet from 'react-helmet'
import slugify from 'slugify'
import { withPlugin } from 'tinacms'
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

      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="dd-content">
        <main>{children}</main>
      </div>
    </>
  )
}

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'New Portfolio',
  fields: [
    { name: 'title', component: 'text', required: true },
    { name: 'priority', component: 'number' },
    { name: 'body', component: 'markdown', required: true },
  ],
  filename: form =>
    `content/portfolio/${slugify(form.title, { lower: true })}.md`,
  frontmatter: form => ({
    title: form.title,
    priority: form.priority || 50,
  }),
  body: form => form.body,
})

export default withPlugin(Layout, CreatePostPlugin)
