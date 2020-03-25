import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  const this_year = new Date().getFullYear()

  return (
    <React.Fragment>
      <hr />
      <footer className="container-fluid d-sm-flex justify-content-sm-around align-items-sm-center">
        <section>
          &copy;{this_year} - A Word in the Hand
        </section>
        <section>
          <a href="mailto:admin@awordinthehand.net" className="text-danger">
            Contact Us
          </a>
        </section>
        <section>
          <Link to="/policy" className="text-danger">Privacy Policy</Link>
        </section>
        <section>
          <Link to="/terms" className="text-danger">
            Terms and Conditions
          </Link>
        </section>
      </footer>
    </React.Fragment>
  )
}
