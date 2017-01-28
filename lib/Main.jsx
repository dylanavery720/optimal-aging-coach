import React, { Component } from 'react';
import Nav from './Nav'
import Hero from './Hero'
import Humor from './Humor'
import Humility from './Humility'
import Articles from './Articles'
import Footer from './Footer'
import reset from './css/reset'
import main from './css/main'


export default class Main extends React.Component {

  render() {
    return (
        <section>
        <Nav />
        <Hero />
        {/* <Articles /> */}
        {this.props.children}
        <Humor />
        <Humility />
        <Footer />
        </section>
    )
  }

}
