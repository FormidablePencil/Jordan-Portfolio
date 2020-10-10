import React from 'react'
// import { contacts } from '../../constants/staticData'
import { Grid, Container, makeStyles, Typography } from '@material-ui/core'
import { GridScreenHeight } from '../../styles/customMaterialUiComp'
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
          item container direction='column' style={{ width: 300 }}>

          {/* //~ ==== links ==== */}
          <Grid item container spacing={3} alignItems='center' wrap='nowrap'>
            <Grid item container xl={2}>
              <Typography className={classes.fixedHeightContactTitle} variant='h5' color='textSecondary'>Email:</Typography>
            </Grid>
            <Grid item container>
              <Typography variant='h5' color='textSecondary'>{contacts.email}</Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={3} alignItems='center' wrap='nowrap'>
            <Grid item container xl={2}>
              <Typography className={classes.fixedHeightContactTitle} variant='h5' color='textSecondary'>LinkedIn: </Typography>
            </Grid>
            <Grid item container>
              <Typography variant='h5' color='textSecondary'>{contacts.linkedin}</Typography>
            </Grid>
          </Grid>
          
          <Grid item container spacing={3} alignItems='center' wrap='nowrap'>
            <Grid item container xl={2}>
              <Typography className={classes.fixedHeightContactTitle} variant='h5' color='textSecondary'>Github: </Typography>
            </Grid>
            <Grid item container>
              <Typography variant='h5' color='textSecondary'>{contacts.github}</Typography>
            </Grid>
          </Grid>


          {/* //~ ==== message section ==== */}
          {/* <div style={{ height: '5em' }} />
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
          </Grid> */}

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
