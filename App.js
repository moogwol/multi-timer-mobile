import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Timer from './components/ui/Timer';
import NewTimerModal from './components/ui/NewTimerModal';
import TimerList from './components/ui/TimerList';
import AllTimers from './AllTimers';



export default function App() {

  const [allTimers, setAllTimers] = useState(AllTimers);
  const [currentTimer, setCurrentTimer] = useState(0)
  const [countingDown, setCountingDown] = useState(false);
  const [buttonText, setButtonText] = useState('Start');
  const [newTimerModalVisible, setNewTimerModalVisible] = useState(false);

  const handlePressStart = () => {
    setCountingDown(!countingDown);
  }

  const handlePressSave = (text, time) => {
    let allTimersCopy = [...allTimers];
    allTimersCopy.push({id: 3, text, remaining: time});
    setAllTimers(allTimersCopy);
    setNewTimerModalVisible(false);
  };





  // set currentTimer to 0 on first renderer
  useEffect(() => setCurrentTimer(0), [])

  // custom hook that does the actual countdown
  function useDoCountDown() {
    useEffect(() => {

      let interval = null;
      const timersCopy = [...allTimers];

      if (countingDown) {
        const remaining = timersCopy[currentTimer].remaining // get the current time remaining

        // if the timer reaches zero, increment the current timer
        if (remaining <= 0) {
          setCurrentTimer((prevState) => prevState + 1);
        }

        // do the actual countdown
        interval = setInterval(() => {
          timersCopy[currentTimer].remaining = timersCopy[currentTimer].remaining - 1  // decrement timer
          setAllTimers((prevState) => timersCopy)
        }, 1000)
      } else {
        clearInterval(interval)
      }
      return () => clearInterval(interval)  // something about memory leaks

    }, [countingDown, allTimers, currentTimer])
  }

  useDoCountDown()


  // Changes the button text from 'start' to 'stop' depending on whether the timer is running
  useEffect(() => {
    if (countingDown) {
      setButtonText('Stop');
    } else {
      setButtonText('Start');
    };
  }, [countingDown])



  const timers = allTimers.map((item) => {
    return (
      // <li><Timer timeRemaining={item.remaining} /></li>
      <View><Timer timeRemaining={item.remaining} /></View>
    )
  })






  return (
    <View style={styles.appContainer}>
      <NewTimerModal style={styles.newTimerModal}
        visible={newTimerModalVisible}
        onPressCancel={() => { setNewTimerModalVisible(false) }}
        onPressSave={handlePressSave}
         />
      {/* {timers} */}
      <TimerList data={allTimers} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title={buttonText}
            onPress={handlePressStart}
            color='green' />
        </View>
        <View style={styles.button}>
          <Button
            title='Add new'
            onPress={() => { setNewTimerModalVisible(true) }}
            color='green' />
        </View>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: 'orange',

  },

  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#cccccc',
    // width: '80%',
    paddingLeft: 5,
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    marginTop: 8,
    justifyContent: 'space-around'

  },
  button: {
    flexBasis: 300,
  },
});
