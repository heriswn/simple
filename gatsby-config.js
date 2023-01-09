/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Heri Setiawan`,
    description: `Knowledge is Free`,
    twitterUsername: `@swnheri`,
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
        path: `${__dirname}/content/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
