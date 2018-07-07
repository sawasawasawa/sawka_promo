import React from 'react'
import './main.css'

import Home from "../components/Home/Home";
import {BookSection} from "../components/Home/Book/index";
import {Copywriting} from "../components/Home/Copywriting/index";
import {Blog} from "../components/Home/Blog/index";
import {About} from "../components/Home/About/index";
import {Opisy} from "../components/Home/Opisy/index";
import {Contact} from "../components/Home/Contact/index";
import {Description} from "../components/Home/Description/index";
import CookiesFooter from "../components/CookiesFooter";

const IndexPage = () => (
  <div>
    <Home />
    <Description />
    <BookSection />
    <Copywriting />
    <Opisy />
    <Blog />
    <About />
    <Contact />
    <CookiesFooter />
  </div>
)

export default IndexPage
