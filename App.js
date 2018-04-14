import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.goToNotes = this.goToNotes.bind(this);
    }

    goToNotes() {

    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Welcom to Note Stuff</Text>
                <Button
                    onPress={this.goToNotes}
                    title="Go to Notes"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default StackNavigator({
    Home: {
        screen: App,
    },
    Notes: {screeen: Notes}
});
