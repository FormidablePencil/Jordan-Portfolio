import React from 'react'
import { Container } from '@material-ui/core'
import { GridScreenHeight, GridFlex } from '../../styles/customMaterialUiComp'
import Profile from './Profile';
import TechStack from './TechStack-mobile';
import { ContactInfo } from '../landing/Contacts';

function MobileHome() {
  return (
    <Container maxWidth='sm'>
      <GridScreenHeight container direction='column' alignItems='center' justify='center'>
        <GridFlex item container alignContent='flex-end' justify='center'>
          <Profile />
        </GridFlex>
        <GridFlex item container justify='center' alignItems='center'>
          <ContactInfo />
        </GridFlex>
        <GridFlex item container justify='flex-start'>
          <TechStack />
        </GridFlex>
        <div style={{ height: 100 }} />
      </GridScreenHeight>
    </Container>
  )
}

export default MobileHome
