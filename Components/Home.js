import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default class App extends Component {
  state = {
    isPressed: false,
    timer: null,
    minutes_Counter: '00',
    seconds_Counter: '00',
  };

  _start = () => {
    this.setState({isPressed: true}, () => {
      console.log('Start is Pressed Start the timer');
    });
  };



  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.isPressed ? (

          <View>
          <Text> Ay 7agaaaaaaaaaa</Text>
          <Text>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
            <View style = {styles.buttonContainer}>
           <Button title="Stop"  color="#f194ff" onPress={this._stop} />
          </View>

            <View style = {styles.buttonContainer}>
           <Button title="Clear"  color="#f194ff" onPress={this._clear} />
           </View>
             <View style = {styles.buttonContainer}>
           <Button title="Back"  color="#f194ff" onPress={this._back} />
           </View>
</View>

        ) :
        
        
        (
         
          <View style={styles.buttonContainer}>
            <Button title="Start" color="#f194ff" onPress={this._start} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    color: 'blue',
    marginTop: 50,
    marginBottom: 32,
    marginVertical: 8,
    borderBottomColor: '#737373',
    paddingTop: 10,
    color: 'powderblue',
  },
});
