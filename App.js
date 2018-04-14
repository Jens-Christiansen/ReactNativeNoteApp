import React, {Component} from 'react';
import {ListView} from "./components/views/List";
import {NoteView} from "./components/views/Note";
import {Note} from "./models/Note";

export default class App extends Component {
    constructor(props) {
        super(props);
        const testNote = new Note('stuff', 'test');
        this.state = {
            notes: [testNote,],
            view: ListView,
            currentIndex: 0,
        };
        this.showNoteView = this.showNoteView.bind(this);
        this.showListView = this.showListView.bind(this);
        this.createNote = this.createNote.bind(this);
    }

    showNoteView(index) {
        this.setState({
            view: NoteView,
            currentIndex: index,
        });
    }

    showListView() {
        this.setState({view: ListView});
    }

    createNote(title, body) {
        const note = new Note(title, body);
        this.setState({notes: this.state.push(note)});
    }

    render() {
        return <this.state.view
            notes={this.state.notes}
            showNoteView={this.showNoteView}
            currentIndex={this.state.currentIndex}
            showListView={this.showListView}
            createNote={this.createNote}
        />;
    }
}


