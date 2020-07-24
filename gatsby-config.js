module.exports = {
  siteMetadata: {
    title: 'Matt Cardinal',
    titleTemplate: '%s · Matt Cardinal',
    description: 'The design portfolio of Matt Cardinal UX designer.',
    url: 'https://www.mattcardinal.com', // No trailing slash allowed!
    keywords: 'UX, designer, IBM, SCAD, portland, signal cycles,',
    author: 'Matt Cardinal',
    socialMediaLinks: [
      {
        name: 'Dribbble',
        svg: '/images/svg/dribbble-ball-mark.svg',
        url: '#',
      },
      {
        name: 'LinkedIn',
        svg: '/images/svg/linked-in-icon.svg',
        url: '#',
      },
      {
        name: 'Twitter',
        svg: '/images/svg/twitter-icon.svg',
        url: '#',
      },
      {
        name: 'Instagram',
        svg: '/images/svg/instagram-icon.svg',
        url: '#',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects/`,
      },
    },
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display', 'Rubik'],
        },
      },
    },
  ],
}
