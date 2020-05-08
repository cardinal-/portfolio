import React from 'react'
import SEO from './SEO'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      {/* <header>header</header> */}
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </>
  )
}
export default Layout
