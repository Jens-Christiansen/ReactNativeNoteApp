import React from 'react';
import {View, Text, Button} from 'react-native';
import {views} from "../../styles/views";

export function NoteView({showListView, currentNote, deleteNote}) {
    return (
        <View style={views.view}>
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
