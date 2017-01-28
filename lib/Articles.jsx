import React from 'react'
import Card from './Card'
import SweetSleep from './helpers/SweetSleep'
import Pace from './helpers/Pace'

export default class Articles extends React.Component {

  render() {
    return (
    <article className='articles'>
      <h1 id='article' className='underlines'>ARTICLES</h1>
      {this.props.children}
      {!this.props.children && <div><Card title='Sweet Sleep'
      preview='“Early to sleep
      and early to rise makes a man health, wealthy
      and wise.” says the 1735 edition of Poor
      Richards Almanack. Not surprisingly,
      it’s often attributed to Benjamin Franklin,
      who was 29 years old at the time.' src="/sweetsleep"/>
      <Card title='Access to Health Care – The PACE Program' preview='The goal of PACE is to be very patient-focused and manage well the complex medical, functional, and social needs of the frail elderly, thus keeping people in their homes for as long as possible, avoiding more expensive and often less desirable settings.' src="/pace"/>
      <Card title='Lets have a conversation about aging' preview='The whole world is getting older. Japan is arguably the oldest country with almost 1 in 4 citizens over the age of 65. Monaco’s percentage is higher but the tiny principality doesn’t count as its numbers are skewed by retired rich folks from elsewhere. The U.S., with 13.3% of its people over the age of 65, doesn’t even make the top 10 list: We’re number eleven. More than 10,000 U.S. citizens turn 65 every day! ' src="/aging"/>
      <Card title='Medications' preview='Before I begin this discussion of medications, hospitals and doctors, I must beg your indulgence. When I tell someone I’m a gerontologist, more often than not there’s a blank look on their face. I’m not offended or put off by this. Gerontology is a science and a profession that most people don’t need to be familiar with.' src="/medications"/>
      </div>}
    </article>
)
  }

}
