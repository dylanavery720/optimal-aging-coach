import React from 'react'
import { Router, Route, Link } from 'react-router';

export default class Humility extends React.Component {

  render() {
    return (
    <header>
      <h1 id="logo">Optimal Aging Coach</h1>
      <nav>
        <Link to="/articles">Heart</Link>
        <a href="#">Humor</a>
        <a href="#">Humility</a>
        <a href="#">Hire Me</a>
      </nav>
    </header>
)
  }

}
