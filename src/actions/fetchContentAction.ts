import { parallaxDefaults } from '../constants/defaultRawCrystalData'
import { FETCHED_PARALLAX_CRYSTAL_DATA, SAVE_FETCH_CONTENT } from './constants'

const fetchContentAction = () => async dispatch => {
  const payloadFetch = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const resContentData = await fetch('https://jordan-portfolio-server.herokuapp.com/getcontentdata', payloadFetch)
  interface contentDataT { data: { cmsPortfolioContent, rawCrystalData } }
  const contentData: contentDataT = await resContentData.json() //update content state


  if (resContentData.status === 200) {
    dispatch({ type: SAVE_FETCH_CONTENT, payload: contentData.data.cmsPortfolioContent })
    dispatch({ type: FETCHED_PARALLAX_CRYSTAL_DATA, payload: contentData.data.rawCrystalData })
  }
}

export default fetchContentAction