import styled from "styled-components"
import { Link } from "gatsby"

export const styleResponsive = {
  bmMenuWrapp: {
    width: "200px",
  },
  bmBurgerButton: {
    position: "fixed",
    width: "25px",
    height: "20px",
    right: "10px",
    top: "30px",
  },
  bmBurgerBars: {
    background: "#008de6",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "white",
  },
  bmMenu: {
    background: "#008de6",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#008de6",
  },
  bmItemList: {
    color: "white",
  },
  bmItem: {
    display: "flex",
    outline: "none",
  },
}

export const style = {
  bmBurgerButton: {
    display: "none",
  },
  bmCrossButton: {
    display: "none",
  },
  bmMenu: {
    backgroundImage: "linear-gradient(#008de6, #18b0f7, #00659c)",
    padding: "1.5em 1.5em 0",
    fontSize: "1.15em",
    width: "200px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "white",
  },
  bmItem: {
    display: "flex",
    outline: "none",
    fontSize: "14px",
  },
}

export const MenuLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
`

export const SubmenuLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  margin-left: 20px;
`

export const TitleMenu = styled.span`
  color: #ccc;
`
