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
      and wise.”' src="/sweetsleep"/>
      <Card title='Access to Health Care – The PACE Program' preview='The goal of PACE is to be very patient-focused and manage well the complex medical, functional, and social needs of the frail elderly' src="/pace"/>
      <Card title='Lets have a conversation about aging' preview='The whole world is getting older. Japan is arguably the oldest country with almost 1 in 4 citizens over the age of 65.' src="/aging"/>
      <Card title='Medications' preview='Before I begin this discussion of medications, hospitals and doctors, I must beg your indulgence.' src="/medications"/>
      </div>}
    </article>
)
  }

}
