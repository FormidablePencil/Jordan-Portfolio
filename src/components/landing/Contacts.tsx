import React from 'react'
// import { contacts } from '../../constants/staticData'
import { Grid, Input, Button, Container, TextareaAutosize, makeStyles, Typography } from '@material-ui/core'
import { GridScreenHeight, GridFlex } from '../../styles/customMaterialUiComp'
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';

const useStyles = makeStyles((theme) => ({
  paddingVertical: {
    padding: '2em 0 2em 0 ',
  },
  inputStyles: {
    margin: '.4em',
    flex: 1
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
  const { contacts } = useSelector((state: rootT) => state.portfolioContent)

  const classes = useStyles();

  return (
    <Container>
      <GridScreenHeight
        className={classes.paddingVertical}
        container direction='column' alignItems='center' justify='space-around' wrap='nowrap'>

        <Grid className={classes.compensateForBtnOverSection}
          item container direction='column' justify='center'>

          {/* //~ ==== links ==== */}
          <Grid item container spacing={3} justify='center' alignItems='center'>
            <Grid item container xs={1}>
              <Typography className={classes.fixedHeightContactTitle} variant='h6' color='textPrimary'>Email:</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' color='textPrimary'>sdsddsdsdsdsdsdddsddd{contacts.email}</Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={3} justify='center' alignItems='center'>
            <Grid item container xs={1}>
              <Typography className={classes.fixedHeightContactTitle} variant='h6' color='textPrimary'>Github:</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' color='textPrimary'>sdsddsdsdsdsdsdddsddd{contacts.github}</Typography>
            </Grid>

          </Grid>

          {/* //~ ==== message section ==== */}
          <div style={{ height: '5em' }} />
          <Grid item container direction='column'>
            <Grid item container direction='column'>
              <GridFlex item container>
                <Input className={classes.inputStyles} placeholder='Name' />
              </GridFlex>
              <GridFlex item container>
                <Input className={classes.inputStyles} placeholder='Email' />
              </GridFlex>
            </Grid>
            <TextareaAutosize className={classes.textAreaMargin} rows='6' />
            <Grid item container justify='flex-end'>
              <Button className={classes.btnSubmit} disableElevation variant='contained'>Submit</Button>
            </Grid>
          </Grid>

          {/* <Grid item container justify='center'>
          <Typography variant='h4' color='textPrimary'>or</Typography>
        </Grid> */}

          {/* <Button className={classes.btnEmail} disableElevation variant='contained'>Redirect to email</Button> */}
        </Grid>
      </GridScreenHeight>
    </Container>
  )
}

export default Contacts
