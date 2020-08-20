import React from 'react'
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { GridFlex } from '../../styles/customMaterialUiComp';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  btn: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    width: '7em',
    height: '7em',
    [theme.breakpoints.up(500)]: {
      width: '10em',
      height: '10em',
    }
  }
}));

function Navigator() {
  const classes = useStyles();

  return (
    <Grid container justify='space-between' spacing={2} direction='row' wrap='nowrap'>
      <GridFlex item container justify='center'>
        <Link to='/tech-mobile'>
          <Button variant='contained' color='secondary' className={classes.btn}>
            <Typography variant='h6'>
              Exper tech at
            </Typography>
          </Button>
        </Link>
      </GridFlex>
      <GridFlex item container justify='center'>
        <Link to='/contacts-mobile'>
          <Button variant='contained' color='secondary' className={classes.btn}>
            <Typography variant='h6'>
              Contacts & what am about
            </Typography>
          </Button>
        </Link>
      </GridFlex>
      <GridFlex item container justify='center'>
        <Link to='/projects-mobile'>
          <Button variant='contained' color='secondary' className={classes.btn}>
            <Typography variant='h6'>
              Projects
            </Typography>
          </Button>
        </Link>
      </GridFlex>
    </Grid>
  )
}

export default Navigator
