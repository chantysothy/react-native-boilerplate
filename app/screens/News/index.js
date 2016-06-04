import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  View,
  Text,
  TextInput,
  ListView,
  TouchableHighlight,
} from 'react-native'

import styles from './styles'
import * as newsActions from '../../actions/news'

import RefreshableList from '../../components/RefreshableList'
import NewsItem from '../../components/NewsItem'

export default class News extends Component {
  _renderRow(item){
    return <NewsItem {...item}/>
  }
  componentDidMount(){
    this.props.fetchNews()
  }
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const list = ds.cloneWithRows(this.props.news)
    return (
      <View style={styles.container}>
        <RefreshableList
          dataSource={list}
          renderRow={this._renderRow.bind(this)}
          />
      </View>
    )
  }
}

News.propTypes = {
  fetchNews: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
}

export default connect(
  state => state.news,
  dispatch => bindActionCreators(newsActions, dispatch)
)(News)
