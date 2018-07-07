// +svgIcon({name: 'cookie-small-icon', size: '32px'})
import './CookiesFooter.css'
import React from 'react'
import Cookies from "../cookies";

class CookiesFooter extends React.Component {
  handleClick = () => {
    const cookies = new Cookies();
    cookies.setCookie('cookiesAccepted', 1, 365);
    this.forceUpdate()
  }

  render() {
    const cookies = new Cookies();
    const cookiesAccepted = cookies.readCookieValue('cookiesAccepted') === '1' ? true : false;

    return cookiesAccepted
      ? null
      : <footer id="cookies-footer">
        <div>
          <span>Strona wykorzystuje pliki cookie. Korzystając akceptujesz
            <a href='/privacy'> politykę prywatności</a></span>
          <button id='understand-button' onClick={this.handleClick}>OK!</button>
        </div>
      </footer>
  }
}

export default CookiesFooter
