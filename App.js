import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './App/Components/Login';
import Profile from './App/Components/Profile';

const Application = StackNavigator({
  Home : {screen: Login},
  Profile: {screen: Profile}


});

export default class App extends React.Component{
  render(){
    return (
      <Application/>
    );
  }
}
