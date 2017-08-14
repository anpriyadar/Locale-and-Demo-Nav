/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Locale from '../Utils/locale'


export default class SecondScreen extends Component {
  render() {
    return (
      <View>
        <Text> Welcome to SECOND SCREEN</Text>
        <Button
            onPress={() => this.props.navigation.goBack(null)}
            title="Click To Navigate Back"
          />
      </View>
    );
  }
}
