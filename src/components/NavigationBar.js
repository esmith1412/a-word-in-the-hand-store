import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'


export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-danger">
      {/* TODO: Find an icon */}
      <img
        className="navbar-brand" src={logo} alt="logo" height="75" width="75"
      />
      <section class="navbar-nav">
        <Link to="/" class="nav-item nav-link text-warning">Home</Link>
        <Link to="/about" class="nav-item nav-link text-warning">About</Link>
      </section>
    </nav>
  )
}
