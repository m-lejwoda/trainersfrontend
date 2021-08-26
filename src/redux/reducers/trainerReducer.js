import {GET_ALL_TRANSFORMATIONS, GET_PACKAGES, GET_THREETRANSFORMATIONS, GET_TRAINERS,ADD_EVENT_TO_PLAN} from '../types'

const initialState = {
  trainers: [],
  packages: [],
  threetransformations: [],
  loadedtrainers: false,
  alltransformations: [],
  next: '',
  previous: ''
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
    case GET_THREETRANSFORMATIONS:
      return{
        ...state,
        threetransformations: action.payload
      }
    case GET_ALL_TRANSFORMATIONS: 
      let newArr = state.alltransformations.concat(action.payload.results);
      return{
        ...state,
        // alltransformations: [...state.alltransformations,action.payload.results],
        alltransformations: newArr,
        next:action.next,
        previous:action.previous
      }
    case ADD_EVENT_TO_PLAN:
      return{
        ...state
      }
    
    default:
      return state
  }
}

export default trainingReducer