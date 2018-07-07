import React from 'react'
import {slide as Burger} from 'react-burger-menu'
import './HamburgerMenu.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <div id='HamburgerMenu'>
        <Burger
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          itemListClassName={'HamburgerMenu__Links'}
        >
            <MenuLink toggleMenu={this.toggleMenu} href="#book">
              Reklama na ksi<sub className='azogonkiem'>ą</sub>żce
            </MenuLink>
            <MenuLink toggleMenu={this.toggleMenu} href="#teksty">
              Napisz<sub className='azogonkiem'>ę</sub> dla Ciebie
            </MenuLink>
            <MenuLink toggleMenu={this.toggleMenu} href="#opisy">Opisy produktów</MenuLink>
            <MenuLink toggleMenu={this.toggleMenu} href="#blog">Blog</MenuLink>
            <MenuLink toggleMenu={this.toggleMenu} href="#about">O mnie</MenuLink>
            <MenuLink toggleMenu={this.toggleMenu} href="#contact">Kontakt</MenuLink>
        </Burger>
      </div>
    )
  }
}

const MenuLink = (props) =>
<div onClick={props.toggleMenu} className="HamburgerMenu__Link">
  <AnchorLink href={props.href}>
  {props.children || props.text}
  </AnchorLink>
</div>
