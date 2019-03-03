import styled from "styled-components"
import media from "../../styles/media"

export const HeaderCustom = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  height: 12%;
`
export const Image = styled.img`
  width: 100px;
`
export const Version = styled.div`
  font-size: 12px;
  color: #008de6;
  padding: 0 1em;
  margin-right: 20px;
  ${props => (props.showMenu ? media.md`margin-right: 0` : "margin-right: 0")}
`
