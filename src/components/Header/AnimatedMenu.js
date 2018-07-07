import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import 'gsap/TweenLite'
import 'gsap/CSSPlugin'
import 'gsap/EasePack'
import 'gsap/TimelineLite'
import animationTimings from './animationTimings'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './index.css'
// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf

const animateIn = (gridContainer) => {
  const cards = gridContainer.querySelectorAll('.AnimatedMenu__Link')
  new TimelineLite()
    .delay(2.7)
    .staggerFromTo(cards, animationTimings.cardEnter / 1000, {autoAlpha: 0, y: -50}, {
      autoAlpha: 1,
      y: 0,
      ease: Back.easeOut.config(4)
    }, 0.2)
}

class AnimatedMenu extends React.Component {
  componentDidMount() {
    animateIn(ReactDOM.findDOMNode(this))
  }

  render() {
    return (
      <div id='AnimatedMenu'>
        <TransitionGroup className='AnimatedMenu-animation'>
          <Link href="#book" text='Reklama na książce'/>
          <Link href="#teksty" text='Napiszę dla Ciebie'/>
          <Link href="#opisy" text='Opisy produktów'/>
          <Link href="#blog" text='Blog'/>
          <Link href="#about" text='O mnie'/>
          <Link href="#contact" text='Kontakt'/>
        </TransitionGroup>
      </div>
    )
  }
}

export default () => <AnimatedMenu/>


const Link = (props) =>
  <div onClick={props.toggleMenu} className="AnimatedMenu__Link">
    <AnchorLink className="menulink" href={props.href}>
      {props.children || props.text}
    </AnchorLink>
  </div>
