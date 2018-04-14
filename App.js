import React, { Component} from 'react';
import {List} from "./Components/Views/List";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : [],
            view : List,
        };
    }
    render() {
        return <this.state.view
            notes={this.state.notes}
        />;
    }
}


