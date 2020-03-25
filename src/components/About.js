import React from 'react'
import profile_pic from '../img/kerlene_profile.jpg'

// Translation Sample Videos
import abuelas_de_luz_vid from '../vid/Abuelas de luz _ Anastasia García _ TEDxBogotaMujeres-gKBj2o-PJ_0.mp4'
import abuelas_de_luz_subtitles from '../vid/captions/Abuelas de luz _ Anastasia García _ TEDxBogotaMujeres-gKBj2o-PJ_0.en.vtt'

import how_to_transform_the_i_vid from '../vid/Como transformar el yo en nosotros - Miriam Reyes at TEDxBurgos-l81dmxj7up0.mp4'
import how_to_transform_the_i_subtitles from '../vid/captions/Como transformar el yo en nosotros - Miriam Reyes at TEDxBurgos-l81dmxj7up0.en.vtt'

// Translation Sample Articles
import boatics_logo from '../img/Logo-Iwith.png'
import permact_logo from '../img/permact_banner.jpg'

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
        My name is Kerlene Telesford; I'm the founder of A Word in the Hand, and have a passion for producing the best Spanish-to-English translations available, at an industry-competitive rate. I have a BA in Spanish for Translation from Andrews University (in Berrien Springs, Michigan), and since graduating in 2013, I've been actively gaining experience and competency in the art and science of translation. Feel free to peruse my work samples below, and get in touch with me on my various social media pages.
        </p>
      </section>

      {/* Video Samples */}
      <section className="d-flex flex-column align-items-center">
        <h2>Video Translations</h2>
        {/* Abuelas de luz - Anastasia García - TEDxBogotaMujeres */}
        <section>
          <video
            className="video"
            controls
            preload="metadata"
            height="auto"
            width="auto"
          >
            <source src={abuelas_de_luz_vid} type="video/mp4"/>
            <track
              label="English"
              kind="subtitles"
              srclang="en"
              src={abuelas_de_luz_subtitles}
              default
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </section>
        {/* How to transform the "I" to "We"_Miriam Reyes_TEDxBurgos */}
        <section>
          <video
            className="video"
            controls
            preload="metadata"
            height="auto"
            width="auto"
          >
            <source src={how_to_transform_the_i_vid} type="video/mp4"/>
            <track
              label="English"
              kind="subtitles"
              srclang="en"
              src={how_to_transform_the_i_subtitles}
              default
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </section>
      </section>

      {/* Article Translations */}
      <section className="d-flex flex-column justify-content-around align-items-center">
        <h2>Article Translations</h2>
        <a href="http://www.bocatics.org/news/en/2017/01/17/0003/when-should-you-use-jpeg-gif-or-png-in-your-images">
          <img src={boatics_logo} alt='boatics logo'/>
        </a>
        <a href="http://permact.org/en/educacion-y-cultura/">
          <img src={permact_logo} alt='permact logo'/>
        </a>
      </section>

      {/* Connect with Me */}
      <section className="d-flex flex-column align-items-center">
        <h2>Connect with Me</h2>
        <section className="d-flex flex-row justify-content-between">
          <a href="https://www.linkedin.com/in/kerlenet/">
            <img src={linked_in_logo} alt='LinkedIn logo'/>
          </a>
          <a href="https://www.proz.com/translator/2265103">
            <img
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
