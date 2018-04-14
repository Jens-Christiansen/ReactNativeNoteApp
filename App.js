import React, {Component} from 'react';
import {ListView} from "./components/views/List";
import {NoteView} from "./components/views/Note";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            view: ListView,
        };
        this.showNoteView = this.showNoteView.bind(this);
        this.showListView = this.showListView.bind(this);
    }

    showNoteView() {
        this.setState({view: NoteView});
    }

    showListView() {
        this.setState({view: ListView});
    }

    render() {
        return <this.state.view
            notes={this.state.notes}
            showNoteView={this.showNoteView}
            showListView={this.showListView}
        />;
    }
}


