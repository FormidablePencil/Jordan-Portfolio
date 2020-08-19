import React from 'react'
import { contacts } from '../../constants/staticData'
import { Grid, Input, Button, Container, TextareaAutosize, makeStyles, Typography } from '@material-ui/core'
import { GridScreenHeight, GridFlex } from '../../styles/customMaterialUiComp'

const useStyles = makeStyles((theme) => ({
  paddingVertical: {
    padding: '2em 0 2em 0 ',
  },
  margin: {
    margin: '.4em'
  },
  textAreaMargin: {
    margin: '2em .4em 2em .4em'
  },
  btnSubmit: {
    margin: '0 .2em 0 .2em'
  },
  btnEmail: {
    margin: '1em'
  },
  compensateForBtnOverSection: {
    marginTop: '2em'
  },
  fixedHeightContactTitle: {
    width: '3em',
  }
}));

function Contacts() {
  const classes = useStyles();
  //sectionheight of it's own.

  return (
    <Container>
      <GridScreenHeight
        className={classes.paddingVertical}
        container direction='column' alignItems='center' justify='space-evenly' wrap='nowrap'>
        <Grid item container direction='column'>
          <Input className={classes.margin} placeholder='Name' />
          <Input className={classes.margin} placeholder='Email' />
          <TextareaAutosize className={classes.textAreaMargin} rows='6' />
          <Grid item container justify='flex-end'>
            <Button className={classes.btnSubmit} disableElevation variant='contained'>Submit</Button>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant='h4' color='textPrimary'>or</Typography>
        </Grid>

        <Grid className={classes.compensateForBtnOverSection}
          item container direction='column' alignItems='center' >
          <Grid item container alignItems='center' justify='center' spacing={3}>
            <GridFlex item container justify='flex-end'>
              <Typography className={classes.fixedHeightContactTitle} variant='h6' color='textPrimary'>Email:</Typography>
            </GridFlex>
            <GridFlex item>
              <Typography variant='body1' color='textPrimary'>{contacts.email}</Typography>
            </GridFlex>
          </Grid>
          <Grid item container alignItems='center' justify='center' spacing={3}>
            <GridFlex item container justify='flex-end'>
              <Typography className={classes.fixedHeightContactTitle} variant='h6' color='textPrimary'>Github:</Typography>
            </GridFlex>
            <GridFlex item>
              <Typography variant='body1' color='textPrimary'>{contacts.github}</Typography>
            </GridFlex>
          </Grid>
          <Button className={classes.btnEmail} disableElevation variant='contained'>Redirect to email</Button>
        </Grid>
      </GridScreenHeight>
    </Container>
  )
}

export default Contacts
