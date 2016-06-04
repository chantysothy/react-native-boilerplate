import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  ListView,
  TouchableHighlight,
  LinkingIOS
} from 'react-native'

import styles from './styles'
import * as newsActions from '../../actions/news'

export default class Story extends Component {
  componentDidMount(){
    this.props.fetchStory(this.props.id)
  }
  render() {
    const { isFetching, story } = this.props
    if(!isFetching && story.id == this.props.id){
      const {
        id,
        created_at,
        author,
        title,
        url,
        text,
        points,
      } = this.props.story
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TouchableHighlight onPress={() => LinkingIOS.openURL(url)}>
            <Text style={styles.url}>{url}</Text>
          </TouchableHighlight>
          {text && <Text>{text}</Text>}
        </View>
      )
    }else{
      return (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
  }
}

Story.propTypes = {
  story: PropTypes.object.isRequired,
  fetchStory: PropTypes.func.isRequired,
}

export default connect(
  state => state.story,
  dispatch => bindActionCreators(newsActions, dispatch)
)(Story)
