import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class SignIn extends Component {
  //   static navigationOptions = {drawerIcon:(tintColor)=>(<Icon name="home"/>)};
  constructor(props) {
    super(props);

    this.state = {
      click: 2,
    };
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Name"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>

        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Date"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Moblie Number"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
        <View style={{marginBottom: 30}}>
          <TextInput
            underlineColorAndroid="#a9a9a9"
            placeholder="State"
            name="Password"></TextInput>
        </View>

        {/* //this.props.navigation.navigate('Home') */}
        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('SetInterval')}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 5,
              paddingBottom: 5,
              color: 'white',
              fontSize:20
            }}>
            {' '}
            Start
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer2: {
    backgroundColor: '#006b8b',
    paddingTop: 5,
    paddingBottom: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 60,
    margin: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
});
