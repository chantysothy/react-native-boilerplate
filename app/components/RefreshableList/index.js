import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const RefreshableList = ({ dataSource, renderRow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.refresh}>
        <Icon name="refresh" size={40}/>
      </View>
      <ListView
        dataSource={dataSource}
        contentContainerStyle={styles.list}
        renderRow={renderRow}
        />
    </View>
  )
}

RefreshableList.propTypes = {
  renderRow: PropTypes.func.isRequired,
  dataSource: PropTypes.object.isRequired,
}

export default RefreshableList
