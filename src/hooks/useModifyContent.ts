import { useRef, useEffect, useState } from "react"
import { pfcDefaults, initialPortfolioContent } from "../reducers/portfolioContentReducer"
import { portfolioContentT } from "../types/generic"
import { useDispatch } from "react-redux"
import { ON_CHANGE_VALUE } from "../actions/constants"

function useModifyContent() {
  const [portfolioDataChanged, setPortfolioDataChanged] = useState<boolean | 'err'>(false)

  const [portfolioData, setPortfolioData] = useState<portfolioContentT>(initialPortfolioContent)
  //~ create another reducer for cms in perticular

  const dispatch = useDispatch()

  const renderCount = useRef(0)
  useEffect(() => {
    if (renderCount.current === 1) //when page loads the state won't be toggled
      setPortfolioDataChanged(true)
    else renderCount.current = 1
  }, [portfolioData, setPortfolioDataChanged])

  const newAdditionOnClick = () => console.log('not ment to be hit')

  // console.log(portfolioData)

  // const deleteItemOnClick = ({ type, itemInArr }: { type, itemInArr }) => { //~ transform into redux reducer
  //   console.log(portfolioData)
  //   setPortfolioData(state => {
  //     console.log(state)
  //     const mutableState = [...state[type]]
  //     console.log(mutableState);
  //     let splicdUpdatedValue
  //     splicdUpdatedValue = mutableState.filter((item, index) => index !== itemInArr && item) //splice 
  //     return { ...state, [type]: splicdUpdatedValue }
  //   })
  // }


  const onChangeValue = (props) => dispatch({ type: ON_CHANGE_VALUE, payload: props })

  // const onChangeValue = ({ type, index, input, value, additionalProp }: { //~ transform into redux reducer
  //   type, index, input, value, additionalProp?: number,
  // }) => {
  //   let otherInput: string
  //   switch (type) { //! change to different name
  //     case 'tabSectionTitles':
  //       setPortfolioData(state => {
  //         const updatedState = [...state[type]] // So const is actually not immutable
  //         if (typeof additionalProp === 'number')
  //           updatedState[input].subSections[additionalProp].tabTitle = value
  //         else
  //           updatedState[input].tabTitle = value
  //         return { ...portfolioData, [type]: updatedState }
  //       })
  //       return
  //     case 'introParagraph':
  //       setPortfolioData({ ...portfolioData, [type]: value })
  //       return
  //     case 'contacts':
  //     case 'bio':
  //       setPortfolioData({ ...portfolioData, [type]: { ...portfolioData[type], [input]: value } })
  //       return
  //     case 'tech':
  //       if (input === 'icon') otherInput = 'video'
  //       else otherInput = 'icon'
  //       break;
  //     case 'moreTech':
  //       if (input === 'icon') otherInput = 'alt'
  //       else otherInput = 'icon'
  //       break;
  //     case 'photoshop':
  //     case 'videoProjects':
  //       if (input === 'url') otherInput = 'alt'
  //       else otherInput = 'url'
  //       break;

  //     default:
  //   }
  //   setPortfolioData(state => {
  //     let addedNew = [...portfolioData[type]]
  //     const newthing = { [otherInput]: portfolioData[type][index][otherInput], [input]: value }
  //     addedNew[index] = newthing
  //     return { ...state, [type]: addedNew }
  //   })
  // }

  return {
    onChangeValue, newAdditionOnClick,
    portfolioDataChanged, setPortfolioDataChanged,
    setPortfolioData, portfolioData
  }

}

export default useModifyContent
