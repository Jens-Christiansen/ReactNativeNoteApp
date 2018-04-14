import React from 'react';
import {View, Button} from 'react-native';
import {notes} from "../styles/notes";

export function NoteOverview({note, showNoteView, deleteNote}) {
    return (
        <View style={notes.noteOverview}>

            <Button
                title={note.title}
                onPress={showNoteView}/>
            <Button
                title="-"
                onPress={deleteNote}
            />
        </View>
    );
}