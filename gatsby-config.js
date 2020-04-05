module.exports = {
  siteMetadata: {
    title: 'Personal space of Gábor Juhász',
    description:
      'An always curious full-stack web developer focused on React and UX 💻',
    email: 'me@juhg.hu',
    author: '@juhgabor',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('postcss-nested'),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e06900`,
        theme_color: `#e06900`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
