module.exports = {
  siteMetadata: {
    title: "Matt Cardinal",
    titleTemplate: "%s · Matt Cardinal",
    description: "The design portfolio of Matt Cardinal UX designer.",
    url: "https://www.mattcardinal.com", // No trailing slash allowed!
    twitterUsername: "@matt_cardinal",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: `${__dirname}/src/components/Layout.js`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Playfair Display", "Rubik"],
        },
      },
    },
  ],
}
