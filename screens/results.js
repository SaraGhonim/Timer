import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.resetTimer = this.resetTimer.bind(this);

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
    this.setState(
      {
        isPressed: 1,
        timer: null,
        statement_timer: null,
        minutes_Counter: '00',
        seconds_Counter: '00',
        index_OF_statement: 0,
      },
      () => {
        // {this.props.changeState(this.state.isPressed);
        this.props.navigation.navigate('Welcome');
      },
    );
  };
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/i6.jpg')}
          style={{
            width: wp('100%'),
            height: hp('100%'),
          }}>
          
          <Text style={styles.textStyle_average}> Reaction Time : {this.props.navigation.state.params.average} ms</Text>
          <Text style={styles.textStyle_average}> Number of Wrong Statment : {this.props.navigation.state.params.wrongNumber}</Text>
          <TouchableOpacity
            onPress={this.resetTimer}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Exit</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
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
    marginRight: wp('13%'),
    marginLeft: wp('13%'),
    marginTop: wp('30%'),
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    backgroundColor: '#006b8b',
    borderRadius: 10,
  },
  textStyle_average: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: wp('40%'),
    marginBottom: wp('5%'),
    fontWeight: '600',
  },
  
});
