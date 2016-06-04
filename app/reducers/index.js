import { combineReducers } from 'redux'

import { reducer as idleReducer } from 'redux-promises'
import { latestNews, topNews } from './news'
import { story } from './story'

const rootReducer = combineReducers({
  idle: idleReducer,
  latestNews,
  topNews,
  story,
})

export default rootReducer
