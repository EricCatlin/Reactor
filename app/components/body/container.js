import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doAction } from './actions'
import { ScrollView, Button, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


class TabBar extends Component {

    render() {
        return <ScrollView style={styles.body}>
            <Image style={styles.gallery_image} source={require("../../images/tigeer.jpg")} />
            <Image style={styles.gallery_image} source={require("../../images/tiger.jpg")} />

        </ScrollView>

    }
}
const styles = StyleSheet.create({
    body: { flex: 1, backgroundColor: "black" },
    gallery_image: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 75
    }
});

// Rebind state items to this.props
function mapStateToProps(state) {
    return {

    }
}

// Attach actions from .actions and attach them to this.props so the actions trigger the redux action broadcast
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ doAction }, dispatch);
}

// connect is a magic redux function which create connectons between the react state and the redux state.
export default connect(mapStateToProps, matchDispatchToProps)(TabBar);
