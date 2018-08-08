import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {MainFeed, Login, Register, Camera, Profile} from './components/screens';
import {createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';



const Tabs = createBottomTabNavigator({
  feed:MainFeed,
  camera:Camera,
  profile: Profile



});

const IntroStack = createStackNavigator({
    register: Register,
    login: Login


})


const MainStack = createSwitchNavigator ({
    intro: IntroStack,
    main: Tabs
});



class PoshApp extends Component {
  render(){
          return <MainStack />;


  }
}


export default PoshApp;
