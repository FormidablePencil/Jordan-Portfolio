import React from 'react'
import { TextField, Grid, Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

function ContentSection({ portfolioData, onChangeValue, Captions, newAdditionOnClick, classes }) {
  // const classes = useStyles()
  return (
    <>
      <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[2].subSections[0].tabTitle}
        onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 2, additionalProp: 0, value: e.target.value })}
      />
      <Grid item>
        <Captions input1='Tech icon URL' input2='Name of tech' />
        {portfolioData.moreTech.map((tec, index) =>
          <div key={index}>
            <div>
              <Typography variant='body1' display='inline' className={classes.index}>{index}</Typography>
              <TextField className={classes.textField} value={tec.icon} placeholder='Tech icon URL'
                onChange={(e) => onChangeValue({ type: 'moreTech', index, input: 'icon', value: e.target.value })} />
              <TextField className={classes.textField} value={tec.alt} placeholder='Name of tech'
                onChange={(e) => onChangeValue({ type: 'moreTech', index, input: 'alt', value: e.target.value })} />
            </div>
            {index === portfolioData.moreTech.length - 1 &&
              <Button onClick={() => newAdditionOnClick('moreTech')}><AddIcon /></Button>}
          </div>
        )}
      </Grid>

      <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[2].subSections[1].tabTitle}
        onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 2, additionalProp: 1, value: e.target.value })}
      />
      <Grid item className={classes.marginLeft}>
        <Captions input1='Image URL' input2='Title URL' />
        {portfolioData.photoshop.map((image, index) =>
          <div key={index}>
            <div>
              <Typography variant='body1' display='inline' className={classes.index}>{index}</Typography>
              <TextField className={classes.textField} value={image.url} placeholder='Image URL'
                onChange={(e) => onChangeValue({ type: 'photoshop', index, input: 'url', value: e.target.value })} />
              <TextField className={classes.textField} value={image.alt} placeholder='Title URL'
                onChange={(e) => onChangeValue({ type: 'photoshop', index, input: 'alt', value: e.target.value })} />
            </div>
            {index === portfolioData.photoshop.length - 1 &&
              <Button onClick={() => newAdditionOnClick('photoshop')}><AddIcon /></Button>}
          </div>
        )}
      </Grid>

      <TextField className={classes.largeCaption} value={portfolioData.tabSectionTitles[2].subSections[2].tabTitle}
        onChange={(e) => onChangeValue({ type: 'tabSectionTitles', index: null, input: 2, additionalProp: 2, value: e.target.value })}
      />
      <Grid item>
        <Captions input1='Tech icon URL' input2='Title' />
        {portfolioData.videoProjects.map((image, index) =>
          <div key={index}>
            <div>
              <Typography variant='body1' display='inline' className={classes.index}>{index}</Typography>
              <TextField className={classes.textField} value={image.url} placeholder='Tech icon URL'
                onChange={(e) => onChangeValue({ type: 'videoProjects', index, input: 'url', value: e.target.value })} />
              <TextField className={classes.textField} value={image.alt} placeholder='Title'
                onChange={(e) => onChangeValue({ type: 'videoProjects', index, input: 'alt', value: e.target.value })} />
            </div>
            {index === portfolioData.videoProjects.length - 1 &&
              <Button onClick={() => newAdditionOnClick('videoProjects')}><AddIcon /></Button>}
          </div>
        )}
      </Grid>

    </>
  )
}

export default ContentSection


// const useStyles = makeStyles((theme) => ({
//   cmsBackground: {
//     backgroundColor: '#E8E8E8',
//     width: '50em',
//     marginTop: '2em',
//     marginBottom: '2em',
//     padding: '.2em'
//   },
//   saveContentBtn: {
//     backgroundColor: 'green',
//     position: "fixed",
//     bottom: '1em',
//     right: '1em',
//   },
//   saveContentBtnStandby: {
//     backgroundColor: 'grey',
//     position: "fixed",
//     bottom: '1em',
//     right: '1em',
//   },
//   saveContentBtnErr: {
//     backgroundColor: 'yellow',
//     position: "fixed",
//     bottom: '1em',
//     right: '1em',
//   },
//   index: {
//     marginRight: 10,
//     marginTop: '.2em',
//     display: 'inline-block'
//   },
//   caption: {
//     color: '#1182B0'
//   },
//   largeCaption: {
//     color: '#062F40',
//     maxWidth: '10em',
//     marginLeft: '.2em'
//   },
//   textField: {
//     marginRight: '10px',
//   },
//   textAreaLarge: {
//     width: '30em'
//   }
// }));
