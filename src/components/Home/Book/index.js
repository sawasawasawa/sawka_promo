import React from 'react'
import BookElement from "./BookElement.js";
import {BookDescription} from "./BookDescription";
import './index.css'

export const BookSection = () => (
  <section id='book'>
    <BookDescription />
    <BookElement />
  </section>
)

export default BookSection