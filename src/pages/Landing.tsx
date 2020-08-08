import React, { useEffect, useState, useRef } from 'react'
import Intro from '../components/landing/Intro'
import DemoTech from '../components/landing/DemoTech'
import DemoProjects from '../components/landing/DemoProjects'
import Bio from '../components/landing/Bio'
import Contacts from '../components/landing/Contacts'
import Navbar from '../components/Navbar'
import { tabTitles } from '../assets/constants/staticData'

function Landing() {
  const [tabFixed, setTabFixed] = useState({
    demoTech: false,
    demoProjects: false,
    intro: false,
    bio: false,
    contacts: false
  })
  const reff = useRef({
    demoTech: false,
    demoProjects: false,
    intro: false,
    bio: false,
    contacts: false
  })
  const introRef = useRef(null)
  const demoTechRef = useRef(null)
  const demoProjectsRef = useRef(null)
  const bioRef = useRef(null)
  const contactsRef = useRef(null)

  const tabFixedTopOffset = 42 //send down

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line 
  }, [])

  const onScroll = () => {
    toggleTabPositionOnScroll(demoTechRef, 'demoTech')
    toggleTabPositionOnScroll(demoProjectsRef, 'demoProjects')
    toggleTabPositionOnScroll(bioRef, 'bio')
    toggleTabPositionOnScroll(contactsRef, 'contacts')
  }

  const toggleTabPositionOnScroll = (ref, variable) => { 
    if (ref.current.getBoundingClientRect().top < tabFixedTopOffset) {
      if (reff.current[variable] !== true) {// since changes done to useState doesn't seem to reflect in this funciton and just return the same value as before I implemented a little hack with ref to track when useState was changed by changing ref along with it. I didn't want setState to fire everytime and destroy the proformance of the app.
        reff.current = ({ ...reff.current, [variable]: true })
        setTabFixed(prev => ({ ...prev, [variable]: true }))
      }
    } else {
      if (reff.current[variable] !== false) {
        reff.current = ({ ...reff.current, [variable]: false })
        setTabFixed(prev => ({ ...prev, [variable]: false }))
      }
    }
  }

  //~ when tabs become fixed all elements within must become fixed too
  
  return (
    <div className='landing-page'>
      <Navbar />
      <Intro
        tabTitle={tabTitles[0]}
        sectionRef={introRef}
        tabFixed={false} //careful here because now the tab is not fixed anymore for intro which initially it was always fixed
        tabFixedTopOffset={tabFixedTopOffset} />
      <DemoTech
        tabTitle={tabTitles[1]}
        sectionRef={demoTechRef}
        tabFixed={tabFixed.demoTech}
        tabFixedTopOffset={tabFixedTopOffset} />
      <DemoProjects
        tabTitle={tabTitles[2]}
        sectionRef={demoProjectsRef}
        tabFixed={tabFixed.demoProjects}
        tabFixedTopOffset={tabFixedTopOffset} />
      <Bio
        tabTitle={tabTitles[3]}
        sectionRef={bioRef}
        tabFixed={tabFixed.bio}
        tabFixedTopOffset={tabFixedTopOffset} />
      <Contacts
        tabTitle={tabTitles[4]}
        sectionRef={contactsRef}
        tabFixed={tabFixed.contacts}
        tabFixedTopOffset={tabFixedTopOffset} />
    </div>
  )
}

export default Landing
