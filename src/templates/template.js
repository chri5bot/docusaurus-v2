import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import renderNodes from "./node-renderer"

import { Wrapper, Content, Codebox } from "./style"

function Template({
  data: {
    content: { htmlAst },
  },
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
  return (
    <Layout showMenu>
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
