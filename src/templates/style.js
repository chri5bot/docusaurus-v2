import styled from "styled-components"
import media from "../styles/media"

export const Wrapper = styled.div`
  ${media.sm`
    display: flex;
    flex-direction: row;
  `}
  display: flex;
  flex-direction: column;
  font-size: 12px;
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 100%;
`

export const Codebox = styled.div`
  display: flex;
  background-color: rgb(30, 33, 35);
  flex-direction: column;
  width: 100%;
`

export const EmptyDiv = styled.div`
  ${media.sm`
    display: flex;
    width: 500px;
  `}
`
