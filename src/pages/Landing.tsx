import React, { useEffect } from 'react'
// import Intro from '../components/landing/Intro'
// import DemoTech from '../components/landing/DemoTech'
// import DemoProjects from '../components/landing/DemoProjects'
// import Bio from '../components/landing/Bio'
// import Contacts from '../components/landing/Contacts'
// import Navbar from '../components/Navbar'
// import { tabTitles } from '../assets/constants/staticData'
import MobileDisplay from '../components/mobileComps/MobileDisplay';
import LargerDisplay from '../components/LargerDisplay';
import { useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import fetchContentAction from '../actions/fetchContentAction'

function Landing() {
  const matches = useMediaQuery('(max-width:800px)');
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchContentAction())
    // eslint-disable-next-line
  }, [])

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
