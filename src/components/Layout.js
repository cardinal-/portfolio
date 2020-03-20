import React from "react"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:900|Rubik&display=swap"
          rel="stylesheet"
        />
      </Helmet>

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
            font-family: "Rubik", sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Playfair Display", serif;
            font-weight: 900;
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
