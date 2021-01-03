import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transaction from './screens/Transaction'
import Search from './screens/Search'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return (
       <AppContainer></AppContainer>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screens: Transaction},
  Search: {screens: Search}
})

const AppContainer = createAppContainer(TabNavigator);