import React, { useEffect, useState } from 'react'
import { BottomNavigationAction, BottomNavigation, makeStyles } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore';
import { useRouteMatch, useHistory } from 'react-router-dom';

function BottomNav() {
  const classes = useStyles();
  const { path } = useRouteMatch()
  const history = useHistory()
  const [navigationValue, setNavigationValue] = useState(1)

  useEffect(() => {
    if (path === '/') setNavigationValue(0)
    if (path === '/tech-mobile') setNavigationValue(1)
    if (path === '/contacts-mobile') setNavigationValue(2)
    if (path === '/projects-mobile') setNavigationValue(3)
  }, [path])

  const onChangeHandler = (event, newValue) => {
    if (newValue === 0) history.push('/')
    if (newValue === 1) history.push('/tech-mobile')
    if (newValue === 2) history.push('/contacts-mobile')
    if (newValue === 3) history.push('/projects-mobile')
    setNavigationValue(newValue);
  }

  return (
    <>
      <BottomNavigation
        value={navigationValue}
        onChange={onChangeHandler}
        showLabels
        className={classes.bottomNavigation}
      >
        <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Tech" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Contacts" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Projects" icon={<RestoreIcon />} />
      </BottomNavigation>
    </>
  )
}


const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100vw',
    background: 'rgba(0,0,0,.3)'
  }
}));

export default BottomNav
