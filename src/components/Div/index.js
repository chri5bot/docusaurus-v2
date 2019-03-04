import styled from "styled-components"

const Div = styled.div`
  background-color: #1e2123;
  box-sizing: border-box;
  color: #fff;
  display: ${({ active }) => (active ? "block" : "none")};
  margin: 0;
  overflow: auto;
  -webkit-text-size-adjust: 100%;
  padding: 2em 28px;
`

export default Div
