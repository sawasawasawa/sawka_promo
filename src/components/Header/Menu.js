import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Menu = () => (
  <div className='Header grid grid-to-animate' id='header'>
    <AnchorLink className="menulink" href="#book">Reklama na ksi<sub className='azogonkiem'>ą</sub>żce</AnchorLink>
      <AnchorLink className="menulink" href="#teksty">Napisz<sub className='azogonkiem'>ę</sub> dla Ciebie</AnchorLink>
    <AnchorLink className="menulink" href="#opisy">Opisy produktów</AnchorLink>
    <AnchorLink className="menulink" href="#blog">Blog</AnchorLink>
    <AnchorLink className="menulink" href="#about">O mnie</AnchorLink>
    <AnchorLink className="menulink" href="#contact">Kontakt</AnchorLink>
  </div>
)

export default Menu