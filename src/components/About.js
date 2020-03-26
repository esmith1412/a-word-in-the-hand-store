import React from 'react'
import profile_pic from '../img/kerlene_profile.jpg'

// Connect with Me
import linked_in_logo from '../img/Logo-2C-66px-TM.png'
const proz_logo_cdn = 'https://cfcdn.proz.com/images/affiliates/proz_translation_workplace.gif'


export default function AboutUs() {
  return (
    <article className="container d-flex flex-column">
      {/* Introduction */}
      <section className="d-flex flex-column align-items-center">
        <h1>About Me</h1>
        <img
          className="img-fluid border shadow rounded-circle"
          src={profile_pic}
          alt="profile"
        />
        <p>
        My name is Kerlene Telesford; I'm the founder of A Word in the Hand, and have a passion for producing the best Spanish-to-English translations available, at an industry-competitive rate. I have a BA in Spanish for Translation from Andrews University (in Berrien Springs, Michigan), and since graduating in 2013, I've been actively gaining experience and competency in the art and science of translation. Feel free to get in touch with me on my various social media pages.
        </p>
      </section>

      {/* Connect with Me */}
      <section className="d-flex flex-column align-items-center">
        <h2>Connect with Me</h2>
        <section className="d-sm-flex justify-content-between">
          <a href="https://www.linkedin.com/in/kerlenet/">
            <img
              className="img-fluid"
              src={linked_in_logo}
              alt='LinkedIn logo'
            />
          </a>
          <a href="https://www.proz.com/translator/2265103">
            <img
              className="img-fluid"
              border="0"
              src={proz_logo_cdn}
              alt="Translators and translation resources"
            />
          </a>
        </section>
      </section>
    </article>
  )
}
