import { combineReducers } from 'redux'

import { reducer as idleReducer } from 'redux-promises'
import { news } from './news'
import { story } from './story'

const rootReducer = combineReducers({
  idle: idleReducer,
  news,
  story,
})

export default rootReducer
