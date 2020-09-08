import React from 'react'
import { Global, css } from '@emotion/core'
import { normalize } from 'polished'

import * as typography from './typography'
import colors from './colors'

const GlobalStyles = () => {
  const styles = css`
    ${normalize()}

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    html {
      box-sizing: border-box;
      font-size: 62.5%;
    }

    body {
      margin: 0;
      line-height: ${typography.copyLineHeight};
      font-family: ${typography.primaryFont};
      color: ${colors.secondaryDark};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${typography.headingFontWeight};
      margin: 0;
      line-height: ${typography.headingLineHeight};
    }
    img {
      max-width: 100%;
    }

    p {
      font-size: ${typography.defaultFontSize};
      margin-bottom: 1.6rem;
    }
  `

  return <Global styles={styles} />
}

export default GlobalStyles
