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

export default class TopNews extends Component {
  _renderRow(item){
    return <NewsItem {...item}/>
  }
  componentDidMount(){
    this.props.fetchTopNews(0)
  }
  render() {
    const { news, page, pageCount, fetchTopNews, isFetching } = this.props
    return (
      <View style={styles.container}>
        <NewsList
          list={news}
          renderRow={this._renderRow.bind(this)}
          onEndReached={() => !isFetching && page <= pageCount && fetchTopNews(page + 1)}
          />
      </View>
    )
  }
}

TopNews.propTypes = {
  fetchTopNews: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default connect(
  state => state.topNews,
  dispatch => bindActionCreators(newsActions, dispatch)
)(TopNews)
