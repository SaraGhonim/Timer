import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IntervalValue:0 ,
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/i6.jpg')}
          style={{
            width: wp('100%'),
            height: hp('100%'),
          }}>
          <View style={{marginTop: 170, margin: 30}}>
            <TextInput
              onChangeText={IntervalValue => this.setState({IntervalValue})}
              value={this.state.IntervalValue}
              keyboardType="email-address"
              autoCorrect={false}
              maxLength={30}
              multiline={false}
              placeholder="Set The Interval"
              underlineColorAndroid="#a9a9a9"></TextInput>
          </View>

          <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate
            ('Home', {
                interval: this.state.IntervalValue,
            })}


            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Next</Text>
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
});
