import React from "react"
import BurgerMenu from "react-burger-menu"

import {
  style,
  styleResponsive,
  MenuLink,
  SubmenuLink,
  TitleMenu,
} from "./style"

const mql = window.matchMedia(`(min-width: 800px)`)

class Menu extends React.Component {
  state = {
    docked: mql.matches,
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged = () => {
    this.setState({ docked: mql.matches })
  }

  render() {
    const Menu = BurgerMenu["slide"]

    const { docked } = this.state

    const { routes } = this.props

    const items = []

    routes.map(route => {
      items.push(
        <MenuLink
          activeStyle={{
            color: "white",
          }}
          key={route.pathname}
          to={route.pathname}
        >
          {route.api}
        </MenuLink>
      )
      route.content.map(({ parent, children, pathname }) => {
        items.push(<TitleMenu key={parent}>{parent}</TitleMenu>)
        children.map(child => {
          items.push(
            <SubmenuLink
              activeStyle={{
                color: "white",
              }}
              key={child.pathname}
              to={route.pathname + pathname + child.pathname}
            >
              {child.name}
            </SubmenuLink>
          )
        })
      })
    })

    console.log("items", items)

    return (
      <Menu
        id={"slide"}
        left
        styles={docked ? style : styleResponsive}
        isOpen={docked}
        noOverlay
      >
        {items}
      </Menu>
    )
  }
}

export default Menu
