import React from 'react'
import './main.css'

import MamaNiunika from "../components/Home/MamaNiunika/MamaNiunika";
import {BookSection} from "../components/Home/Book/index";
import {Copywriting} from "../components/Home/Copywriting/index";
import {Blog} from "../components/Home/Blog/index";
import {About} from "../components/Home/About/index";
import {Opisy} from "../components/Home/Opisy/index";
import {Contact} from "../components/Home/Contact/index";

const IndexPage = () => (
  <div>
    <MamaNiunika />
    <BookSection />
    <Copywriting />
    <Opisy />
    <Blog />
    <About />
    <Contact />
  </div>
)

export default IndexPage
