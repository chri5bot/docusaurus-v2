import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import renderNodes from "./node-renderer"

import { Wrapper, Content, Codebox } from "./style"

import routes from "../routes"

function Template({
  data: {
    content: { htmlAst },
  },
  location: { pathname },
}) {
  const content = []
  const codebox = []

  htmlAst.children.map(child => {
    if (
      (child.properties &&
        child.properties.dataLanguage &&
        child.properties.dataLanguage == "json") ||
      child.tagName == "blockquote"
    ) {
      codebox.push(child)
      return
    }

    content.push(child)
  })

  const routePathname = "/" + pathname.split("/")[1]
  return (
    <Layout
      showMenu
      routes={routes.filter(route => route.pathname == routePathname)}
    >
      <Wrapper>
        <Content>{renderNodes(content)}</Content>
        <Codebox>{renderNodes(codebox)}</Codebox>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    content: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`

export default Template
