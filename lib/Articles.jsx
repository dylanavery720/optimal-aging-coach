import React from 'react'
import Card from './Card'
import sweetsleep from './helpers/ArticleContent'

export default class Articles extends React.Component {

  render() {
    return (
    <article className='articles'>
      <h1 id='article' className='underlines'>ARTICLES</h1>
      <Card title='Sweet Sleep'
      preview='“Early to sleep
      and early to rise makes a man health, wealthy
      and wise.” says the 1735 edition of Poor
      Richards Almanack. Not surprisingly,
      it’s often attributed to Benjamin Franklin,
      who was 29 years old at the time.'
      full={sweetsleep} />
      <Card title='Access to Health Care – The PACE Program' preview='The goal of PACE is to be very patient-focused and manage well the complex medical, functional, and social needs of the frail elderly, thus keeping people in their homes for as long as possible, avoiding more expensive and often less desirable settings.'/>
    </article>
)
  }

}
