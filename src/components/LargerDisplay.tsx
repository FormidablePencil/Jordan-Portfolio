import React from 'react'
import ScrollableTabsWrapper, { NavTabsWrapper } from './scrollable-tabs'
import Intro from './landing/Intro';
import DemoTech from './mobileComps/DemoTech';
import DemoProjects from './landing/DemoProjects';
import Contacts from './landing/Contacts';
import Profile from './mobileComps/Profile';
import { Container } from '@material-ui/core';

function LargerDisplay() {

  return (
    <ScrollableTabsWrapper
      heightOfTabs={35}>
      <NavTabsWrapper
        tabColor='white'
        bgImg={{ src: require('../assets/images/bgWhite.jpg'), alt: '' }}>
        <Intro />
      </NavTabsWrapper>
      <NavTabsWrapper
        tabColor='white'
        bgImg={{ src: require('../assets/images/bgWhite2.jpg'), alt: '' }}>
        <Container maxWidth='md' >
          <div style={{ height: '100vh' }}>
            <DemoTech />
          </div>
        </Container>
      </NavTabsWrapper>
      <NavTabsWrapper
        tabColor='white'
        bgImg={{ src: require('../assets/images//bgWhite3.jpg'), alt: '' }}>
        <div style={{ height: '100vh' }}>
          <DemoProjects />
        </div>
      </NavTabsWrapper>
      <NavTabsWrapper
        tabColor='white'
        bgImg={{ src: require('../assets/images/bgWhite4.jpg'), alt: '' }}>
        <Container maxWidth='md'>
          <Profile />
          <Contacts />
        </Container>
      </NavTabsWrapper>
    </ScrollableTabsWrapper>
  )
}

export default LargerDisplay
