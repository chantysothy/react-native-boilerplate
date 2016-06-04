import { createStore, applyMiddleware, compose } from 'redux'
import { createMiddleware } from 'redux-promises'
import rootReducer from '../reducers'

const promisesMiddleware = createMiddleware()
let middleware = [promisesMiddleware]

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
