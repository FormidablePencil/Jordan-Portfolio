import React, { useEffect, useState, useRef } from 'react'
import { Grid, Typography, makeStyles, Button, Container, TextareaAutosize, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { updateContent } from '../actions/fetching';
import Login from '../components/cms/Login';
import { GridFlex } from '../styles/customMaterialUiComp';
import { portfolioContentT } from '../types/generic';
import { initialPortfolioContent, pfcDefaults } from '../reducers/portfolioContentReducer';
import ContentSection from '../components/cms/ContentSection';
import BioAndContacts from '../components/cms/BioAndContacts';

function Cms() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [controlledAuth, setControlledAuth] = useState({ username: '', password: '' })
  const [portfolioData, setPortfolioData] = useState<portfolioContentT>(initialPortfolioContent)
  const [portfolioDataChanged, setPortfolioDataChanged] = useState<boolean | 'err'>(false)
  const renderCount = useRef(0)
  useEffect(() => {
    if (renderCount.current === 1) //when page loads the state won't be toggled
      setPortfolioDataChanged(true)
    else renderCount.current = 1
  }, [portfolioData])

  const onChangeValue = ({ type, index, input, value, additionalProp }: {
    type, index, input, value, additionalProp?: number,
  }) => {
    let otherInput: string

    switch (type) {
      case 'tabSectionTitles':
        setPortfolioData(state => {
          const updatedState = [...state[type]] // So const is actually not immutable
          if (typeof additionalProp === 'number')
            updatedState[input].subSections[additionalProp].tabTitle = value
          else
            updatedState[input].tabTitle = value
          return { ...portfolioData, [type]: updatedState }
        })
        return
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
        [...portfolioData[type], pfcDefaults[type]]
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

  const Captions = ({ input1, input2, input3 }: { input1, input2, input3?: string }) => {
    const width = input3 ? { width: '40em' } : { width: '25em' }
    return (
      <GridFlex container item justify='space-around' style={width}>
        <Typography className={classes.caption} variant='caption'>{input1}</Typography>
        <Typography className={classes.caption} variant='caption'>{input2}</Typography>
        {input3 &&
          <Typography className={classes.caption} variant='caption'>{input3}</Typography>
        }
      </GridFlex>
    )
  }

  return (
    <Container>
      <Grid spacing={5} container direction='column' className={classes.cmsBackground}>

        <Login
          setPortfolioData={setPortfolioData}
          loggedIn={loggedIn}
          controlledAuth={controlledAuth}
          setControlledAuth={setControlledAuth}
        />

        <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[0].tabTitle}
          onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 0, value: e.target.value })}
        />
        <Grid item>
          <TextareaAutosize
            className={classes.textAreaLarge}
            rows={5}
            value={portfolioData.introParagraph}
            placeholder='Paragraph...'
            onChange={(e) => onChangeValue({
              type: 'introParagraph',
              index: null,
              input: 'paragraph',
              value: e.target.value,
            })} />
        </Grid>

        {/* <Typography className={classes.largeCaption} variant='body1'>Tech Stack:</Typography> */}
        <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[1].tabTitle}
          onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 1, value: e.target.value })}
        />
        <Grid item>
          <Captions input1='Tech icon URL' input2='Tech video URL' input3='Name of tech' />
          {portfolioData.tech.map((tec, index) =>
            <div key={index}>
              <div>
                <Typography variant='body1' display='inline' className={classes.index}>{index}</Typography>
                <TextField className={classes.textField} value={tec.icon} placeholder="tech icon URL"
                  onChange={(e) => onChangeValue({ type: 'tech', index, input: 'icon', value: e.target.value })} />
                <TextField className={classes.textField} value={tec.video} placeholder='tech video URL'
                  onChange={(e) => onChangeValue({ type: 'tech', index, input: 'video', value: e.target.value })} />
                <TextField className={classes.textField} value={tec.alt} placeholder='Name of tech'
                  onChange={(e) => onChangeValue({ type: 'tech', index, input: 'alt', value: e.target.value })} />
              </div>
              {index === portfolioData.tech.length - 1 &&
                <Button onClick={() => newAdditionOnClick('tech')}><AddIcon /></Button>}
            </div>
          )}
        </Grid>

        <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[2].tabTitle}
          onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 2, value: e.target.value })}
        />
        <div style={{ marginLeft: '2em' }}>
          <ContentSection
            classes={classes}
            newAdditionOnClick={newAdditionOnClick}
            onChangeValue={onChangeValue}
            Captions={Captions}
            portfolioData={portfolioData} />
        </div>

        <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[3].tabTitle}
          onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 3, value: e.target.value })}
        />
        <div style={{ marginLeft: '2em' }}>
          <BioAndContacts
            onClickSubmit={onClickSubmit}
            portfolioDataChanged={portfolioDataChanged}
            classes={classes}
            newAdditionOnClick={newAdditionOnClick}
            onChangeValue={onChangeValue}
            Captions={Captions}
            portfolioData={portfolioData} />
        </div>

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
    backgroundColor: '#E8E8E8',
    width: '50em',
    marginTop: '2em',
    marginBottom: '2em',
    padding: '.2em'
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
  },
  index: {
    marginRight: 10,
    marginTop: '.2em',
    display: 'inline-block'
  },
  caption: {
    color: '#1182B0'
  },
  largeCaption: {
    color: '#062F40',
    maxWidth: '10em',
    marginLeft: '.2em'
  },
  textField: {
    marginRight: '10px',
  },
  textAreaLarge: {
    width: '30em'
  },
  marginLeft: {
    marginLeft: '1em'
  }
}));
