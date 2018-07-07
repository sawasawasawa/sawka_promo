import React from 'react'
import './index.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Description = () => (
  <section id='description' className='color-inverse'>
    <div className='container'>
      <div className="section-title"><span>Reklama na książce</span></div>
      {/*<div className="section-title"><span>Reklama na ksi<sub className='azogonkiem'>ą</sub>żce</span></div>*/}
      <h1>Promocja</h1>
      <p>
        Bardzo modne słowo. Prawie tak modne, jak marketing. Tradycyjny marketing nie sprawdza się tak, jak kiedyś i nie bardzo ma sens. Teraz klienci samodzielnie znajdują i sprawdzają produkt czy usługę. Umarł marketing, ale żyje sprzedawca. Bo każdy z nas jest sprzedawcą. Tak, Ty też jesteś sprzedawcą. Pozwól, że zadam Ci pytania zainspirowane pracami Daniela H. Pinka, cenionego autora książek o pracy, zarządzaniu i naukach behawioralnych:
      </p>
      <ul>
        <li>Czy zarabiasz sprzedając <strong>towary i usługi?</strong></li>
        <li>Czy prowadzisz własną działalność?</li>
        <li> Czy w Twojej pracy potrzebne są elastyczne umiejętności i <strong>inwestycje?</strong></li>
        <li>Czy pracujesz w edukacji lub służbie zdrowia?</li>
        <li>Czy starasz przekonać do siebie wyborców?</li>
      </ul>
      <p>
        Jeśli Twoją odpowiedzią było – tak – na którekolwiek z tych pytań, to jesteś tak jak ja – sprzedawcą.
      </p>
      <h2>Sprzedaż</h2>
      <p>Sprzedawcy są jak poszukiwacze złota, szukają szlachetnego kruszcu, który może stać się wykwitną biżuterią. Ty
        jesteś moim złotem, a nawet więcej. Ja mogę też Tobie pomóc znaleźć Twoją żyłę złota … Jeśli nie chcesz używać
        słowa klienci – nazwijmy ich inaczej: słuchacze, pacjenci, pasażerowie, wyborcy... itp. Jeśli chcesz mieć ich
        więcej – umieść swoją ofertę w mojej książce.</p>
      <span>Jeśli chcesz ich mieć więcej – <AnchorLink href="#contact" style={{color: '#ff8'}}>Napisz do mnie!</AnchorLink></span>
    </div>
  </section>
)