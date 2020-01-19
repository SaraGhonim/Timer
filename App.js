

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,TextInput,
  StatusBar,TouchableOpacity,Image
} from 'react-native';



import AppContainer from './navigation';
class App extends  Component{

  render() {
    return (
      <View style = {{flex:1}}>
       <AppContainer/>    
       
        </View>

          
    )
  }



}


export default App;
