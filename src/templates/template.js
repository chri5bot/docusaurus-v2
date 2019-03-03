import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import renderNodes from "./node-renderer"

function Template(props) {
  return (
    <Layout showMenu>
      <div>{renderNodes(props.data.content.htmlAst.children)}</div>
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
