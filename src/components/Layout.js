import React from "react"
import { Global, css } from "@emotion/core"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
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
            background-color: aqua;
            line-height: 1.6;
            font-family: "Helvetica", sans-serif;
          }
        `}
      />
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
export default Layout
