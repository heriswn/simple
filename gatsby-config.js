/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Heri Setiawan`,
    description: `Knowledge is Free`,
    twitterUsername: `@gswnheri`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://swnheri.vercel.app`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
