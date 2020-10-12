import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'
import { rootT } from '../../storeConfig';

function TechPage() {
  const classes = useStyles();
  const { moreTech } = useSelector((state: rootT) => state.portfolioContent)
  console.log(moreTech);

  return (
    <Container className={classes.container}>
      <Grid container direction='row'>
        {moreTech.map(tech =>
          <Grid item container justify='center' xs={4}
            className={classes.gridVerticalMargins}
            key={tech.icon}
          >
            <img className={classes.techImg} src={tech.icon} alt={tech.alt} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  gridVerticalMargins: {
    margin: '3em 0 3em 0',
  },
  techImg: {
    height: '7em',
    width: '7em',
  }
}));

export default TechPage
