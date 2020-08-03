import React from 'react'
import Intro from '../components/landing/Intro'
import DemoTech from '../components/landing/DemoTech'
import DemoProjects from '../components/landing/DemoProjects'
import Bio from '../components/landing/Bio'
import Contacts from '../components/landing/Contacts'

function Landing() {
  return (
    <div className='landing-page'>
      <Intro />
      <DemoTech />
      <DemoProjects />
      <Bio />
      <Contacts />
    </div>
  )
}

export default Landing
