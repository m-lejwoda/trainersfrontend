import {GET_TRAINERS} from '../types'

const initialState = {
  trainers: [],
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
    default:
      return state
  }
}

export default trainingReducer