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
    padding: 1.6rem;
  }
`

export const SocialMediaIcon = styled.object`
  /* fill: ${colors.secondaryColor}; */
  width: 2rem;
`
