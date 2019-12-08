import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
const variables = require('../variables.js');

export default class Example extends Component {
    static navigationOptions = {
        title: 'YouPACt',
        headerRight: () => (
            <Button
                onPress={() => alert('You\'ve logged out!')}
                title="Logout"
                color="#fff"
            />
        ),
    };
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Example Screen</Text>
            </View>
        );
    }
}