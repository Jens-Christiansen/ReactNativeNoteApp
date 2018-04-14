import React from 'react';
import {View, Text, Button} from 'react-native';

export function NoteView(props) {
    const STYLES = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <View style={STYLES}>
            <Text>Note view</Text>
            <Button
                title="Go to list of notes"
                onPress={props.showListView}
            />
        </View>
    );
}

