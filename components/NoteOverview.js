import React from 'react';
import {View, Button} from 'react-native';

export function NoteOverview({note, showNoteView}) {
    return (
        <View>
            <Button
                title={note.title}
                onPress={showNoteView}/>
        </View>
    );
}