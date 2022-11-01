import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Clock = (props) => {
  return (
    <View style={props.style}>
        <Text>{props.timeRemaining}</Text>
    </View>
  )
}

export default Clock