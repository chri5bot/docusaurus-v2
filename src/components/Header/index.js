import React from "react"

import { Link } from "gatsby"

import { HeaderCustom, Image, Version } from "./style"

import logoSkypostal from "../../images/home/skypostal_logo.png"

function Header({ showMenu }) {
  return (
    <HeaderCustom>
      <Link to="/">
        <Image src={logoSkypostal} />
      </Link>
      <Version showMenu={showMenu}>V 1.0</Version>
    </HeaderCustom>
  )
}

export default Header
