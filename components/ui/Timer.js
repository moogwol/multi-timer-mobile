import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Clock from './Clock'
import TimerName from './TimerName'

const Timer = (props) => {
  return (
    <View style={styles.timerContainer}>
      <TimerName
        style={styles.text}
        text="press ups" />
      <Clock style={styles.clock}
        timeRemaining={props.timeRemaining} />
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    backgroundColor: '#cccccc',
    height: 50,
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    flex: 2,
  },
  clock: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
  }
})

export default Timer