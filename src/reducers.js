import { combineReducers } from 'redux'
import trainingReducer from './redux/reducers/trainerReducer'


const rootReducer = combineReducers({
  trainer: trainingReducer
})

export default rootReducer