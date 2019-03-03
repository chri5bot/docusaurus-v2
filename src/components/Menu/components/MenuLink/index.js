import React from "react"

import { Container, CustomLink } from "./style"

function MenuLink({ text, to }) {
  console.log("text", text)
  console.log("to", to)
  return (
    <Container>
      <CustomLink
        activeStyle={{
          color: "white",
          borderBottom: "solid 2px #a83557",
        }}
        to={to}
      >
        {text}
      </CustomLink>
    </Container>
  )
}

export default MenuLink
