import React from 'react'
import styled from '@emotion/styled'
import { colors, typography, mq } from '../styles'
import { GhostButton, ButtonLink } from './Buttons'
import Grid, {Center} from './Grid';
import lasso from '../assets/svg/lasso.svg';
import useSocialMediaLinks from '../hooks/useSocialMediaLinks'

const Footer = () => {
  const socialLinks = useSocialMediaLinks()

    return (
        <StyledFooter>
          <Grid marginTop="0px">
            <Center>
              <Container>
                <Title>Want to connect?</Title>
                <Content>
                  I’m always down for a conversation about design and technology or just to share opinions on the best ramen shops. Send an email and we can talk.
                </Content>
                <GhostButton>Get in touch </GhostButton>
                <AboutMe>
                  <a href="#">More about me</a>
                  <img src={lasso} />
                </AboutMe>
                <SocialList>
                  {socialLinks.map(social => (
                    <li><a href={social.url} target="_blank">{social.name}</a></li>
                  ))}
                </SocialList>
              </Container>
            </Center>
          </Grid>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  grid-column: span 3;
  background-color: #021018;
  overflow: hidden;
  padding: 5.5rem 0; 
  width: 100%;
  

  ${mq.tablet} {
    grid-column: span 5;
  }
`

const Container = styled.div`
  min-width: 43rem;
`;

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
  max-width: 30rem;
`

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;

  ${mq.tablet} {
    margin-top: 0;
    display: inline-flex;
    margin-left: 5rem;
  }

  a {
    font-size: 1.4rem;
    color: ${colors.primaryColor};
    text-decoration: none;
    margin-right: 2.2rem;
  }

  
`;

const SocialList = styled.ul`
  display: none;
  list-style-type: none;
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: auto;
  margin-top: 9rem;

  ${mq.tablet} {
    display: flex;
    justify-content: flex-end;
  }

  a {
    color: ${colors.secondaryColor};
    text-decoration: none;
    display: inline-block;
    padding: 0 1.6rem;
  }

  li {
    &:not(:last-child) {
      border-right: 2px solid currentColor;
    }
  }
`;

export default Footer