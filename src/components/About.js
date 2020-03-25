import React from 'react'
import profile_pic from '../img/kerlene_profile.jpg'


export default function AboutUs() {
  return (
    <article className="container d-flex flex-column">
      {/* Introduction */}
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">About Me</h1>
        <img
          className="border shadow rounded-circle"
          width="250px"
          height="250px"
          src={profile_pic}
          alt="profile picture"
        />
        <p>
        My name is Kerlene Telesford; I'm the founder of A Word in the Hand, and have a passion for producing the best Spanish-to-English translations available, at an industry-competitive rate. I have a BA in Spanish for Translation from Andrews University (in Berrien Springs, Michigan), and since graduating in 2013, I've been actively gaining experience and competency in the art and science of translation. Feel free to peruse my work samples below, and get in touch with me on my various social media pages.
        </p>
      </section>

      {/* Video Samples */}
      <section id="video-container"></section>
    </article>
  )
}

/*article#about-container
    section#about-me-container.container

    section#video-container.container-fluid
        h2.text-center Video Translations
        //- Abuelas de luz - Anastasia García - TEDxBogotaMujeres
        section#videos.d-flex
            video.video(
                controls
                preload="metadata"
                height="auto"
                width="49%"
            )
                source(
                    src="https://cdn.glitch.com/5748f95c-6cac-4384-8a9f-d789b438cfcb%2FAbuelas%20de%20luz%20_%20Anastasia%20Garc%C3%ADa%20_%20TEDxBogotaMujeres-gKBj2o-PJ_0.mp4?1555615237571"
                    type="video/mp4"
                )
                track(
                    label="English"
                    kind="subtitles"
                    srclang="en"
                    src="/video/captions/Abuelas_de_luz.en.vtt"
                    default
                )
                | Sorry, your browser doesn't support embedded videos.

            //-- How to transform the "I" to "We"_Miriam Reyes_TEDxBurgos
            video.video(
                controls
                preload="metadata"
                height="auto"
                width="49%"
            )
                source(
                    src="https://cdn.glitch.com/5748f95c-6cac-4384-8a9f-d789b438cfcb%2FComo%20transformar%20el%20yo%20en%20nosotros%20-%20Miriam%20Reyes%20at%20TEDxBurgos-l81dmxj7up0.mp4?1555615364832"
                    type="video/mp4"
                )
                track(
                    label="English"
                    kind="subtitles"
                    srclang="en"
                    src="/video/captions/Como_transformar_y_el_nosotros.en.vtt"
                    default
                )
                | Sorry, your browser doesn't support embedded videos.

    section#article-container.container-fliud
        h2.text-center Article Translations
        section#article-images.justify-content-around.align-items-center
            //- Bocatics article translation
            a(href="http://www.bocatics.org/news/en/2017/01/17/0003/when-should-you-use-jpeg-gif-or-png-in-your-images")
                img.img-fluid.img-thumbnail(
                    src="https://cdn.glitch.com/5748f95c-6cac-4384-8a9f-d789b438cfcb%2FLogo-Iwith.png?1555615160352",
                    alt='permact thumbnail'
                )

            //- Permact Article
            a(href="http://permact.org/en/educacion-y-cultura/")
                img.img-fluid.img-thumbnail(
                    src="https://cdn.glitch.com/5748f95c-6cac-4384-8a9f-d789b438cfcb%2Fpermact_banner.jpg?1555615163860",
                    alt='boatics thumbnail'
                )

    hr
    section#connect-container.container-fluid
        h2.text-center Connect with Me
        section#connect-links
            //-- LinkedIn Profile link
            a(href="https://www.linkedin.com/in/kerlenet/")
                img(
                    src="https://cdn.glitch.com/5748f95c-6cac-4384-8a9f-d789b438cfcb%2FLogo-2C-66px-TM.png?1555616114536",
                    alt='LinkedIn'
                )
            //-- Proz.com Profile Link
            a(href="https://www.proz.com/translator/2265103")
                img(
                    border="0",
                    src="https://sslcdn.proz.com/images/affiliates/proz_translation_workplace.gif",
                    alt="Proz Translators and translation resources"
                )

*/
