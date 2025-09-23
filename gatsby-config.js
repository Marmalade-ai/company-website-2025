/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Marmalade AI networking for software people`,
    description: `Effortless networking, beta in UX design, digital marketing, and machine learning.`,
    // twitterUsername: `marmalade.`,
    // image: `./src/images/Marmalade_Logo_trans_white_M_100.png`,
    siteUrl: `https://www.marmalade.ai`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: `GTM-5FP7LQQD`,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        // Any optional GTM environment details
        // gtmAuth: "YOUR_GTM_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GTM_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
