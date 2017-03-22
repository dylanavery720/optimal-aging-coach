import React from 'react'
import { Router, Route, Link } from 'react-router';

export default class Humility extends React.Component {

  render() {
    return (
    <header>
      <Link to="/"><h1 id="logo">Optimal Aging Coach</h1></Link>
      <nav>
        <Link to="/articles">Heart</Link>
        <Link to="/articles">Humor</Link>
        <Link to="/articles">Humility</Link>
        <Link to="/articles">Hire Me</Link>
      </nav>
    </header>
)
  }

}
