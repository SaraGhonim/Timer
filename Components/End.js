import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.resetTimer=this.resetTimer.bind(this);

  this.state = {
    isPressed: 1,
    timer: null,
    minutes_Counter: '00',
    seconds_Counter: '00',
    statement_timer: null,
    index: 0,
    index_Colors: 0,
    timer_array: [],
    index_OF_statement: 0,
    average: 0,
  };
}

resetTimer = () => {
    this.setState({
      isPressed: 1,
      timer: null,
      statement_timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      index_OF_statement: 0,
    },()=>
    {this.props.changeState(this.state.isPressed);})

  }
  render() {
    return (
        <View>
        <ImageBackground
         source={require('../assets/i6.jpg')}
          style={{
            width: wp('100%'), height: hp('100%'),
          }}>
                          <Text style={styles.textStyle_average}>{this.state.average} ms</Text>

          <TouchableOpacity
            onPress={this.resetTimer}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.resetTimer}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Go Home</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>)}
}

const styles = StyleSheet.create({
  loginText: {
    color: 'white',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
   loginScreenButton: {
    marginRight: wp('5%'),
    marginLeft:wp('5%'),
    marginTop: wp('30%'),
    paddingTop: wp('3.5%'),
    paddingBottom: wp('3.5%'),
    backgroundColor: '#006b8b',
    borderRadius: 10,
  },
  textStyle_average: {
    justifyContent: 'center',
    color: 'red',
    fontSize: 90,
    textAlign: 'center',
    margin:wp('5%'),
    marginBottom: wp('5%'),
    fontWeight: '600',
  },
  textStyle_average: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 70,
    textAlign: 'center',
    margin:wp('5%'),
    marginBottom: wp('5%'),
    fontWeight: '600',
  },
});
