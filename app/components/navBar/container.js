import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doAction, pressSearch, pressAccount} from './actions'
import { Button, View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


class NavBar extends Component {

    pressedButton = (id) =>{
        this.props.doAction(id);
    }
    render() {
        return <View style={styles.navBar}>
            <Image source={require("../../images/react_logo_rgb_light.png")} style={{ width: 98, height: 22 }} />
            <TextInput style={styles.searchBar}
                placeholder="Search"
                onChangeText={(text) => this.setState({ text })}
            />
            <View style={styles.rightNav}>
                <TouchableOpacity onPress={()=>this.pressedButton("search")}>
                    <Icon style={styles.navItem} name="search" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>this.pressedButton("account")}>
                    <Icon style={styles.navItem} name={"account-circle"} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    }
}
const styles = StyleSheet.create({
    navBar: {
      height: 50,
      backgroundColor: "white",
      elevation: 10,
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between'
    },
    searchBar:{
        flex:1
    },
    rightNav: {
      flexDirection: "row",
    },
    navItem: {
      marginLeft: 25
    }  
  });

// Rebind state items to this.props
function mapStateToProps(state) {
    return {
       
    }
}

// Attach actions from .actions and attach them to this.props so the actions trigger the redux action broadcast
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ doAction, pressSearch, pressAccount }, dispatch);
}

// connect is a magic redux function which create connectons between the react state and the redux state.
export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
