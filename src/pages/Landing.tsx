import React from 'react'
// import Intro from '../components/landing/Intro'
// import DemoTech from '../components/landing/DemoTech'
// import DemoProjects from '../components/landing/DemoProjects'
// import Bio from '../components/landing/Bio'
// import Contacts from '../components/landing/Contacts'
// import Navbar from '../components/Navbar'
// import { tabTitles } from '../assets/constants/staticData'
import MobileDisplay from '../components/MobileDisplay';
import LargerDisplay from '../components/LargerDisplay';
import { useMediaQuery } from '@material-ui/core';

function Landing() {
  const matches = useMediaQuery('(max-width:800px)');

  return (
    <>
      {matches ?
        <MobileDisplay />
        : <LargerDisplay />
      }
    </>
  )
}

export default Landing
