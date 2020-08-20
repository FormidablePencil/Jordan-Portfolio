import React, { useState } from 'react'
import { Modal, Grid, Typography, makeStyles, Button } from '@material-ui/core'
import { GridScreenHeight } from '../../styles/customMaterialUiComp'
import { useSpring } from 'react-spring';


const useStyles = makeStyles((theme) => ({
  temperaryBg: {
    backgroundColor: '#97BDFF'
  }
}));

function LandingScreenMobile() {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(true) //* to prevent this modal from showing up everytime on reloading we use a cookie to store modal closed
  const modalAnim = useSpring({
    to: {opacity: 1},
    from: {opacity: 1}
  })

  return (
    // {/* //~ set transitional animation on modal */}
    <Modal open={isModalOpen}> 
      <GridScreenHeight container alignItems='center' justify='center' className={classes.temperaryBg}>
        <Grid item>
          <Typography align='center' variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo quod sequi consequatur voluptate ut ipsa adipisci iste a, omnis </Typography>
        </Grid>

        <Button variant='contained' color='primary' onClick={() => setIsModalOpen(false)}>
          Call to action
        </Button>
      </GridScreenHeight>
    </Modal>
  )
}

export default LandingScreenMobile
