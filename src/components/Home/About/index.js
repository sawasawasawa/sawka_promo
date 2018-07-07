import React from 'react'
import Linkedin from 'react-icons/lib/fa/linkedin';
import Newspaper from 'react-icons/lib/fa/newspaper-o';
import './index.css'

export class About extends React.Component {
  render() {
    return (
      <section id='about'>
        <div className='container'>
          <div className='imagecontainer'>
            <img src='/img/ewa.jpg' alt='' />
          </div>
        </div>
        <div className='container'>
          <div className="section-title">O mnie</div>
          <p>
            Młoda nie jestem, chociaż jest moda na młodość. Zajmowałam się jednak modą, jako nauczycielka
            i jako dziennikarka. Jako dziennikarka pisałam przeważnie o ludziach. Jako nauczycielka uczyłam
            przeważnie o pisaniu. Zajmowałam się też sprzedażą. Przeważnie sprzedawałam teksty, zdarzyło mi
            się też sprzedawanie szkoleń i ubrań.
          </p>
          <ul>
            Zobacz:
            <li><a href="https://issuu.com/ewadziadosz" target='_blank'><Newspaper style={{padding: 5}}/>Wybrane publikacje</a></li>
            <li><a href="https://www.linkedin.com/in/ewa-dziadosz/" target='_blank'><Linkedin style={{padding: 5, paddingBottom: 10}}/>Moja historia</a></li>
          </ul>
        </div>
      </section>
    );
  }
}
