import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'

import News from './screens/News'
import Story from './screens/Story'

const RouterWithRedux = connect()(Router)

const routes = [
  {
    key: 'news',
    component: News,
    title: 'Top Stories',
    initial: true
  },
  {
    key: 'story',
    component: Story,
    title: 'Story',
    hide: true,
  }
]

const Routes = () => (
  <RouterWithRedux sceneStyle={styles.scenes}>
    <Scene key="root">
      {routes.map(route => (
        <Scene {...route}/>
      ))}
    </Scene>
  </RouterWithRedux>
)

const styles = StyleSheet.create({
  scenes: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
})

export default Routes
