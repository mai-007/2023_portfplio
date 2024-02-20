const gatsbyRemarkImages = require('gatsby-remark-images');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/app`,
  siteMetadata: {
    title: `MEE.`,
    description: `2020年から2023年までの制作実績サイトです。`,
    author: `Mai Kotou`,
    image: `./src/images/powerGirl.png`,
    user: { name: 'M.kotou', email: 'm.kotou0715@gmail.com' },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`,`.md`],
          gatsbyRemarkPlugins: [
          {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 680,
                linkImagesToOriginal: true,
              },
            },
        ],
      },
    },
    {
    resolve: `gatsby-plugin-manifest`,
    options:{
      icon: `./src/images/powerGirl.png`,
      }
    },
    `gatsby-plugin-emotion`,
  ],
};
