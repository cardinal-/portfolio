import { jsx, css } from '@emotion/core'

const breakpoints = [576, 768]

const mq = breakpoints.map(bp => `@media (min-width: ${bp / 16}em)`)

export default mq
