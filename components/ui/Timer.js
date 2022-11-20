import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Clock from './Clock'
import TimerName from './TimerName'
import globalStyles from '../../globalStyles';

const Timer = (props) => {
  return (
    <View style={styles.timerContainer}>
      <TimerName
        text={props.text} />
      <Clock
        timeRemaining={props.timeRemaining} />
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: globalStyles.colours.PRIMARY,
    height: 50,
    borderWidth: 2,
    borderColor: globalStyles.colours.ACCENT,
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
})

export default Timer