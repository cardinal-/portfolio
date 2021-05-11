import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from '../styles'
import { GhostButton, ButtonLink } from './Buttons'
import lasso from '../assets/svg/lasso.svg';

const Footer = () => {
    return (
        <StyledFooter>
          <Title>Want to connect?</Title>
          <Content>
            I’m always down for a conversation about design and technology or just to share opinions on the best ramen shops. Send an email and we can talk.
          </Content>
          <GhostButton>Get in touch </GhostButton>
          <AboutMe>
            <a href="#">More about me</a>
            <img src={lasso} />
          </AboutMe>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  grid-column: span 3;
  background-color: #021018;
  padding: 5.5rem 5vw 5rem; 
`

export const Title = styled.h3`
  font-size: 2.4rem;
  color: ${colors.primaryLight};
  line-height: 0;
  margin-bottom: 2rem;
`

export const Content = styled.p`
  font-size: 1.4rem;
  color: ${colors.primaryDark};
  font-weight: bold;
  margin-bottom: 4rem;
`

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;

  a {
    font-size: 1.4rem;
    color: ${colors.primaryColor};
    text-decoration: none;
    margin-right: 2.2rem;
  }
`;

export default Footer