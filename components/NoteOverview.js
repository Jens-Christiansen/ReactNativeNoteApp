import React from 'react';
import {View, Button} from 'react-native';

export function NoteOverview({note, showNoteView, deleteNote}) {
    return (
        <View>
            <Button
                title={note.title}
                onPress={showNoteView}/>
            <Button
                title="Delete Note"
                onPress={deleteNote}
            />
        </View>
    );
}