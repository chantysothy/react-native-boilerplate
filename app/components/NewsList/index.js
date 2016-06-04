import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

export default class NewsList extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = { ds }
  }
  updateDataSource(list){
    this.setState({
      ds: this.state.ds.cloneWithRows(list)
    })
  }
  componentDidMount(){
    this.updateDataSource.apply(this, [this.props.list])
  }
  componentWillReceiveProps({ list }){
    this.updateDataSource.apply(this, [list])
  }
  render(){
    const { renderRow, onEndReached } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.refresh}>
          <Icon name="refresh" size={40}/>
        </View>
        <ListView
          initialListSize={46}
          dataSource={this.state.ds}
          contentContainerStyle={styles.list}
          renderRow={renderRow}
          enableEmptySections={true}
          onEndReached={onEndReached}
          />
      </View>
    )
  }
}

NewsList.propTypes = {
  renderRow: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}
