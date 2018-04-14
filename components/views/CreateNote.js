import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

export class CreateNoteView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.styles = {
            view: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
            title: {
                height: 40,
                width: '80%',
                borderColor: 'gray',
                borderWidth: 1
            },
            body: {
                height: 40,
                width: '80%',
                borderColor: 'gray',
                borderWidth: 1
            },
        };

    }

    render() {
        return (
            <View style={this.styles.view}>
                <Text>Title</Text>
                <TextInput
                    style={this.styles.title}
                    vlaue={this.state.title}
                    onChangeText={text => this.setState({title: text})}
                />
                <Text>Body</Text>
                <TextInput
                    style={this.styles.body}
                    value={this.state.body}
                    onChangeText={text => this.setState({body: text})}
                />
                <Button
                    title="Save Note"
                    onPress={() => this.props.createNote(this.state.title, this.state.body)}
                />
            </View>
        );
    }
}
