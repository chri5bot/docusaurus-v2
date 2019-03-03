import React from "react"
import BurgerMenu from "react-burger-menu"

import MenuLink from "./components/MenuLink"

import { style, styleResponsive } from "./style"

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
        <MenuLink key={route.pathname} text={route.api} to={route.pathname} />
      )
      route.content.map(({ parent, children, pathname }) => {
        items.push(<span key={parent}>{parent}</span>)
        children.map(child => {
          items.push(
            <MenuLink
              key={child.pathname}
              text={child.name}
              to={route.pathname + pathname + child.pathname}
            />
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
