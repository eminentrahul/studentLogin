import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Profile extends React.Component{
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>Profile Ares</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
  },
  text: {
    color: '#fff',
  }
})
