import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import {inputs} from "../../styles/inputs";

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
        };
    }

    render() {
        return (
            <View style={this.styles.view}>
                <Text>Title</Text>
                <TextInput
                    style={inputs.textInput}
                    vlaue={this.state.title}
                    onChangeText={text => this.setState({title: text})}
                />
                <Text>Body</Text>
                <TextInput
                    style={inputs.textArea}
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
