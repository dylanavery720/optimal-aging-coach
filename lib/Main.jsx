import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav'
import Hero from './Hero'
import Humor from './Humor'
import Humility from './Humility'
import Articles from './Articles'
import Footer from './Footer'

export default class Main extends React.Component {

  render() {
    return (
        <section>
        <Nav />
        <Hero />
        <Articles />
        <Humor />
        <Humility />
        <Footer />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
