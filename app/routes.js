import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'

import LatestNews from './screens/LatestNews'
import TopNews from './screens/TopNews'
import Story from './screens/Story'
import TabBarButton from './components/TabBarButton'

const RouterWithRedux = connect()(Router)

const TopNewsIcon = () => <TabBarButton title="Top" icon="fire"/>
const LatestNewsIcon = () => <TabBarButton title="Latest" icon="calendar"/>

const Routes = () => (
  <RouterWithRedux sceneStyle={styles.scenes}>
    <Scene key="root">
      <Scene key="main" tabs={true} tabBarStyle={styles.tabBar}>
        <Scene key="topNews"
          initial={true}
          component={TopNews}
          title="Top News"
          icon={TopNewsIcon}
          />
        <Scene key="latestNews"
          component={LatestNews}
          title="Latest News"
          icon={LatestNewsIcon}
          />
      </Scene>
      <Scene key="story"
        component={Story}
        title="Story"
        hide={true}
        />
    </Scene>
  </RouterWithRedux>
)

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#e9e9ef',
    borderTopWidth: 1,
    borderColor: '#8a8a8a',
  },
  scenes: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default Routes
