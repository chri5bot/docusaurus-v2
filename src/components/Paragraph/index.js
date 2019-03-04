import styled from "styled-components"
import Blockquote from "../Blockquote"

const Paragraph = styled.p`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;

  ${Blockquote} & {
  }
`

export default Paragraph
