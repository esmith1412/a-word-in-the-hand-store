import React from 'react'


export default class Default extends React.Component {
  render() {

    return (
      <article className="container">
        <section className="row">
          <section className="col-10 mx-auto text-center text-title pt-5">
            <h1 className="display-3">404 Error</h1>
            <h2>
              The following page was not found:{" "}
              <span>&quot;{this.props.location.pathname}&quot;.</span>
            </h2>
          </section>
        </section>
      </article>
    )
  }
}
