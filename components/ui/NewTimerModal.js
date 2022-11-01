import React from 'react'
import { View, Modal, Text, Button, StyleSheet, TextInput } from 'react-native'

const NewTimerModal = (props) => {
    return (
        <View >
            <Modal
                visible={props.visible}
                animationType='slide'
                transparent={false}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create a new timer</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='new timer name...' />
                </View>

                <View style={props.style}>
                    <Button
                        title='Dismiss'
                        onPress={props.onPress}
                        color='green' />
                </View>
            </Modal>
        </View>
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
    }
})

export default NewTimerModal