import React, { useState } from 'react'
import { Grid, Typography, makeStyles, Button, Container, TextareaAutosize } from '@material-ui/core'
import { updateContent } from '../actions/fetching';
import Login from '../components/cms/Login';
import { GridFlex } from '../styles/customMaterialUiComp';
import ContentSection from '../components/cms/ContentSection';
import BioAndContacts from '../components/cms/BioAndContacts';
import TechStackCms from '../components/cms/TechStackCms';
import useModifyContent from '../hooks/useModifyContent';
import { CustomCmsTextField } from '../components/cms/CmsTextFields';

export const Captions = ({ input1, input2, input3 }: { input1, input2, input3?: string }) => {
  const classes = useStyles();
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

function Cms() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [controlledAuth, setControlledAuth] = useState({ username: '', password: '' })
  const classes = useStyles();

  const {
    onChangeValue, newAdditionOnClick,
    portfolioDataChanged, setPortfolioDataChanged,
    setPortfolioData, portfolioData
  } = useModifyContent()


  const loggedIn = (boolean) => setIsLoggedIn(boolean)
  const onClickSubmit = async () => {
    const updated = await updateContent(portfolioData, controlledAuth)
    if (updated)
      setPortfolioDataChanged(false)
    else
      setPortfolioDataChanged('err')
  }


  return (
    <Container>
      <Grid spacing={5} container direction='column' className={classes.cmsBackground}>

        {/* //*========= Authentication ===========*/}
        {/* //! take a look at this */}
        <Login
          setPortfolioData={setPortfolioData}
          loggedIn={loggedIn}
          controlledAuth={controlledAuth}
          setControlledAuth={setControlledAuth}
        />

        {/* //*========= Intro Section ===========*/}
        <CustomCmsTextField
          textfieldValue={portfolioData.tabSectionTitles[0].tabTitle}
          placeholder={''}
          typeOfInput={0}
          type='tabSectionTitles'
          index={null}
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

        {/* //*========= Tech Stack ===========*/}
        <CustomCmsTextField
          textfieldValue={portfolioData.tabSectionTitles[1].tabTitle}
          placeholder={''}
          typeOfInput={1}
          type='tabSectionTitles'
          index={null}
        />
        <TechStackCms />

        {/* //*========= Content Section ===========*/}
        <CustomCmsTextField
          textfieldValue={portfolioData.tabSectionTitles[2].tabTitle}
          placeholder={''}
          typeOfInput={2}
          type='tabSectionTitles'
          index={null}
        />
        <div style={{ marginLeft: '2em' }}>
          <ContentSection />
        </div>

        {/* //*========= Bio and Contacts ===========*/}
        <CustomCmsTextField
          textfieldValue={portfolioData.tabSectionTitles[3].tabTitle}
          placeholder={''}
          typeOfInput={3}
          type='tabSectionTitles'
          index={null}
        />
        <div style={{ marginLeft: '2em' }}>
          <BioAndContacts classes={classes} />
        </div>

        {/* //*========= Flaoting Fab Btn ===========*/}
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
    width: '60em',
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

  caption: {
    color: '#1182B0'
  },
  largeCaption: {
    color: '#062F40',
    maxWidth: '10em',
    marginLeft: '.2em'
  },
  textAreaLarge: {
    width: '30em'
  },
  marginLeft: {
    marginLeft: '1em'
  }
}));
