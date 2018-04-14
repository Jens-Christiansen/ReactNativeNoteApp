import React from 'react';
import {View, Button} from 'react-native';
import {notes} from "../styles/notes";
import {variables} from "../styles/_variables";

export function NoteOverview({note, showNoteView, deleteNote}) {
    return (
        <View style={notes.noteOverview}>

            <Button
                title={note.title}
                onPress={showNoteView}/>
            <Button
                title="-"
                color={variables.colors.danger}
                onPress={deleteNote}
            />
        </View>
    );
}