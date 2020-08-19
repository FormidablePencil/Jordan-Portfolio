import { demoTechContent } from "./constants/staticData"

const { innerWidth } = window

export const isMobileScreenDimensions = () => {
  if (innerWidth < 801) return true
  else return false
}

export const calcIconZoomAndMargin = (index): { scale, marginLeft, marginRight } => {
  let scale = 'scale(1.3)'
  let marginLeft = '1em'
  let marginRight = '1em'
  switch (true) {
    case demoTechContent.length === 2:
      marginLeft = '2em'
      marginRight = '2em'
      break;
    case demoTechContent.length === 3:
      if (index === 0 || index === 2) {
        scale = 'scale(1)'
        marginLeft = '.3em'
        marginRight = '.3em'
      }
      break;
    case demoTechContent.length === 4:
      if (index === 0 || index === 3) {
        scale = 'scale(1)'
        marginLeft = '.3em'
        marginRight = '.3em'
      }
      break;

    default:
      break;
  }
  // if (demoTechContent.length === 2) {
  //   marginLeft = '2em'
  //   marginRight = '2em'
  // } if (demoTechContent.length === 3) {
  //   if (index === 0 || index === 2) {
  //     scale = 'scale(1)'
  //     marginLeft = '.3em'
  //     marginRight = '.3em'
  //   }
  // } else if (demoTechContent.length === 4) {
  //   if (index === 0 || index === 3) {
  //     scale = 'scale(1)'
  //     marginLeft = '.3em'
  //     marginRight = '.3em'
  //   }
  // }
  return { scale, marginLeft, marginRight }
}