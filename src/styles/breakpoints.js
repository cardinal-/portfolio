import { jsx, css } from '@emotion/core'

const breakpoints = [600, 900]

const breakPointMap = breakpoints.map(bp => `@media (min-width: ${bp / 16}em)`)

const mq = {
  tablet: breakPointMap[0],
  smallDesktop: breakPointMap[1]
}

export default mq
