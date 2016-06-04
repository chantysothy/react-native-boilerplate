import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const tabBarButton = ({title, icon}) => (
  <View style={styles.container}>
    <Icon name={icon} style={styles.icon}/>
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default tabBarButton
