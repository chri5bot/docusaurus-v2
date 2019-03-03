import React from "react"

import BurgerMenu from "react-burger-menu"

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
    return (
      <Menu
        id={"slide"}
        left
        styles={docked ? style : styleResponsive}
        isOpen={docked}
        noOverlay
      >
        <span id="home" className="menu-item" href="/">
          Home
        </span>

        <span id="about" className="menu-item" href="/about">
          About
        </span>

        <span id="contact" className="menu-item" href="/contact">
          Contact
        </span>
      </Menu>
    )
  }
}

export default Menu
