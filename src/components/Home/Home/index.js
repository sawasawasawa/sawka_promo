import React from 'react'
import './index.css'

import TypedSlogan from './TypedSlogan';
import MamaNiunikaAnimation from "./MamaNiunikaAnimation";

// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf


export const MamaNiunika = () => (
  <section id='home'>
      <MamaNiunikaAnimation/>
      <TypedSlogan/>
  </section>
)

export default MamaNiunika
