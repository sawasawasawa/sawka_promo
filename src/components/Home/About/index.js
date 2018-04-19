import React from 'react'
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
          <h1>Autor lubelski</h1>
          <p>
            Młoda nie jestem, chociaż jest moda na młodość. Zajmowałam się jednak modą, jako nauczycielka
            i jako dziennikarka. Jako dziennikarka pisałam przeważnie o ludziach. Jako nauczycielka uczyłam
            przeważnie o pisaniu. Zajmowałam się też sprzedażą. Przeważnie sprzedawałam teksty, zdarzyło mi
            się też sprzedawanie szkoleń i ubrań.
          </p>
          <ul>
            Zobacz:
            <li><a href="https://issuu.com/ewadziadosz" target='_blank'>Wybrane publikacje</a></li>
            <li><a href="http://repetitiorepetitio.blogspot.com/" target='_blank'>Mój blog</a></li>
          </ul>
        </div>
      </section>
    );
  }
}
