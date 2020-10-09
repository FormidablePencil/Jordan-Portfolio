import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';
import styled from 'styled-components';

function Intro() {
  const introParagraph = useSelector((state: rootT) => state.portfolioContent.introParagraph)
  return (
    <Container>
      <GridScreenHeight
        container
        justify='center' alignItems='center'
        spacing={2}>
        <Grid item xs={6}>
          <TypographyCustom variant='body2' align="center">
            {introParagraph}
          </TypographyCustom>
        </Grid>
      </GridScreenHeight>
    </Container>
  )
}

export default Intro

const TypographyCustom = styled(Typography)`
`