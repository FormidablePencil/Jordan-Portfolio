import React from 'react'
import { TextField, Grid } from '@material-ui/core'

function BioAndContacts({ portfolioData, onChangeValue, Captions, newAdditionOnClick, classes, portfolioDataChanged, onClickSubmit }) {
  return (
    <>
      <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[3].subSections[0].tabTitle}
        onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 3, additionalProp: 0, value: e.target.value })}
      />

      <Grid item className={classes.marginLeft}>
        <Captions input1='Title' input2='Paragraph' />
        <TextField className={classes.textField} value={portfolioData.bio.title} placeholder='Title'
          onChange={(e) => onChangeValue({ type: 'bio', index: null, input: 'title', value: e.target.value })} />
        <TextField className={classes.textField} value={portfolioData.bio.paragraph} placeholder='bio paragraph'
          onChange={(e) => onChangeValue({ type: 'bio', index: null, input: 'paragraph', value: e.target.value })} />
      </Grid>


      <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[3].subSections[1].tabTitle}
        onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 3, additionalProp: 1, value: e.target.value })}
      />

      <Grid item container direction='column' className={classes.marginLeft}>
        <Grid item>
          <TextField value={portfolioData.contacts.email} placeholder='Email:'
            onChange={(e) => onChangeValue({ type: 'contacts', index: null, input: 'email', value: e.target.value })} />
        </Grid>
        <Grid item>
          <TextField value={portfolioData.contacts.linkedin} placeholder='LinkedIn:'
            onChange={(e) => onChangeValue({ type: 'contacts', index: null, input: 'linkedin', value: e.target.value })} />
        </Grid>
        <Grid item>
          <TextField value={portfolioData.contacts.github} placeholder='GitHub:'
            onChange={(e) => onChangeValue({ type: 'contacts', index: null, input: 'github', value: e.target.value })} />
        </Grid>
      </Grid>
    </>
  )
}

export default BioAndContacts
