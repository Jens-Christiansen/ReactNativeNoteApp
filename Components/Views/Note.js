import React from 'react';
import {View, Text} from 'react-native';

export function Note(props) {
    const STYLES = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <View style={STYLES}>
            <Text>Note view</Text>
        </View>
    );
}

