import React from 'react';
import {View, Text, Button} from 'react-native';

export function Note(props) {
    const STYLES = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <View style={STYLES}>
            <Button
                title="Go to list of notes"
                onPress={props.showListView}
            />
            <Text>Note view</Text>
        </View>
    );
}

