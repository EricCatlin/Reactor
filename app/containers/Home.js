import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative, { TouchableOpacity } from 'react-native';
import {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import NavBar from "../components/navBar/container";
import TabBar from "../components/tabBar/container";
import Body from "../components/body/container";


class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <NavBar > </NavBar>
        <Body> </Body>
        <TabBar > </TabBar>
      </View>
    )
  }
}
export default Home;



