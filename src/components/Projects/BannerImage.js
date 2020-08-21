import styled from '@emotion/styled'

const BannerImage = styled.div`
  height: 60vh;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

export default BannerImage
