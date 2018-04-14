import React from 'react';
import {View, Text, Button} from 'react-native';

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
            {notes.map(note => {
                return (
                    <View>
                        <View>
                            <Text>{note.title}</Text>
                        </View>
                        <View>
                            <Text>{note.body}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

