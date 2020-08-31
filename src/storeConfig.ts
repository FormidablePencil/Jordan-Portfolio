import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import portfolioContentReducer from './reducers/portfolioContentReducer'
import { portfolioContentT } from './types/generic'
import cmsPortfolioContentReducer from './reducers/cmsPortfolioContentReducer'

export interface rootT {
  portfolioContent: portfolioContentT
  cmsPortfolioContent: portfolioContentT
}
const rootReducer = combineReducers<rootT>({
  portfolioContent: portfolioContentReducer,
  cmsPortfolioContent: cmsPortfolioContentReducer
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
