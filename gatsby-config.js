/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Marmalade AI 2023`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `faq`,
        path: `${__dirname}/faq`,
      },
    },
    { 
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
