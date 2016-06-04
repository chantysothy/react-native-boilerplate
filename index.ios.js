import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import EStyleSheet from 'react-native-extended-stylesheet'

// calculate styles
EStyleSheet.build()

import configureStore from './app/store/configureStore'

import Routes from './app/routes'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <Routes/>
  </Provider>
)

AppRegistry.registerComponent('App', () => Root)
