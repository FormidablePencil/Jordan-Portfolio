import React from 'react'
import { Grid } from '@material-ui/core'
import { CustomCmsTextField } from './CmsTextFields'
import { useSelector } from 'react-redux'
import { rootT } from '../../storeConfig'
import { Captions } from '../../pages/Cms';

function BioAndContacts({ classes }) {
  const type = 'tabSectionTitles'
  const subTypes = { bio: 'bio', contacts: 'contacts' }
  const { cmsPortfolioContent } = useSelector((state: rootT) => state)
  // const { onChangeValue, portfolioData } = useModifyContent()
  return (
    <>
      {/* //*========= Bio ===========*/}
      <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[3].subSections[0].tabTitle}
        placeholder=''
        additionalProp={0}
        typeOfInput={3}
        type={type}
        index
      />

      <Grid item className={classes.marginLeft}>
        <Captions input1='Title' input2='Paragraph' />
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.bio.title}
          placeholder='Title'
          typeOfInput='title'
          type={subTypes.bio}
          index={null}
        />
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.bio.paragraph}
          placeholder='Bio paragraph'
          typeOfInput='paragraph'
          type={subTypes.bio}
          index={null}
        />
      </Grid>


      {/* //*========= Contacts ===========*/}
      <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[3].subSections[1].tabTitle}
        placeholder={''}
        typeOfInput={3}
        additionalProp={1}
        type={type}
        index={null}
      />
      <Grid item container direction='column' className={classes.marginLeft}>
        <Grid item>
          <CustomCmsTextField
            textfieldValue={cmsPortfolioContent.contacts.email}
            placeholder='Email'
            typeOfInput='email'
            type={subTypes.bio}
            index={null}
          />
        </Grid>
        <Grid item>
          <CustomCmsTextField
            textfieldValue={cmsPortfolioContent.contacts.linkedin}
            placeholder='Linkedin'
            typeOfInput='linkedin'
            type={subTypes.bio}
            index={null}
          />
        </Grid>
        <Grid item>
          <CustomCmsTextField
            textfieldValue={cmsPortfolioContent.contacts.github}
            placeholder='Github'
            typeOfInput='github'
            type={subTypes.bio}
            index={null}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default BioAndContacts
