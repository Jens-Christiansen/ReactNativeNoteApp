import React, {Component} from 'react';
import {ListView} from "./components/views/List";
import {NoteView} from "./components/views/Note";
import {Note} from "./models/Note";
import {CreateNoteView} from "./components/views/CreateNote";

export default class App extends Component {
    constructor(props) {
        super(props);
        const testNote = new Note('stuff', 'test');
        this.state = {
            notes: [testNote,],
            view: ListView,
            currentNote: undefined,
        };
        this.showNoteView = this.showNoteView.bind(this);
        this.showListView = this.showListView.bind(this);
        this.createNote = this.createNote.bind(this);
        this.showCreateNote = this.showCreateNote.bind(this);
    }

    showNoteView(index) {
        this.setState({
            view: NoteView,
            currentNote: this.state.notes[index],
        });
    }

    showListView() {
        this.setState({view: ListView});
    }

    createNote(title, body) {
        const newNote = new Note(title, body);
        let notes = this.state.notes.map(note => note);
        notes.unshift(newNote);
        this.setState({
            notes: notes,
            view: ListView,
        });
    }

    showCreateNote(){
        this.setState({view: CreateNoteView})
    }

    render() {
        return <this.state.view
            notes={this.state.notes}
            showNoteView={this.showNoteView}
            currentNote={this.state.currentNote}
            showListView={this.showListView}
            createNote={this.createNote}
            showCreateNoteView={this.showCreateNote}
        />;
    }
}


