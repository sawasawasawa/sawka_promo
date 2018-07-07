import React from 'react'
import ReactDOM from 'react-dom'
import './MamaNiunika.css'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import 'gsap/TweenLite'
import 'gsap/CSSPlugin'
import 'gsap/EasePack'
import 'gsap/TimelineLite'

const animateIn = (gridContainer) => {
  const mama = gridContainer.querySelector('#mama')
  const dog = gridContainer.querySelector('#dog')
  const niunik = gridContainer.querySelector('#niunik')
    new TimelineLite()
  .delay(0.5)
  .fromTo(mama, 0.4, {autoAlpha: 0, x: -1000, y: 0}, {autoAlpha: 1, x: 0, y: 0})
  .fromTo(dog, 0.5, {autoAlpha: 0, x: -500, y: -300}, {autoAlpha: 1, x: 0, y: 0}, '-=0.1')
  .fromTo(niunik, 0.6, {autoAlpha: 0, x: -700, y: -100}, {autoAlpha: 1, x: 0, y: 0}, '-=0.5')
}

class MamaNiunikaAnimation extends React.Component {
  componentDidMount() {
    animateIn(ReactDOM.findDOMNode(this))
  }

  render() {
    return (
      <div className="MamaNiunika">
        <TransitionGroup id='heroes-animation'>
          <Hero id='niunik' src='../img/superniunik.gif'/>
          <Hero id='mama' src='../img/mamaNiunika.gif'/>
          <Hero id='dog' src='../img/dog.gif'/>
        </TransitionGroup>
      </div>
    )
  }
}

export default MamaNiunikaAnimation

const Hero = (props) =>
  <div className="Hero heroes-animation--img" id={props.id}>
    <img src={props.src}/>
  </div>
