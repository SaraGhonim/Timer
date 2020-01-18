import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {
//   createDrawerNavigator,
//   DrawerItems,
//   DrawerIconProps,
// } from 'react-navigation-drawer';
import Register from '../screens/register';
import Home from '../screens/statements';
import Results from '../screens/results';
import Welcome from '../screens/welcome';

const FirstStack = createStackNavigator(
  {  Welcome,
    Register,
    Home,
    Results,
  },
  {headerMode: 'none'},
);
// const HomeStack = createStackNavigator(

//   {
//     Home:{screen:Home,navigationOptions: ({ navigation }) => ({
//       title: '',
//       headerLeft: <NavigationDrawerStructure navigation={navigation} />,
//        headerStyle: {
//            backgroundColor: 'rgba(90, 0, 52, 0.1)',
//        },
//        headerTintColor: '#000000',
//     }),
//   },
//   },
//   // {
//   //   headerMode:'none'
//   // }
// )
const AppCon = createAppContainer(FirstStack);
// const AppCon = createAppContainer(FirstStack,{initialRouteName: 'Welcome', } );

export default AppCon;
