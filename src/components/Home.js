import React from 'react'
import { Link } from 'react-router-dom'
import background_img from '../img/book-stack-2794002_1920.jpg'


export default function Home() {
  return (
    <article class="jumbotron-container jumbotron">
      <img src={background_img} alt="Spanish book" />
      <section>
        <h1 class="display-4">Welcome to A Word in the Hand!</h1>
        <p class="lead">
          This is your home for affordable and accurate Spanish to English translations.
        </p>
        <hr class="my-hr my-4" />
        <p>
          If you wish to learn more about our company, you can click the button below, or <a href="mailto:admin@awordinthehand.net">contact us</a>:
        </p>
        <Link to="/about">
          <button class="btn btn-lg bg-danger text-warning">Learn More</button>
        </Link>
      </section>
    </article>
  )
}
