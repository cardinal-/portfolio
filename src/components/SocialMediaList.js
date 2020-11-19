import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../styles'

export const SocialMediaList = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-top: 12rem;
`

export const SocialMediaListItem = styled.li`
  a {
    display: inline-block;
    padding: 1.1rem;
    margin: 0 .3rem;
  }
`

export const SocialMediaIcon = styled.img`
  /* fill: ${colors.secondaryColor}; */
  width: 2rem; 
  height: 2rem;
`
