import styled from '@emotion/styled'

const BannerImage = styled.div`
  height: 48.875rem;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
`

export default BannerImage
