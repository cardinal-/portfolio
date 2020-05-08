import React from 'react'
import { Global, css } from '@emotion/core'

import * as typography from './typography'

const GlobalStyles = () => {
  const styles = css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    html {
      box-sizing: border-box;
      font-size: ${typography.defaultFontSize};
    }
    body {
      margin: 0;
      line-height: ${typography.copyLineHeight};
      font-family: ${typography.primaryFont};
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
  `

  return <Global styles={styles} />
}

export default GlobalStyles
