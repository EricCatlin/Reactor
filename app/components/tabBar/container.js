import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doAction } from './actions'
import { Button, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


class TabBar extends Component {
    render() {
        return <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem} onPress={()=>this.props.doAction("home")} >
                <Icon name="home" size={25} />
                <Text style={styles.tabTitle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>this.props.doAction()} >
                <Icon name="whatshot" size={25} />
                <Text style={styles.tabTitle}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>this.props.doAction()} >
                <Icon name="subscriptions" size={25} />
                <Text style={styles.tabTitle}>Subscriptions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>this.props.doAction()} >
                <Icon name="folder" size={25} />
                <Text style={styles.tabTitle}>Library</Text>
            </TouchableOpacity>
        </View>

    }
}
const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: 'space-around'
      },
      tabItem: {
        alignItems: "center",
        justifyContent: 'center',
        borderWidth:1,
        borderColor:"red"
      },
      tabTitle: {
        fontSize: 11,
        paddingTop: 5,
        color: "black"
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
