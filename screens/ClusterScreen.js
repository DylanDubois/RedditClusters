import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import ClusterResults from '../components/ClusterResults.js';
const variables = require('../variables.js');

export default class ClusterScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('item', 'A Nested Details Screen').title,
            headerTitleStyle: variables.fontStyles.subheader,
        };
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.setState({ cluster: navigation.getParam('item') });

    }
    state = {
        cluster: {
            title: 'Temp'
        }
    }
    render() {

        const { cluster, results } = this.state;
        return (
            <ClusterResults results={results} />
        );
    }
}