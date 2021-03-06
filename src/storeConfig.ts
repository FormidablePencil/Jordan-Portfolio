import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { crystalParallaxT } from './constants/defaultRawCrystalData'
import rawCrystalDataReducer from './reducers/rawCrystalDataReducer'
import portfolioContentReducer from './reducers/portfolioContentReducer'
import { portfolioContentT } from './reducers/reducerProps'

//~ major thing we done was remove major cms props

export interface rootT {
  portfolioContent: portfolioContentT
  rawCrystalData: crystalParallaxT
}
const rootReducer = combineReducers<rootT>({
  portfolioContent: portfolioContentReducer,
  rawCrystalData: rawCrystalDataReducer,
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
