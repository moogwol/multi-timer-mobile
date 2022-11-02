import { useState } from 'react'
import { View, Modal, Text, Button, StyleSheet, TextInput } from 'react-native'

const NewTimerModal = (props) => {

    const [userText, setUserText] = useState('')
    const [userTime, setUserTime] = useState('')

    // generate a random integer
    function randomNumber() {
        return Math.floor(Math.random() * 10000000);
    }

    //  gets the new timer name and time from the user input and saves it to a new timer
    const handleSaveData = () => {
        var id = randomNumber();
        var text = userText;
        var time = userTime;
        console.log(`new timer, id: ${id} text: ${text} time: ${time}`)
        props.onPressSave(id, userText, userTime)
    }

    const handleUserTextInput = (text) => {
        setUserText(text);
    };

    const handleUserTimeInput = (text) => {
        setUserTime(text);
    };


    return (
        // <View >
        <Modal
            visible={props.visible}
            animationType='slide'
            transparent={false}>
            <View style={styles.container}>
                <Text style={styles.text}>Create a new timer</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => handleUserTextInput(text)}
                    placeholder='new timer name...' />
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    onChangeText={text => handleUserTimeInput(text)}
                    placeholder='input time in seconds' />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title='Dismiss'
                    onPress={props.onPressCancel}
                    color='green' />
                <Button
                    title="save"
                    onPress={handleSaveData}
                    color='pink' />
            </View>
        </Modal>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        height: '50%',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
    textInput: {
        borderWidth: 4,
        borderColor: 'purple',
        paddingLeft: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
    }
})

export default NewTimerModal