import React from "react"
import { StickyContainer } from "react-sticky"

import Menu from "../Menu"
import Header from "../Header"

import { GlobalStyle } from "../../styles/reset.css"

function Layout({ children, showMenu, routes }) {
  return (
    <>
      <GlobalStyle />
      <StickyContainer>
        <Header showMenu={showMenu} />
        {showMenu && routes && <Menu routes={routes} />}
        <main>{children}</main>
      </StickyContainer>
    </>
  )
}

export default Layout
