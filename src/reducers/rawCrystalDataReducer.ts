import { FETCHED_PARALLAX_CRYSTAL_DATA } from "../actions/constants"
import { parallaxDefaults, crystalParallaxT } from "../constants/defaultRawCrystalData"

/* //! later on expose a default from crystalData */
const initialState: crystalParallaxT = parallaxDefaults

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_PARALLAX_CRYSTAL_DATA:
      return payload

    default:
      return state
  }
}
