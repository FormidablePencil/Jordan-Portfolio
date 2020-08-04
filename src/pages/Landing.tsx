import React, { useEffect, useState, useRef } from 'react'
import Intro from '../components/landing/Intro'
import DemoTech from '../components/landing/DemoTech'
import DemoProjects from '../components/landing/DemoProjects'
import Bio from '../components/landing/Bio'
import Contacts from '../components/landing/Contacts'
import Navbar from '../components/Navbar'

function Landing() {
  const [tabFixed, setTabFixed] = useState({ demoTech: false, demoProjects: false })
  const demoTechRef = useRef(null)
  const demoProjectsRef = useRef(null)
  const bioRef = useRef(null)
  const tabFixedTopOffset = 48 //send down

  useEffect(() => {
    window.addEventListener('scroll', () => onScroll())
    return () => window.removeEventListener('scroll', () => onScroll())
  }, [])

  const onScroll = () => {
    console.log(
      demoTechRef.current.getBoundingClientRect().top,
      // demoProjectsRef.current.getBoundingClientRect().top,
      // bioRef.current.getBoundingClientRect().top,
    )

    const toggleTabPositionOnScroll = (ref, variable) => {
      //@ts-ignore
      if (ref.current.getBoundingClientRect().top < 50) {
        setTabFixed(prev => ({ ...prev, [variable]: true }))
      } else {
        setTabFixed(prev => ({ ...prev, [variable]: false }))
      }
    }

    toggleTabPositionOnScroll(demoTechRef, 'demoTech')
    toggleTabPositionOnScroll(demoProjectsRef, 'demoProjects')
    // toggleTabPositionOnScroll(bioRef)
  }


  return (
    <div className='landing-page'>
      <Navbar />
      <Intro />
      <DemoTech
        secitonRef={demoTechRef}
        tabFixed={tabFixed.demoTech}
        tabFixedTopOffset={tabFixedTopOffset} />
      <DemoProjects
        secitonRef={demoProjectsRef}
        tabFixed={tabFixed.demoProjects}
        tabFixedTopOffset={tabFixedTopOffset} />
      {/* <Bio
        secitonRef={bioRef}
        tabFixed={tabFixed}
        tabFixedTopOffset={tabFixedTopOffset} /> */}
      <Contacts />
    </div>
  )
}

export default Landing
