import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../globalStyles';

const TimerName = (props) => {
  console.log(globalStyles)
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: globalStyles.colours.TERTIARY,
    backgroundColor: globalStyles.colours.ACCENT,
    borderRadius: 5,
    padding: 2,

  },
  text: {
    color: globalStyles.colours.PRIMARY,
    fontFamily: 'sans-serif'
  }
})

export default TimerName