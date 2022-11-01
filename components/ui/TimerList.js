import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import Timer from './Timer'

const TimerList = (props) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={props.data}
                renderItem={({ item }) => <Timer
                    text={item.text}
                    timeRemaining={item.remaining} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'red',
        borderWidth: 4,
        borderColor: 'purple',
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
    }
})

export default TimerList