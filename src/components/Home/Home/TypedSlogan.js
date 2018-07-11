import React from 'react'
import './MamaNiunika.css'
import Typed from 'typed.js';

// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf


class TypedSlogan extends React.Component {
  componentDidMount () {
    const typedOptions = {
      typeSpeed: 40,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      startDelay: 1000,
      backSpeed: 30,
      endDelay: 4000,
      strings: ["<p><span>Napiszemy dla Ciebie</span> artykuł</p>",
      "<p><span>Napiszemy dla Ciebie</span> skuteczny email</p>",
      "<p><span>Napiszemy dla Ciebie</span> ksi<sub class='azogonkiem'>ą</sub>żk<sub class='azogonkiem'>ę</sub></p>"]
    }

    const typed = new Typed("#typedElement", typedOptions);
  }
  render () {
    return (
        <div id="typed">
          <div id="typedElement"></div>
        </div>
    )
  }
}

export default TypedSlogan
