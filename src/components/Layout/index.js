import React from "react"

import Menu from "../Menu"
import Header from "../Header"

import { GlobalStyle } from "../../styles/reset.css"

import { Main } from "./style"

function Layout({ children, showMenu }) {
  return (
    <>
      <GlobalStyle />
      <Header showMenu={showMenu} />
      {showMenu && <Menu />}
      <Main>{children}</Main>
    </>
  )
}

export default Layout
