import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import Timer from './Timer';
import globalStyles from '../../globalStyles';

const TimerList = (props) => {

    if (props.data.length > 0) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={props.data}
                renderItem={({ item }) => <Timer
                    text={item.text}
                    timeRemaining={item.remaining} />}
            />
        </View>
    );} return <View><Text>Add a timer</Text></View>
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: globalStyles.colours.TERTIARY,
        borderWidth: 4,
        borderColor: globalStyles.colours.ACCENT,
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
    }
})

export default TimerList