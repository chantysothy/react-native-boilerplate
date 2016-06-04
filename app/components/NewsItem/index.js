import React, { PropTypes } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const NewsItem = ({ objectID, title, points, author, url, num_comments=0 }) => (
  <View style={styles.row}>
    <TouchableOpacity style={styles.header} onPress={() => Linking.openURL(url)}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.headerSubText}>{points} points by {author}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.comments} onPress={() => Actions.story({id: objectID})}>
      <Icon name="comments-o" size={30}/>
      <Text style={styles.commentsText}>{num_comments}</Text>
    </TouchableOpacity>
  </View>
)

NewsItem.propTypes = {
  objectID: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string,
  num_comments: PropTypes.number,
}

export default NewsItem
