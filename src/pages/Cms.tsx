import React, { useEffect, useState, useRef } from 'react'
import { Input, Grid, Typography, makeStyles, Button, Container } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { updateContent } from '../components/cms/fetching';
import Login from '../components/cms/Login';

function Cms() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [controlledAuth, setControlledAuth] = useState({ username: '', password: '' })

  const defaults = {
    introParagraph: '',
    videoProjects: { url: '', alt: '' },
    tech: { icon: '', video: '' },
    moreTech: { icon: '', alt: '' },
    photoshop: { url: '', alt: '' },
    bio: { title: '', paragraph: '' },
    contacts: { email: '', github: '', linkedin: '' },

  }
  const [portfolioData, setPortfolioData] = useState({
    introParagraph: defaults.introParagraph,
    videoProjects: [defaults.videoProjects],
    tech: [defaults.tech],
    moreTech: [defaults.moreTech],
    photoshop: [defaults.photoshop],
    bio: defaults.bio,
    contacts: defaults.contacts
  })
  const [portfolioDataChanged, setPortfolioDataChanged] = useState<boolean | 'err'>(false)

  const renderCount = useRef(0)
  useEffect(() => {
    if (renderCount.current === 1) //when page loads the state won't be toggled
      setPortfolioDataChanged(true)
    else renderCount.current = 1
  }, [portfolioData])

  const onChangeValue = ({ type, index, input, value }: {
    type, index, input, value, additionalProp?: string
  }) => {
    let otherInput: string

    switch (type) {
      case 'introParagraph':
        setPortfolioData({ ...portfolioData, [type]: value })
        return
      case 'contacts':
      case 'bio':
        setPortfolioData({ ...portfolioData, [type]: { ...portfolioData[type], [input]: value } })
        return
      case 'tech':
        if (input === 'icon') otherInput = 'video'
        else otherInput = 'icon'
        break;
      case 'moreTech':
        if (input === 'icon') otherInput = 'alt'
        else otherInput = 'icon'
        break;
      case 'photoshop':
      case 'videoProjects':
        if (input === 'url') otherInput = 'alt'
        else otherInput = 'url'
        break;

      default:
    }
    setPortfolioData(state => {
      let addedNew = [...portfolioData[type]]
      const newthing = { [otherInput]: portfolioData[type][index][otherInput], [input]: value }
      addedNew[index] = newthing
      return { ...state, [type]: addedNew }
    })
  }


  const newAdditionOnClick = (type) => {
    setPortfolioData({
      ...portfolioData, [type]:
        [...portfolioData[type], defaults[type]]
    })
  }



  const classes = useStyles();

  const loggedIn = (boolean) => setIsLoggedIn(boolean)
  const onClickSubmit = async () => {
    const updated = await updateContent(portfolioData, controlledAuth)
    if (updated)
      setPortfolioDataChanged(false)
    else
      setPortfolioDataChanged('err')

  }

  useEffect(() => {
    // (async () => {
    //   if (isLoggedIn) {
    //     // const fetched = await fetch('/http')
    //     // const { videoProjects, tech, mainTech, photoshop, bio } = fetched.json()
    //     //set all fetched data to state
    //   }
    // })()
  }, [isLoggedIn])

  return (
    <Container>
      <Grid spacing={5} container direction='column' className={classes.cmsBackground}>

        <Login
          setPortfolioData={setPortfolioData}
          loggedIn={loggedIn}
          controlledAuth={controlledAuth}
          setControlledAuth={setControlledAuth}
        />

        <Grid item>
          <Typography variant='body1'>Home Tab:</Typography>
          <Input
            value={portfolioData.introParagraph}
            placeholder='title...'
            onChange={(e) => onChangeValue({
              type: 'introParagraph',
              index: false,
              input: 'paragraph',
              value: e.target.value,
            })} />
        </Grid>

        <Typography variant='body1'>Tech Stack:</Typography>
        <Grid item>
          {portfolioData.tech.map((tec, index) =>
            <div key={index}>
              <div>
                <Typography variant='body1' display='inline' style={{ marginRight: 10 }}>{index}</Typography>
                <Input value={tec.icon} placeholder='image url'
                  onChange={(e) => onChangeValue({ type: 'tech', index, input: 'icon', value: e.target.value })} />
                <Input value={tec.video} placeholder='image description'
                  onChange={(e) => onChangeValue({ type: 'tech', index, input: 'video', value: e.target.value })} />
              </div>
              {index === portfolioData.tech.length - 1 &&
                <Button onClick={() => newAdditionOnClick('tech')}><AddIcon /></Button>}
            </div>
          )}
        </Grid>

        <Typography variant='body1'>Other exper Tech:</Typography>
        <Grid item>
          {portfolioData.moreTech.map((tec, index) =>
            <div key={index}>
              <div>
                <Typography variant='body1' display='inline' style={{ marginRight: 10 }}>{index}</Typography>
                <Input value={tec.icon} placeholder='image url'
                  onChange={(e) => onChangeValue({ type: 'moreTech', index, input: 'icon', value: e.target.value })} />
                <Input value={tec.alt} placeholder='image description'
                  onChange={(e) => onChangeValue({ type: 'moreTech', index, input: 'alt', value: e.target.value })} />
              </div>
              {index === portfolioData.moreTech.length - 1 &&
                <Button onClick={() => newAdditionOnClick('moreTech')}><AddIcon /></Button>}
            </div>
          )}
        </Grid>

        <Typography variant='body1'>Photoshop projects:</Typography>
        <Grid item>
          {portfolioData.photoshop.map((image, index) =>
            <div key={index}>
              <div>
                <Typography variant='body1' display='inline' style={{ marginRight: 10 }}>{index}</Typography>
                <Input value={image.url} placeholder='image url'
                  onChange={(e) => onChangeValue({ type: 'photoshop', index, input: 'url', value: e.target.value })} />
                <Input value={image.alt} placeholder='image description'
                  onChange={(e) => onChangeValue({ type: 'photoshop', index, input: 'alt', value: e.target.value })} />
              </div>
              {index === portfolioData.photoshop.length - 1 &&
                <Button onClick={() => newAdditionOnClick('photoshop')}><AddIcon /></Button>}
            </div>
          )}
        </Grid>

        <Typography variant='body1'>Video projects:</Typography>
        <Grid item>
          {portfolioData.videoProjects.map((image, index) =>
            <div key={index}>
              <div>
                <Typography variant='body1' display='inline' style={{ marginRight: 10 }}>{index}</Typography>
                <Input value={image.url} placeholder='image url'
                  onChange={(e) => onChangeValue({ type: 'videoProjects', index, input: 'url', value: e.target.value })} />
                <Input value={image.alt} placeholder='image description'
                  onChange={(e) => onChangeValue({ type: 'videoProjects', index, input: 'alt', value: e.target.value })} />
              </div>
              {index === portfolioData.videoProjects.length - 1 &&
                <Button onClick={() => newAdditionOnClick('videoProjects')}><AddIcon /></Button>}
            </div>
          )}
        </Grid>

        <Grid item>
          <Typography variant='body1'>Bio:</Typography>
          <Input value={portfolioData.bio.title} placeholder='bio title'
            onChange={(e) => onChangeValue({ type: 'videoProjects', index: false, input: 'title', value: e.target.value })} />
          <Input value={portfolioData.bio.paragraph} placeholder='bio paragraph'
            onChange={(e) => onChangeValue({ type: 'videoProjects', index: false, input: 'paragraph', value: e.target.value })} />
        </Grid>

        <Grid item container direction='column'>
          <Typography variant='body1'>Contacts:</Typography>
          <Input value={portfolioData.contacts.email} placeholder='Email:'
            onChange={(e) => onChangeValue({ type: 'contacts', index: false, input: 'email', value: e.target.value })} />
          <Input value={portfolioData.contacts.linkedin} placeholder='LinkedIn:'
            onChange={(e) => onChangeValue({ type: 'contacts', index: false, input: 'linkedin', value: e.target.value })} />
          <Input value={portfolioData.contacts.github} placeholder='GitHub:'
            onChange={(e) => onChangeValue({ type: 'contacts', index: false, input: 'github', value: e.target.value })} />
        </Grid>

        <Grid item>
          <Button className={
            portfolioDataChanged === 'err' ? classes.saveContentBtnErr
              : portfolioDataChanged ? classes.saveContentBtn
                : classes.saveContentBtnStandby
          }
            variant='contained'
            onClick={() => onClickSubmit()}
          >
            {portfolioDataChanged === 'err' ? '!' : portfolioDataChanged ? 'Save' : 'Saved'}
          </Button>
        </Grid>
      </Grid>
    </Container >
  )
}

export default Cms

const useStyles = makeStyles((theme) => ({
  cmsBackground: {
    backgroundColor: '#8B8B8B',
    width: '50em'
  },
  loginSection: {
    borderRadius: '.2em',
    backgroundColor: '#333333',
    position: "absolute",
    right: 25,
    width: 300,
    top: 30,
  },
  saveContentBtn: {
    backgroundColor: 'green',
    position: "fixed",
    bottom: '1em',
    right: '1em',
  },
  saveContentBtnStandby: {
    backgroundColor: 'grey',
    position: "fixed",
    bottom: '1em',
    right: '1em',
  },
  saveContentBtnErr: {
    backgroundColor: 'yellow',
    position: "fixed",
    bottom: '1em',
    right: '1em',
  }
}));
