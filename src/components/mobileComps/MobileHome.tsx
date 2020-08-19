import React from 'react'
import { Container } from '@material-ui/core'
import { GridScreenHeight, GridFlex } from '../../styles/customMaterialUiComp'
import Navigator from '../mobileComps/Navigator';
import Profile from './Profile';
import TechStack from './TechStack-mobile';

function MobileHome() {
  return (
    <Container maxWidth='sm'>
      <GridScreenHeight container direction='column' alignItems='center' justify='center'>
        <GridFlex item container alignContent='flex-end' justify='center'>
          <Profile />
        </GridFlex>
        <GridFlex item container alignItems='center' justify='center'>
          <Navigator />
        </GridFlex>
        <GridFlex item container justify='flex-start'>
          <TechStack />
        </GridFlex>
      </GridScreenHeight>
    </Container>
  )
}

export default MobileHome
