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

import NewsList from '../../components/NewsList'
import NewsItem from '../../components/NewsItem'

export default class LatestNews extends Component {
  _renderRow(item){
    return <NewsItem {...item}/>
  }
  componentDidMount(){
    this.props.fetchLatestNews()
  }
  render() {
    return (
      <View style={styles.container}>
        <NewsList
          list={this.props.news}
          renderRow={this._renderRow.bind(this)}
          />
      </View>
    )
  }
}

LatestNews.propTypes = {
  fetchLatestNews: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
}

export default connect(
  state => state.latestNews,
  dispatch => bindActionCreators(newsActions, dispatch)
)(LatestNews)
