/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `DiscussBox - Your All-in-One Learning Platform`,
    description: `A community based platform that allows users to share and access structured and diverse learning resources, collaborate with a vibrant community, both online and offline`,
    siteUrl: `https://discussbox.social`,
    image: "src/assets/images/og-image.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [`${process.env.GA_TRACKING_ID}`],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9l5a0a0q",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.jpg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    // Fonts

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Be Vietnam Pro",
              variants: ["300", "400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
};
