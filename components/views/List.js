import React from 'react';
import {View, Text, Button} from 'react-native';
import {NoteOverview} from "../NoteOverview";
import {views} from "../../styles/views";

export function ListView({showNoteView, notes, showCreateNoteView, deleteNote}) {
    return (
        <View style={views.view}>
            <Button title="Create Note" onPress={showCreateNoteView}/>
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
