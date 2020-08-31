import { ON_CHANGE_VALUE, DELETE_CERTAIN_PORTFOLIO_ITEM, NEW_ADDITION_TO_CMS_CONTENT } from "../actions/constants"
import { initialPortfolioContent } from "./portfolioContentReducer"
import cmsPortfolioModifiers from "../logic/cmsPortfolioModifiers"

export default (state = initialPortfolioContent, { type, payload }) => {
  switch (type) {

    case ON_CHANGE_VALUE:
      return cmsPortfolioModifiers.onChangeValue(payload, state)

    case DELETE_CERTAIN_PORTFOLIO_ITEM:
      return cmsPortfolioModifiers.deleteItemOnClick(payload, state)

    case NEW_ADDITION_TO_CMS_CONTENT:
      return cmsPortfolioModifiers.newAdditionOnClick(payload, state)

    default:
      return state
  }
}
