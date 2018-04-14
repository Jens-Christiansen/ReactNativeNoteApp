import React from 'react';
import {View, Text, Button} from 'react-native';
import {views} from "../../styles/views";
import {text} from "../../styles/text";

export function NoteView({showListView, currentNote, deleteNote}) {
    return (
        <View style={views.view}>
            <Text style={text.primary}>{currentNote.title}</Text>
            <Text style={text.secondary}>{currentNote.body}</Text>
            <Button
                title="Back to Notes"
                onPress={showListView}
            />
            <Button
                title="Delete Note"
                onPress={deleteNote}
            />
        </View>
    );
}
