import { SAVE_FETCH_CONTENT } from "../actions/constants"
import { initialPortfolioContent } from "./reducerProps"

export default (state = initialPortfolioContent, { type, payload }) => {
  switch (type) {

    case SAVE_FETCH_CONTENT:
      return payload

    default:
      return state
  }
}
