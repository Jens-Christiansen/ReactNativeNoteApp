import React from 'react';
import {View, Text} from 'react-native';

export function NoteOverview({note}) {
    return (
        <View>
            <Text>{note.title}</Text>
        </View>
    );
}