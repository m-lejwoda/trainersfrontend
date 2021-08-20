import {GET_PACKAGES, GET_TRAINERS} from '../types'

const initialState = {
  trainers: [],
  packages: [],
  loadedtrainers: false
}
const trainingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRAINERS:
      return {
        ...state,
        trainers: action.payload,
        loadedtrainers: true
      }
    case GET_PACKAGES:
      return {
        ...state,
        packages: action.payload
      }
    default:
      return state
  }
}

export default trainingReducer