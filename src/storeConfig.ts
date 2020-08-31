import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import portfolioContentReducer from './reducers/portfolioContentReducer'
import { portfolioContentT } from './types/generic'

export interface rootT {
  portfolioContent: portfolioContentT
}
const rootReducer = combineReducers<rootT>({
  portfolioContent: portfolioContentReducer
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
