import React, { useState } from 'react'
import { Grid, Typography, makeStyles, Button } from '@material-ui/core'
import { GridScreenHeight } from '../../styles/customMaterialUiComp'
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  animatedModal: {
    position: "absolute",
    zIndex: 1000,
    backgroundImage: "url(../../assets/images/bgSect1.jpg)",
  },
  transparentBg: {
    backgroundColor: 'rgba(151,189,255,.0)',
  }
}));

function LandingScreenMobile() {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(true)
  //* to prevent this modal from showing up everytime on reloading we use a cookie to store modal closed
  const opacityModalAnim = useSpring({
    to: isModalOpen ? { transform: 'translateY(0vh)', display: 'block' }
      : async (next, cancel) => {
        await next({ transform: 'translateY(-100vh)', display: 'block' })
        await next({ transform: 'translateY(-100vh)', display: 'none' })
      },
    from: { transform: 'translateY(0vh)', display: 'block' }
  })

  return (
    <animated.div className={classes.animatedModal} style={opacityModalAnim}>
      <div className='mobileLandingScreen'>
        <GridScreenHeight container alignItems='center' justify='center'>
          <Grid item></Grid>
          <Grid item>
            <Typography align='center' variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo quod sequi consequatur voluptate ut ipsa adipisci iste a, omnis </Typography>
          </Grid>

          <Button variant='contained' color='primary' onClick={() => setIsModalOpen(false)}>
            Call to action
          </Button>
        </GridScreenHeight>
      </div>
    </animated.div>
  )
}

export default LandingScreenMobile
