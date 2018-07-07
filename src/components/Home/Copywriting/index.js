import React from 'react'
import './index.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Copywriting = () => (
  <section id='teksty' className='color-inverse'>
    <div className='container'>
      {/*<h1>Napisz<sub className='azogonkiem'>ę</sub> dla Ciebie</h1>*/}
      <div className="section-title">Napiszę dla Ciebie</div>
      <img className='teksty__dog' src='../img/dog.gif'/>
    </div>
    <div className='container'>
      <h3>Copywriting</h3>
      <p>
        Wykorzystanie narzędzi komputerowych w zarządzaniu stało się koniecznością. Wg raportu:
        &quot;Społeczeństwo informacyjne w Polsce&quot; w 2016 roku w ponad 80 proc. gospodarstw domowych
        znajdował się przynajmniej jeden komputer.
      </p>
      <p>
        Większość użytkowników Internetu korzystało również ze stron urzędów, instytucji, firm. Implementacja rozwiązań cyfrowych może dać wiele korzyści m. in.:
      </p>

      <ul>
        <li>✅ zmniejszenie kosztów poprzez rezygnację z papierowej dokumentacji</li>
        <li>✅ oszczędność czasu do obsługi klienta</li>
        <li>✅ zmniejszenie ryzyka pomyłek</li>
        <li>✅ poprawa wizerunku, jako instytucji stosującej nowoczesne rozwiązania.</li>
      </ul>

      <h3>Teksty i m@iling</h3>
      <p>
        Każda instytucja ma swoją stronę w Internecie. Wygrywa ta, która ma teksty pisane, redagowane i
        makietowane na bieżąco, poprawnie i estetycznie. Można skorzystać z <a href="http://sawka.pro/generator/"
                                                                               target="_blank">generatora tekstów</a>.
      </p>
      <p><strong>Niemniej ja piszę i redaguję nieporównanie lepiej 😉</strong></p>

      <p style={{fontSize: '1.2em'}}>
        Nieodzownym elementem sukcesu jest komunikacja mailowa, także po angielsku.
        <br/>
        <br/>Jeśli nie masz na to czasu i chęci
        <br/>
        <AnchorLink href="#contact" style={{color: '#ff8'}}>Napisz do mnie!</AnchorLink>
      </p>
    </div>
  </section>
)