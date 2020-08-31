import React, { useState, useEffect } from 'react'
import { Grid, Input, Button, makeStyles } from '@material-ui/core';
import { fetchContentData } from '../../actions/fetching';

const Login = ({ loggedIn, controlledAuth, setControlledAuth, setPortfolioData }) => {
  const classes = useStyles();
  // eslint-disable-next-line 
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const onClickSubmit = async () => {
    const fetchedContent = await fetchContentData(controlledAuth)
    if (fetchedContent)
      if (fetchedContent.data)
        setPortfolioData(fetchedContent.data)
  }

  useEffect(() => {
    // console.log(controlledAuth);
    if (isAuthenticated) {
      loggedIn(true)
    }
  }, [isAuthenticated, loggedIn, controlledAuth])

  return (
    <Grid container spacing={3} className={classes.loginSection}>
      <Grid item>
        <Input value={controlledAuth.username} placeholder='username'
          onChange={(e) => setControlledAuth({ ...controlledAuth, username: e.target.value })} />
        <Input value={controlledAuth.password} placeholder='password' type='password'
          onChange={(e) => setControlledAuth({ ...controlledAuth, password: e.target.value })} />
      </Grid>
      <Grid item>
        <Button onClick={onClickSubmit}>Submit</Button>
      </Grid>
    </Grid>
  )
}

export default Login

const useStyles = makeStyles((theme) => ({
  loginSection: {
    borderRadius: '.2em',
    backgroundColor: '#D2D2D2',
    position: "fixed",
    right: 25,
    width: 300,
    top: 30,
  },
}));