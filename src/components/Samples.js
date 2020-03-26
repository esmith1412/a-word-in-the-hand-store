import React from 'react'

// Translation Sample Videos
import abuelas_de_luz_vid from '../vid/Abuelas de luz _ Anastasia García _ TEDxBogotaMujeres-gKBj2o-PJ_0.mp4'
import abuelas_de_luz_subtitles from '../vid/captions/Abuelas de luz _ Anastasia García _ TEDxBogotaMujeres-gKBj2o-PJ_0.en.vtt'
// Translation Sample Video Subtitles
import how_to_transform_the_i_vid from '../vid/Como transformar el yo en nosotros - Miriam Reyes at TEDxBurgos-l81dmxj7up0.mp4'
import how_to_transform_the_i_subtitles from '../vid/captions/Como transformar el yo en nosotros - Miriam Reyes at TEDxBurgos-l81dmxj7up0.en.vtt'

// Translation Sample Articles
import boatics_logo from '../img/Logo-Iwith.png'
import permact_logo from '../img/permact_banner.jpg'


export default function WorkSamples() {
  return (
    <article className="container d-flex flex-column">
      {/* Video Translations */}
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
        <a
          className="hover-car"
          href="https://web.archive.org/web/20190405235827/http://www.bocatics.org/news/en/2017/01/17/0003/when-should-you-use-jpeg-gif-or-png-in-your-images"
        >
          <img src={boatics_logo} alt='boatics logo'/>
        </a>
        <a
          className="hover-car"
          href="https://web.archive.org/web/20170819111331/http://permact.org/en/educacion-y-cultura/"
        >
          <img src={permact_logo} alt='permact logo'/>
        </a>
      </section>
    </article>
  )
}
