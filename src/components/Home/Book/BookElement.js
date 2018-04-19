import React from 'react'
import './book.css'
import './niunik.css'

export const BookElement = () => <div className="BookElement">
  <div>

    <ul className="align">

      <li>
        <figure className="book">


          <ul className="hardcover_front">
            <li>
              <img src="img/cover.png" alt="" width="100%" height="100%" />
            </li>
            <li></li>
          </ul>


          <ul className="page">
            <li></li>
            <li>
                <div className='niunik'></div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>


          <ul className="hardcover_back">
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine">
            <li></li>
            <li></li>
          </ul>
          {/*<figcaption>*/}
            {/*<h1>Niunik i reszta świata</h1>*/}
            {/*<span>Ewa Dziadosz</span>*/}
          {/*</figcaption>*/}
        </figure>
      </li>
    </ul>
  </div>
  <div className='BookElement--title'>
    <h3>Niunik</h3>
    <h4>i reszta świata</h4>
  </div>
</div>

export default BookElement