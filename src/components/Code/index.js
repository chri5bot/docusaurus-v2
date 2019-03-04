import styled from "styled-components"
import Blockquote from "../Blockquote"
import Paragraph from "../Paragraph"
import Aside from "../Aside"

const Code = styled.code`
  color: #797979;
  font-family: monospace;
  hyphens: auto;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  word-break: break-all;
  white-space: pre;
  ${Paragraph} &,  ${Aside} & {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    color: rgb(51, 51, 51);
    font-size: 12px;
    font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace,
      serif;
    padding: 4px;
  }
  ${Blockquote} & {
    color: white;
  }
`

export default Code
