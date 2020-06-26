import { useStaticQuery, graphql } from 'gatsby'

const useSocialMediaLinks = () => {
  const data = useStaticQuery(graphql`
    query GetSocialMediaLinks {
      site {
        siteMetadata {
          socialMediaLinks {
            name
            svg
            url
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.socialMediaLinks
}

export default useSocialMediaLinks
