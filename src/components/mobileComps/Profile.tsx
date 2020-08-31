import React from 'react'
import { Grid, Typography, Hidden, Container, makeStyles } from '@material-ui/core'
import { profile } from '../../constants/staticData';
import styled from 'styled-components';
import { GridFlex } from '../../styles/customMaterialUiComp';
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';

const RelativeProfileImgBox = styled.div`
  position: relative;
  border-radius: .4em;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
const ProfileImg = styled.img`
  object-fit: cover;
`
const AbsoluteFitler = styled.div`
  background: rgba(255,255,255,.8);
  position: absolute;
  top: 0;
`;

const useStyles = makeStyles((theme) => ({
  profileImg: {
    height: '18em',
    width: '12em',
    [theme.breakpoints.down('sm')]: {
      height: '10em',
      width: '7em',
    },
  },
  gridResponsiveHeight: {
    // height: '10em',
    // width: '7em',
    [theme.breakpoints.up(800)]: {
      height: theme.responsiveHeight.height,
    },
  }
}));


function Profile() {
  const { title, paragraph } = useSelector((state: rootT) => state.portfolioContent.bio)


  const classes = useStyles();
  const imgProps = {
    src: profile.src, //~ get from redux
    alt: 'profile',
    style: {
      objectPosition: profile.objectPosition,
      filter: profile.filter,
    }
  }
  return (
    <Container maxWidth='md'>
      <Grid className={classes.gridResponsiveHeight} container direction='row' wrap='nowrap' spacing={5} alignItems='center' justify='space-around'>
        <GridFlex item container direction='column' justify='center' spacing={1}>
          <Grid item container justify='center'>
            <Typography variant='h4' color='textPrimary'>{title}</Typography>
          </Grid>
          <Grid item container alignItems='center'>
            <Typography variant='body1' color='textPrimary' align='justify'>{paragraph}</Typography>
          </Grid>
        </GridFlex>
        <Hidden xsDown>
          <Grid item>
            <RelativeProfileImgBox
              className={classes.profileImg}
              style={imgProps.style}>
              <ProfileImg src={imgProps.src}
                className={classes.profileImg}
                style={imgProps.style}
                alt='' />
              <AbsoluteFitler className={classes.profileImg} />
            </RelativeProfileImgBox>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default Profile
