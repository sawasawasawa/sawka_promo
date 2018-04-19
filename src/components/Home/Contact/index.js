import React from 'react'
import './index.css'

export const Contact = () => (
  <section id='contact' className='color-inverse'>
    <div>
      <h1>Kontakt</h1>
      <br />
      <br />
      <br />
      <br />
      <h5>Napisz do mnie!</h5>
      <form method="POST" action="https://formspree.io/dziadosz.ewa@gmail.com">
        <input type="email" name="email" placeholder="Twój adres email"/>
        <textarea name="message" placeholder="Twoja wiadomość..."></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  </section>
)