import React from 'react'
import {BookElement} from "./BookElement";

export const BookDescription = () => <div className='container'>
    <div className="component">
      <div className="section-title">Reklama na książce</div>
      <h3>Gadżety reklamowe</h3>
      <p>
        Książka drukowana obecnie jest przedmiotem prestiżowym.
      </p>
      <p>Wszyscy są przekonani o wartości książek, ale czytanie to hobby elitarne. Mają prestiż, tak jak dobre szwajcarskie zegarki, luksusowe samochody, wytworna biżuteria czy wyborne trunki. I są doskonałym upominkiem. Książka, którą my proponujemy dodatkowo zawiera Twój przekaz marketingowy do klientów lub wyborców. A ponadto, jest trwała, podczas gdy ulotki, czasopisma, słodycze, kubki, torby mają krótki żywot.


      </p>
      <div className='flex'>
        <div>
          <h3>Wybory</h3>
          <p>
            Psycholog społeczny Robert Cialdini opisał sześć najważniejszych zasad wywierania wpływu na ludzi. Pierwsza i najważniejsza z nich to reguła wzajemności. Sprowadza się do najzwyklejszego, ale i najbardziej ulubionego sposobu zwracania uwagi: obdarowywania. Obdarowany zapamiętuje darczyńcę i czuje potrzebę rewanżu. Jeśli przyjdzie mu wybierać między ofertami i kandydatami – wybierze darczyńcę.
          </p>
        </div>

      </div>

      <h3>Dobry prezent</h3>
      <div className='BookElement__description'>
        <div className=''>
          <p>
            Jeśli ktoś otrzymał kilka prezentów, wybierze darczyńcę prezentu nie najdroższego, ale najbardziej oryginalnego. Dlatego proponuję dwie publikacje mojego autorstwa.
          </p>
          <p style={{fontSize: '1.1em'}}>Na okładce tylnej oraz ewentualnie na 4 lub 8
            ostatnich stronach umieszczę informacje o działalności Klienta. Książki te drukowane będą w
            formacie A5, jako oryginalny materiał promocyjny
          </p>
          <p>
            <a href='http://niunik.pl' target="_blank">
              📖 "Niunik i reszta świata" to humorystyczna opowieść o dorastaniu w czasie polskiej
              transformacji.
            </a>
            <br/>
            <a href='https://repetitiorepetitio.blogspot.com/' target="_blank">
              📘 Ilustrowana książka składająca się z wybranych wpisów z mojego bloga
              www.repetitiorepetitio.blogspot.com
            </a>
          </p>

        </div>
        <BookElement />
      </div>
  </div>
</div>

export default BookDescription