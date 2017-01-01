import React from 'react'


export default class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
    }
    this.expand = this.expand.bind(this)
  }

  expand() {
    this.setState({ expanded: true })
  }

  render() {
    if (!this.state.expanded) {
      return (
    <section className='card'>
      <h1>{this.props.title}</h1>
      <h2>{this.props.preview}</h2>
      <p onClick={this.expand}>Show More?</p>
      <h2>{this.props.url}</h2>
      {/* SHOW NEXT 2? RIGHT LEFT BUTTONS */}
    </section>
)
    }
    return (
  <section className='card'>
    <h1>{this.props.title}</h1>
    <h2>{this.props.full}</h2>
    <p onClick={this.props.expand}>Show More?</p>
    <h2>{this.props.url}</h2>
    {/* SHOW NEXT 2? RIGHT LEFT BUTTONS */}
  </section>
)
  }
}
