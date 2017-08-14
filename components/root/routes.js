import React from "react";
import { AppRegistry } from "react-native";
import App from '../imageView'
import { StackNavigator } from "react-navigation";
import SecondScreen from '../imageView/secondScreen.js';

const MultiLang = props => {
  return <App navigation={props.navigation} />;
};

MultiLang.navigationOptions = {
  title: "Home Screen"
};

const SimpleApp = StackNavigator({
  Home: { screen: MultiLang },
  SecondScreen: { screen: SecondScreen, title: "Second Screen" }
});

AppRegistry.registerComponent("MultiLang", () => SimpleApp);
