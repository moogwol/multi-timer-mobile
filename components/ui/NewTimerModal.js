import { useState } from 'react'
import { View, Modal, Text, Button, StyleSheet, TextInput } from 'react-native'
import globalStyles from '../../globalStyles'

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
        <Modal
            visible={props.visible}
            animationType='slide'
            transparent={true}>
            <View style={styles.container}>
                <Text style={styles.modalTitle}>Create a new timer</Text>
                <View style={styles.createTimerCard}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => handleUserTextInput(text)}
                        placeholder='new timer name...' />
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={text => handleUserTimeInput(text)}
                        placeholder='input time in seconds' />

                    <View style={styles.buttonContainer}>
                        <Button
                            title='Dismiss'
                            onPress={props.onPressCancel}
                            color={globalStyles.colours.ACCENT} />
                        <Button
                            title="save"
                            onPress={handleSaveData}
                            color={globalStyles.colours.ACCENT} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.colours.SECONDARY,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createTimerCard: {
        flexDirection: 'column',
        alignContent: 'space-between',
        borderColor: globalStyles.colours.SUCCESS,
        borderWidth: 4,
        padding: 10,
        borderRadius: 5
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 30,
        color: globalStyles.colours.SUCCESS,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 4,
        borderColor: globalStyles.colours.TERTIARY,
        paddingLeft: 8,
        margin: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default NewTimerModal