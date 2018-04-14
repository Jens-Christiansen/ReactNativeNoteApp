import React from 'react';
import {View, Text, Button} from 'react-native';

export function Note({currentNote}) {
    const styles = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <View style={styles}>
            <Text>Note view</Text>
        </View>
    );
}

