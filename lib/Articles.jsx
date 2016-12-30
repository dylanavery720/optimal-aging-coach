import React from 'react'
import Card from './Card'


export default class Articles extends React.Component {

  render() {
    return (
    <article className='articles'>
      <h1 className='underlines'>ARTICLES</h1>
      <Card title='Sweet Sleep' preview='“Early to sleep
      and early to rise makes a man health, wealthy
      and wise.” says the 1735 edition of Poor
      Richards Almanack. Not surprisingly,
      it’s often attributed to Benjamin Franklin,
      who was 29 years old at the time.' />
      <Card />
    </article>
)
  }

}
