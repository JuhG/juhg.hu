import { graphql, useStaticQuery } from 'gatsby'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import React from 'react'
import Helmet from 'react-helmet'
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
  label: 'New Blog Post',
  filename: form => {
    return form.filename
  },
  fields: [
    {
      name: 'filename',
      component: 'text',
      label: 'Filename',
      placeholder: 'content/blog/hello-world/index.md',
      description:
        'The full path to the new Markdown file, relative to the repository root.',
    },
  ],
})

export default withPlugin(Layout, CreatePostPlugin)
