import React from "react"
import { Helmet } from "react-helmet"
import "./src/styles/normalize.css"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Rubik:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {element}
    </>
  )
}
