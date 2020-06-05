import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../../../utils/styles'

export const NavContainer = styled(motion.nav)`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.UIDark};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`
