import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
const variables = require('../variables.js');
import ClustersList from '../components/ClustersList.js';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Clusters',
        // headerRight: () => (
        //     <Button
        //         onPress={() => alert('You\'ve logged out!')}
        //         title="Logout"
        //         color="#fff"
        //     />
        // ),
    };
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ClustersList navigation={navigate} />
            </View>
        );
    }
}