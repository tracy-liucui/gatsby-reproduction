/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  assetPrefix: 'assets',
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Example`,
        short_name: `Example`,
        display: `standalone`,
        start_url: `/en`,
        lang: 'en',
        background_color: `#fff`,
        localize: [
          {
            start_url: `/ja`,
            lang: `ja`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
};
