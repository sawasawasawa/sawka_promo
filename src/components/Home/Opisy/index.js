import React from 'react'
import './index.css'

export class Opisy extends React.Component {
  render() {
    return (
      <section id='opisy'>
        <div className='container'>
          <h1>Opisy produktów</h1>
          <p>
            Każdy sklep internetowy musi mieć doskonała ekspozycję asortymentu na kartach produktów. Dobrze zrobione
            fotografie przyciągną uwagę klientów, niemniej sama grafika nie zachęci do zakupów, jeśli na stronie nie
            znajdą się wyczerpujące informacje dotyczące parametrów technicznych lub przeznaczenia rzeczy. Co więcej,
            potencjalny klient może w ogóle nie trafić do sklepu z organicznych wyników wyszukiwania, ponieważ strona
            nie zostanie uznana za wartościową przez roboty wyszukiwarki.
          </p>
          <p>
            Jeśli potrzebujsz skutecznych opisów produktów, które wygenerują ruch z wyszukiwarki i zwiększą sprzedaż <a
            style={{color: '#ff8'}} href="mailto:ewa.dziadosz@gmail.com">napisz do mnie!</a>
          </p>
        </div>
        <div className='container'>
          <img src='/img/moon.png' width='auto'/>
        </div>
      </section>
    );
  }
}
