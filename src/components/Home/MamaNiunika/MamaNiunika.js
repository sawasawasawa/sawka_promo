import React from 'react'
import ReactDOM from 'react-dom'
import './MamaNiunika.css'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import 'gsap/TweenLite'
import 'gsap/CSSPlugin'
import 'gsap/EasePack'
import 'gsap/TimelineLite'
// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf

const animateIn = (gridContainer) => {
  const mama = gridContainer.querySelectorAll('.MamaNiunika--img')
  const circle = gridContainer.querySelectorAll('.MamaNiunika--circle-container')
  const title = gridContainer.querySelectorAll('.page-title')
  console.log("_______ circle", circle);
  new TimelineLite()
    .fromTo(circle, 0.5, {autoAlpha: 0, x: 1000, y: 200}, {autoAlpha: 1, x: 0, y:0})
    .fromTo(mama, 0.6, {autoAlpha: 0, x: -1000, y: -200}, {autoAlpha: 1, x: 0, y: 0}, '-=0.5')
    .fromTo(title, 0.6, {autoAlpha: 0, y: 400}, {autoAlpha: 1, x: 0, y: 0}, '-=0.5')


}

class MamaNiunika extends React.Component {
  componentDidMount () {
    animateIn(ReactDOM.findDOMNode(this))
  }
  render () {
    return (
      <section id='home'>
        <div className="MamaNiunika">
          <div className="MamaNiunika--img">
            <img src='../img/mamaNiunika.gif'/>
          </div>

          <TransitionGroup>
            <div className='MamaNiunika--circle-container'>
              <ul className="MamaNiunika--circle">
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
                <li><div className="arc"></div></li>
              </ul>
            </div>
            <div className='page-title'>sawka.promo</div>
          </TransitionGroup>
        </div>
        <br/>

      </section>
    )
  }
}


export default MamaNiunika
