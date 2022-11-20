import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../globalStyles';

const Clock = (props) => {
  return (
    <View style={styles.clock}>
      <Text style={styles.numbers}>{props.timeRemaining}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  clock: {
    borderWidth: 2,
    borderColor: globalStyles.colours.SUCCESS,
    borderRadius: 5,
    padding: 2,
  },
  numbers: {
    color: globalStyles.colours.SECONDARY,
  }
})

export default Clock