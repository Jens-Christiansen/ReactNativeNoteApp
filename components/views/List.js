import React from 'react';
import {View, Text, Button} from 'react-native';
import {NoteOverview} from "../NoteOverview";

export function ListView({showNoteView, notes, showCreateNoteView, deleteNote}) {
    const styles = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <View style={styles}>
            <Button title="Create Note" onPress={showCreateNoteView}/>
            <Text>list view</Text>
            {notes.map((note, i) => {
                return <NoteOverview
                    note={note}
                    key={'noteOverview' + i}
                    showNoteView={() => showNoteView(i)}
                    deleteNote={() => deleteNote(i)}
                />;
            })}
        </View>
    );
}
