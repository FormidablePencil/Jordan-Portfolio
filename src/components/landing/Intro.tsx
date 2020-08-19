import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
function Intro() {
  return (
    <Container>
      <GridScreenHeight
        container
        justify='center' alignItems='center'
        spacing={2}>
        <Grid item xs={6}>
          <Typography variant='body1' align="center">
            Lorem ipsum dolor sit amet consectetur
            ipsum quae nulla, at porro volupta
            ipsum quae nulla, at porro voluptas, corrupti cumque?
        </Typography>
        </Grid>
      </GridScreenHeight>
    </Container>
  )
}

export default Intro
