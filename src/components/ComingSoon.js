import React from 'react'
import styled from '@emotion/styled'

const StyledComingSoon = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
`
const Title = styled.h1`
  font-size: 4.8rem;
  margin-bottom: 1.2rem;
`
const SubHead = styled.p`
  font-size: 1.8rem;
  max-width: 50rem;
`
const Content = styled.div`
  @media screen and (min-width: 60rem) {
    margin-left: 25%;
  }
`

const ComingSoon = () => (
  <StyledComingSoon>
    <Content>
      <Title>I'm working on it</Title>
      <SubHead>
        It takes time to make a website, especially if you don't know how to
        make a website.
      </SubHead>
    </Content>
  </StyledComingSoon>
)

export default ComingSoon
