import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import Register from './register';
import SwipeablePanel from 'rn-swipeable-panel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this._start = this._start.bind(this);

    this.state = {
      isPressed: 1,
      swipeablePanelActive: false,
    };
  }

   componentDidMount = () => {
     this.closePanel();
  };

  openPanel = () => {
    this.setState({swipeablePanelActive: true});
  };

  closePanel = () => {
    this.setState({swipeablePanelActive: false});
  };

  _start = () => {
    this.setState({isPressed: 2}, () => {
      console.log('Start is Pressed Start the timer');
        // this.props.changeState(this.state.swipeablePanelActive);
        // this.props.navigation.navigate('Register')
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: '#006b8b',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../assets/i2.png')}
              style={styles.imageStyle}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={this.openPanel}
              style={styles.loginScreenButton}
              underlayColor="#fff">
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>

          <SwipeablePanel
            isActive={this.state.swipeablePanelActive}
            onClose={() => this.closePanel()}>

              <Register navigation={this.props.navigation} ></Register>
            </SwipeablePanel>

       
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    color: '#006b8b',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
  loginScreenButton: {
    marginRight: wp('5%'),
    marginLeft: wp('5%'),
    marginTop: wp('10%'),
    paddingTop: wp('3%'),
    paddingBottom: wp('3%'),
    // backgroundColor: '#006b8b',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: hp('37%'),
    width: wp('65%'),
    marginTop: 110,
  },
});
