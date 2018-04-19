import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import 'gsap/TweenLite'
import 'gsap/CSSPlugin'
import 'gsap/EasePack'
import 'gsap/TimelineLite'
import animationTimings from './animationTimings'
import {Menu} from "./Menu";
// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf

const animateIn = (gridContainer) => {
  const cards = gridContainer.querySelectorAll('.menulink')
  new TimelineLite()
    .delay(0.2)
    .staggerFromTo(cards, animationTimings.cardEnter / 1000, {autoAlpha: 0, y: -50}, {autoAlpha: 1, y: 0, ease: Back.easeOut.config(4)}, 0.2)
}

class AnimatedMenu extends React.Component {
  componentDidMount () {
    animateIn(ReactDOM.findDOMNode(this))
  }
  render () {
    return (
        <TransitionGroup>
          <Menu/>
        </TransitionGroup>
    )
  }
}

export default () => <AnimatedMenu />