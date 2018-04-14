import React from 'react';
import {View, Text, Button} from 'react-native';

export function NoteView({showListView, currentNote, deleteNote}) {
    const styles = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <View style={styles}>
            <Text>{currentNote.title}</Text>
            <Text>{currentNote.body}</Text>
            <Button
                title="Go to list of notes"
                onPress={showListView}
            />
            <Button
                title="Delete Note"
                onPress={deleteNote}
            />
        </View>
    );
}
