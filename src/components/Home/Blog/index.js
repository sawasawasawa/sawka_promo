import React from 'react'
import './index.css'
import * as d3 from 'd3'

export class Blog extends React.Component {
  componentDidMount = () => {
    createSVG()
  }

  componentDidUpdate = () => {
    createSVG()
  }

  render() {
    return (
      <section id='blog' >
        <a href="https://repetitiorepetitio.blogspot.com/" target='_blank'>
          <div id='blog--svg-container'></div>
        </a>
        <div id='bloglink__header'>
          <h1 className=''>Blog</h1>
          <h5>Dlaczego piszę?</h5>
        </div>
        <div id='bloglink' target='_blank' className='blog-link-text container'>
          <div id='bloglink__text'>
            <p>
              Życie to szalona droga, z kałużami, zakrętami, słabo utrzymanymi odcinkami, które mogą zniszczyć opony. Piszę bo wierzę, że nauczyłam się czegoś i widzę rzeczy w taki sposób, jak wielu innych nie. Wierzę, że inne spojrzenie przyniosłoby im korzyści. Pisanie jest tak dobre jak gimnastyka, jedzenie i sen. Pozwala odegnać wrażenie, że wszystko, co robię, jest tymczasowe. Pomaga przywołać przeszłość, wyciągając klejnoty z ciemności i zobaczyć ich piękno
            </p><p>
              Piszę, gdy jestem głęboko wzruszona lekturą, filmem, sztuką i chcę przekazać to doświadczenie innym. Chcę podzielić się lękiem, bo to mi pomaga. Sztuka jest piękna. Słowa mogą być piękne, nawet jeśli opisują brzydotę, smutek i przemijanie. Smutek potrzebuje ujścia. Pisanie daje możliwość dawania głosu smutkowi i szansę na uzdrowienie. Pozwala ułożyć mrok w coś możliwego do zdefiniowania.
            </p><p>
              Piszę też dla zabawy. Tak, także dlatego, żeby zarabiać pieniądze. Nie muszę tego robić dla zbawienia świata. Wiem, programiści stworzyli programy, które potrafią tworzyć proste teksty a nawet kaligramy. Ja mam jednak poczucie humoru i śmieję się z motylka ułożonego z lekkich słów.  To jest dobry i prawdziwy powód do pisania.
            </p>
            <h2>Przejdź do bloga</h2>
          </div>
        </div>
      </section>
    );
  }
}

function createSVG() {
  var w = document.documentElement.clientWidth,
    h = Math.max(document.documentElement.clientHeight, window.document.getElementById('blog').offsetHeight, window.document.getElementById('bloglink').offsetHeight + 250),
    z = 40,
    x = Math.floor(w / z),
    y = Math.floor(h / z);
    z = w/x
  d3.select("#blog--svg-container svg").remove()
  var svg = d3.select("#blog--svg-container").append("svg")
    .attr("width", w)
    .attr("height", h);

  svg.selectAll("rect")
    .data(d3.range(x * y))
    .enter().append("rect")
    .attr("transform", translate)
    .attr("width", z)
    .attr("height", z)
    .attr("data-x", getRectX)
    .attr("data-y", getRectY)
    .style("fill", function(d) {

      var xx = d%x
      var yy = Math.floor(d/x)

      var xDistance = Math.abs(xx-x/2+0.5)
      var yDistance = Math.abs(yy-y/2)
      var distance = Math.sqrt(xDistance**2+yDistance**2)
      // console.log(Math.sqrt(xDistance^2+yDistance^2)/2, Math.sqrt(xDistance^2+yDistance^2), xDistance^2+yDistance^2, xDistance^2, yDistance^2)
      var maxDistance = Math.sqrt(x**2+y**2)
      var lightness = distance / maxDistance
      // Blue to white in centr
      return d3.hsl(206, 1, Math.abs(1-lightness))
      return d3.hsl(206, 1, Math.abs(1-lightness))
    })
    /*  return d3.hsl(Math.floor(d / y) / x * 360, 1, Math.abs(1-lightness))
     }) */
    //    .style("fill", function(d) { return d3.hsl(d % x / x * 360, 1, Math.floor(d / x) / y); })

    .on("mouseover", mouseover);

  function translate(d) {
    return "translate(" + getRectX(d) + "," + getRectY(d) + ")";
  }

  function getRectX(d) {
    return Math.floor(d % x) * z
  }

  function getRectY(d) {
    return Math.floor(d / x) * z
  }

  function mouseover(d) {
    this.parentNode.appendChild(this);

    var prevTransform = d3.select(this).attr('transform')
    // console.log('prevTransform', prevTransform)
    // console.log(prevTransform.match(/translate\(\d+(\.\d+)?, \d+(\.\d+)?\)/))
    var prevTranslate = prevTransform.match(/translate\(\d+(\.\d+)?, ?\d+(\.\d+)?\)/) && prevTransform.match(/translate\(\d+(\.\d+)?, ?\d+(\.\d+)?\)/)[0]
    // console.log('prevTranslate, prevTransform', prevTranslate, prevTransform)


    if (prevTranslate) {
      var scale = 2
      var x = d3.select(this).attr('data-x')
      var y = d3.select(this).attr('data-y')
      var translate = "translate(" + x + "," + y + ")"
      var translateScaled = "translate(" + (x - z / 2) + "," + (y  - z / 2) + ")" + "scale(" +  scale + ',' +scale + ")"
      // console.log("_______ x / scale", x / scale);
      // console.log("_______ y / scale", y / scale);
      // console.log("_______ \"translate(\" + x / scale - 5 + \",\" + y / scale - 5 + \")\"", "translate(" + x / scale - 5 + "," + y / scale - 5 + ")");
      // console.log("_______ x,y", x,y);
      // console.log("_______ translateScaled", translateScaled);

      d3.select(this)
        .style("pointer-events", "none")
        .transition()
        .duration(250)
        .attr("transform", translateScaled)
        .transition()
        .delay(200)
        .attr("transform", translate)
        .duration(350)
        .delay(100)
        .style("pointer-events", "auto")

    }
  }
}