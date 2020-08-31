import { SAVE_FETCH_CONTENT } from './constants'

const fetchContentAction = () => async dispatch => {
  const payloadFetch = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const res = await fetch('http://localhost:8080/getcontentdata', payloadFetch)
  const contentData = await res.json() //update content state
  console.log(contentData, 'contentData fetched')
  if (res.status === 200)
    dispatch({ type: SAVE_FETCH_CONTENT, payload: contentData.data })
}

export default fetchContentAction