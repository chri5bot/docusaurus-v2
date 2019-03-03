import React from "react"

import { Container, CustomLink } from "./style"

function MenuLink({ text, to }) {
  return (
    <Container>
      <CustomLink
        activeStyle={{
          color: "white",
          borderBottom: "solid 2px white",
        }}
        to={to}
      >
        {text}
      </CustomLink>
    </Container>
  )
}

export default MenuLink
