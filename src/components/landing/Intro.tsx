import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';

function Intro() {
  const introParagraph = useSelector((state: rootT) => state.portfolioContent.introParagraph)
  return (
    <Container>
      <GridScreenHeight
        container
        justify='center' alignItems='center'
        spacing={2}>
        <Grid item xs={6}>
          <Typography variant='body1' align="center">
            {introParagraph}
          </Typography>
        </Grid>
      </GridScreenHeight>
    </Container>
  )
}

export default Intro
