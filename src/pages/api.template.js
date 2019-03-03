import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

import media from "../styles/media"

import routes from "../routes"

const Wrapper = styled.div`
  ${media.md`
    margin-left: 200px;
  `}
`

function Api({ location: { pathname } }) {
  return (
    <Layout
      showMenu
      routes={routes.filter(route => route.pathname == pathname)}
    >
      <Wrapper>hey api test</Wrapper>
    </Layout>
  )
}

export default Api
