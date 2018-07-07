import React from 'react'
import Facebook from 'react-icons/lib/fa/facebook';
import GPlus from 'react-icons/lib/fa/google-plus';
import Envelope from 'react-icons/lib/fa/envelope-o';
import './index.css'

export const Contact = () => (
  <section id='contact' className='color-inverse'>
    <div>
      <div className="section-title">Kontakt</div>
      <br/>
      <br/>
      <div className={'icons'}>
        <a href="https://www.facebook.com/Ewa.Dziadosz" target='_blank'><Facebook size={32}/></a>
        <a href="mailto:dziadosz.ewa@gmail.com" target='_blank'><Envelope size={32}/></a>
        <a href="https://plus.google.com/+EwaDziadosz" target='_blank'><GPlus size={36}/></a>
      </div>
      <br/>
      <br/>
      <div className="section-title"><h5>Napisz do mnie!</h5></div>
      <form method="POST" action="https://formspree.io/dziadosz.ewa@gmail.com">
        <input type="email" name="email" placeholder="Twój adres email"/>
        <textarea name="message" placeholder="Twoja wiadomość..."></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </div>
    <
    /section>
    )