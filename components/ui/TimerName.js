import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const TimerName = (props) => {
  return (
    <View style={props.style}>
        <Text>{props.text}</Text>
    </View>
  )
}

export default TimerName