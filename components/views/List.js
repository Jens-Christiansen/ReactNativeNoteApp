import React from 'react';
import {View, Text, Button} from 'react-native';
import {NoteOverview} from "../NoteOverview";

export function ListView({showNoteView, notes}) {
    const styles = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <View style={styles}>
            <Text>list view</Text>
            <Button
                title="Go to notes"
                onPress={showNoteView}
            />
            {notes.map((note, i) => <NoteOverview note={note} key={'noteOverview' + i}/>)}
        </View>
    );
}

