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
    this._start=this._start.bind(this);

  this.state = {
    isPressed: 1,
  };
}

  _start = () => {
    this.setState({isPressed: 2}, () => {
      console.log('Start is Pressed Start the timer');
      this.props.changeState(this.state.isPressed);

    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
        
          style={{
            width: wp('100%'), height: hp('100%'),
            backgroundColor: '#006b8b',
          }}>
            <View
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/i2.png')}
                style={styles.imageStyle}
              />
            </View>
            <TouchableOpacity
              onPress={this._start}
              style={styles.loginScreenButton}
              underlayColor="#fff">
              <Text style={styles.loginText}>Start</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>)}
}

const styles = StyleSheet.create({
  loginText: {
    color: 'black',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
   loginScreenButton: {
    marginRight: wp('5%'),
    marginLeft:wp('5%'),
    marginTop: wp('30%'),
    paddingTop: wp('5%'),
    paddingBottom: wp('5%'),
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageStyle: {
    height:hp('37%'),
    width: wp('65%'),
    marginTop: 50,

  },
});
