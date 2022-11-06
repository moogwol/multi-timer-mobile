import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Timer from './components/ui/Timer';
import NewTimerModal from './components/ui/NewTimerModal';
import TimerList from './components/ui/TimerList';
import { Audio } from 'expo-av';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


export default function App() {

  const [allTimers, setAllTimers] = useState([]);
  const [currentTimer, setCurrentTimer] = useState(0)
  const [countingDown, setCountingDown] = useState(false);
  const [buttonText, setButtonText] = useState('Start');
  const [newTimerModalVisible, setNewTimerModalVisible] = useState(false);
  const [sound, setSound] = useState();

  const handlePressStart = () => {
    setCountingDown(!countingDown);
  }

  const handlePressSave = (id, text, time) => {
    let allTimersCopy = [...allTimers];
    allTimersCopy.push({ id, text, remaining: time });
    setAllTimers(allTimersCopy);
    setNewTimerModalVisible(false);
  };





  // set currentTimer to 0 on first renderer
  useEffect(() => setCurrentTimer(0), [])

  // custom hook that does the actual countdown
  // function useDoCountDown() {
  useEffect(() => {

    if (allTimers.length > 0) {
      let interval = null;
      const timersCopy = [...allTimers];
      const remaining = timersCopy[currentTimer].remaining;
      console.log('remaining:', remaining);
      let currentTimerisFinalTimer = currentTimer == (allTimers.length - 1);

      // case: counting down and current timer is not the final timer 
      if (remaining <= 0 && !(currentTimerisFinalTimer)) {
        setCurrentTimer((prevState) => prevState + 1);
        playSound();
      } else if (remaining <= 0 && currentTimerisFinalTimer) {
        setCountingDown(false);
      }

      // case: counting down and current timer is the final timer 

      if (countingDown) {
        const remaining = timersCopy[currentTimer].remaining // get the current time remaining



        // do the actual countdown
        interval = setInterval(() => {
          timersCopy[currentTimer].remaining = timersCopy[currentTimer].remaining - 1  // decrement timer
          setAllTimers((prevState) => timersCopy)
        }, 1000)
      } else {
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    }  // something about memory leaks

  }, [countingDown, allTimers, currentTimer])
  // }

  //  if (allTimers.length > 0) {useDoCountDown()}


  // Changes the button text from 'start' to 'stop' depending on whether the timer is running
  useEffect(() => {
    if (countingDown) {
      setButtonText('Stop');
    } else {
      setButtonText('Start');
    };
  }, [countingDown])


  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('./assets/meow1.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


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
