import styled from "styled-components"
import media from "../styles/media"

export const Wrapper = styled.div`
  ${media.sm`
    margin-left: 200px; 
    display: flex;
    flex-direction: row;
  `}
  display: flex;
  flex-direction: column;
  font-size: 8px;
`
export const Content = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
`

export const Codebox = styled.div`
  display: flex;
  background-color: rgb(121, 121, 121);
  flex-direction: column;
`
