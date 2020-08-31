import React from 'react'
import { TextField, Typography, makeStyles } from '@material-ui/core'
import useModifyContent from '../../hooks/useModifyContent'
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';

interface arrOfTextFields {
  textfieldValue: string
  placeholder: string
  typeOfInput: string
  map?: Function
}
const CmsTextFields = ({ arrOfTextFields, index, type }: { arrOfTextFields: arrOfTextFields[], index, type }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='body1' display='inline' className={classes.index}>{index}</Typography>
      {arrOfTextFields.map((props: arrOfTextFields) =>
        <CustomCmsTextField
          textfieldValue={props.textfieldValue}
          placeholder={props.placeholder}
          typeOfInput={props.typeOfInput}
          type={type}
          index={index}
        />
      )}
    </>
  )
}


interface T { textfieldValue, placeholder, typeOfInput, additionalProp?: any, type, index }
export const CustomCmsTextField = ({ textfieldValue, placeholder, typeOfInput, additionalProp, type, index }: T) => {
  const classes = useStyles();
  const { onChangeValue } = useModifyContent()
  const { cmsPortfolioContent } = useSelector((state: rootT) => state)

  let value

  switch (type) {
    case 'tabSectionTitles':
      if (additionalProp || additionalProp === 0)
        value = cmsPortfolioContent[type][typeOfInput].subSections[additionalProp].tabTitle
      else
        value = cmsPortfolioContent[type][typeOfInput].tabTitle
      break;
    case 'introParagraph':
      value = cmsPortfolioContent[type]
      break
    case 'videoProjects':
    case 'tech':
      break
    case 'moreTech':
    case 'photoshop':
    case 'bio':
    case 'contacts':
      if (index === null)
        value = cmsPortfolioContent[type][typeOfInput]
      else
        value = cmsPortfolioContent[type][index][typeOfInput]
      break
    default:
      break;
  }

  return (
    <TextField className={classes.textField}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChangeValue({ type, index, input: typeOfInput, additionalProp, value: e.target.value })} />
  )
}

export default CmsTextFields


const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: '10px',
    maxWidth: '15em',
  },
  index: {
    marginRight: 10,
    marginTop: '.2em',
    display: 'inline-block'
  },
}));