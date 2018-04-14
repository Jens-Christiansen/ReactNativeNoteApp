import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import {inputs} from "../../styles/inputs";
import {views} from "../../styles/views";

export class CreateNoteView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };
    }

    render() {
        return (
            <View style={views.view}>
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
                    multiline={true}
                    onChangeText={text => this.setState({body: text})}
                />
                <Button
                    title="Save Note"
                    onPress={() => this.props.createNote(this.state.title, this.state.body)}
                />
                <Button
                    title="Cancel"
                    onPress={this.props.showListView}
                />
            </View>
        );
    }
}
