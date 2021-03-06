import React from 'react'


export default function Quote() {
  return(
    <article className="container">
      <section className="row">
        {/* Empty Column */}
        <section className="col-3"/>

        <section className="col-6">
          <h2>How to get your fast, free quote:</h2>
          <ol>
            <li>Enter your email address.</li>
            <li>Upload the file you wish to translate.</li>
            <li>You'll receive a quote within the hour, along with the estimated time for completion.</li>
            <li>If the provided terms are agreeable, then you will promptly receive a PayPal invoice.</li>
            <li>After the invoice is paid, work will begin on your translation.</li>
            <li>
              You'll receive a copy of the translated file in your email.
            </li>
          </ol>
          <form name="upload" method="POST" enctype="multipart/form-data">
            {/* To allow Netlify to get the form data*/}
            <input type="hidden" name="form-name" value="upload" />

            <section class="form-group">
              <label for="email-address">Email Address</label>
              <input
                type="email"
                class="form-control"
                name="email-address"
                aria-describedby="email-help"
              />
            </section>
            <section class="form-group">
              <label for="file-upload">File to be Translated</label>
              <input type="file" class="form-control-file" name="file-upload"/>
            </section>
            <button type="submit" class="btn btn-danger text-warning">
              Get Quote
            </button>
          </form>
          <small id="email-help" class="form-text text-muted">
            Any information or files you provide are protected by our Privacy Policy, and will <i>never</i> be shared with anyone else.
          </small>
        </section>

        {/* Empty Column */}
        <section className="col-3"/>
      </section>
    </article>
  )
}
