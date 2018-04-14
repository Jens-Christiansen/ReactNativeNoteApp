import React from 'react';
import {View, Text} from 'react-native';

export function List(props) {
    const STYLES = {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
    };
    return (
      <View style={STYLES}>
          <Text>list view</Text>
      </View>
    );
}

