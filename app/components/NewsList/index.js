import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const NewsList = ({ list, renderRow }) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(list)
  return (
    <View style={styles.container}>
      <View style={styles.refresh}>
        <Icon name="refresh" size={40}/>
      </View>
      <ListView
        dataSource={dataSource}
        contentContainerStyle={styles.list}
        renderRow={renderRow}
        enableEmptySections={true}
        />
    </View>
  )
}

NewsList.propTypes = {
  renderRow: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default NewsList
