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
        <Button className={classes.btn}>
          <Link to='/tech-mobile'>
            <Typography variant='h6'>
              Exper tech at
            </Typography>
          </Link>
        </Button>
      </GridFlex>
      <GridFlex item container justify='center'>
        <Button className={classes.btn}>
          <Link to='/contacts-mobile'>
            <Typography variant='h6'>
              Contacts & what am about
            </Typography>
          </Link>
        </Button>
      </GridFlex>
      <GridFlex item container justify='center'>
        <Link to='/projects-mobile'>
          <Button className={classes.btn}>
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
