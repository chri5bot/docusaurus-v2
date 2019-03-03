import React from "react"
import { Sticky } from "react-sticky"
import { Link } from "gatsby"

import { HeaderCustom, Image } from "./style"

import logoSkypostal from "../../images/home/skypostal_logo.png"

function Header({ showMenu }) {
  return (
    <Sticky>
      {({ style }) => (
        <HeaderCustom style={style}>
          <Link to="/">
            <Image src={logoSkypostal} />
          </Link>
        </HeaderCustom>
      )}
    </Sticky>
  )
}

export default Header
