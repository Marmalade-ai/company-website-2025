/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Marmalade AI networking for software people`,
    description: `Virtual networking for software specialists in UX design, digital marketing, and machine learning.`,
    twitterUsername: `@MarmaladeAI`,
    image: `./src/images/Marmalade_Logo_trans_white_M_100.png`,
    siteUrl: `https://www.marmalade.ai`,
 
  },
  plugins: [
    "gatsby-plugin-netlify",
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M97RDW8",
        // 2023-3-7: Same settings below as in "company-website" config file.
        // "--"" indicates an option include in
        // https://www.npmjs.com/package/gatsby-plugin-google-tagmanager?activeTab=readme 
        
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // --defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // --gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // --gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // --dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // --routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // --selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
