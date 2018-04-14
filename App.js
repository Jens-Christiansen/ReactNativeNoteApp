import React, { Component} from 'react';
import {List} from "./components/views/List";
import {Note} from "./components/views/Note";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : [],
            view : List,
        };
        this.showNoteView = this.showNoteView.bind(this);
        this.showListView = this.showListView.bind(this);
    }
    showNoteView(){
       this.setState({view: Note});
    }
    showListView(){
       this.setState({view: List});
    }
    render() {
        return <this.state.view
            notes={this.state.notes}
            showNoteView={this.showNoteView}
            showListView={this.showListView}
        />;
    }
}


