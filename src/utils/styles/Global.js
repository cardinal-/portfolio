import React from 'react'
import { Global, css } from '@emotion/core'

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
      font-size: 62.5%;
    }
    body {
      margin: 0;
      line-height: 1.6;
      font-family: 'Rubik', sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      margin: 0;
      line-height: 1.1;
    }
    img {
      max-width: 100%;
    }
  `

  return <Global styles={styles} />
}

export default GlobalStyles
