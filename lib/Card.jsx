import React from 'react'


export default class Card extends React.Component {

  render() {
    return (
    <section className='card'>
      <h1>{this.props.title}</h1>
      <h2>{this.props.preview}</h2>
      <p>Show More?</p>
      <h2>{this.props.url}</h2>
      {/* SHOW NEXT 2? RIGHT LEFT BUTTONS */}
    </section>
)
  }
}
