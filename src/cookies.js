export default class Cookies {

  setCookie(cookieName, cookieValue, cookieLifetime) {
    const date = new Date();
    date.setTime(date.getTime() + (cookieLifetime * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie =`${cookieName}=${cookieValue};${expires};path=/`;
  }

  readCookieValue(cookieName) {
    var name = cookieName + "=";
    const isBrowser = typeof document !== 'undefined'
    if (isBrowser) {
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookieArray = decodedCookie.split(';');
      for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
    }
    return "";
  }
}