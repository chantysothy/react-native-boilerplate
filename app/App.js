import React from 'react'
import { Provider } from 'react-redux'

import EStyleSheet from 'react-native-extended-stylesheet'

// calculate styles
EStyleSheet.build()

import configureStore from './store/configureStore'

import Routes from './Routes'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Routes/>
  </Provider>
)

export default App
