import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

export default class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
    }
    this.expand = this.expand.bind(this)
  }

  expand() {
    if (!this.state.expanded) {
      this.setState({ expanded: true })
    } else {
      this.setState({ expanded: false })
    }
  }

  render() {
    if (!this.state.expanded) {
      return (
    <section className='card'>
      <h1>{this.props.title}</h1>
      <h2>{this.props.preview}</h2>
      <Link to={this.props.src}>Show More?</Link>
    </section>
)
    }
    return (
  <section className='full'>
    <h1>{this.props.title}</h1>
    <h2>{this.props.full}</h2>
    <p onClick={this.expand}>Show Less?</p>
  </section>
)
  }
}
