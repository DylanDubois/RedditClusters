import React, { Component } from 'react';
import {
    View, Text, SafeAreaView,
    FlatList, TouchableOpacity, StyleSheet
} from 'react-native';

const variables = require('../variables.js');

class ClusterResults extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({});
    }

    state = {
        items: []
    }

    renderListItem = (item) => {
        return (
            <TouchableOpacity style={styles.listItem} key={item.id} onPress={() => this.handleClusterSelect(item)}>
                <Text style={{ color: variables.colors.primaryColor, ...variables.fontStyles.header }}>{item.title}</Text>
            </TouchableOpacity>);
    }

    handleClusterSelect = (item) => {
        const navigate = this.props.navigation;
    }

    render() {

        return (
            <SafeAreaView>
                <FlatList
                    style={styles.listContainer}
                    data={this.state.items}
                    renderItem={({ item }) => this.renderListItem(item)}
                    keyExtractor={(item) => item.id}>
                </FlatList>
            </SafeAreaView>);
    }
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10
    },
    listItem: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10
    }
});

export default ClusterResults;