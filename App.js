import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import i1 from './assets/i1.jpeg';

export default class App extends Component {
  state = {
    isPressed: 1,
    isRed: 1,
    icon1: i1,
    timer: null,
    minutes_Counter: '00',
    seconds_Counter: '00',
    statments: [
      'أقبل التلميذ من المحاضرة حزينا ',
      'تسعى مصر للتقدم فى مجال الصناعة ',
      'سافر أبي إلى الحج هذا العام',
      'القارب الجديد يهتز نبتمبنيتمب بتيمبتمن بيمبتمن ',
      'لم أذهب إلى أي مكان هذا العام أيضا وأنا حزين للغاية',
      'لم أذهب إلى أي مكان هذا العام أيضا وأنا حزين للغايةأنت',
      'أنا أيضا لم أذهب إلى أي مكان هذا العام أيضا وأنا حزين للغاية',
      ,
      '    ',
    ],
    string: '',
    color: '',
    color2: '',
    colors1: ['blue', '#7a42f4', 'brown', '#ffd420', 'black', 'orange', 'pink'],
    colors2: [
      'brown',
      'black',
      'blue',
      'orange',
      '#ffd420',
      '#7a42f4',
      'purple',
    ],

    statement_timer: null,
    index: 0,
    index_Colors: 0,
    timer_array: [],
    index_OF_statement: 0,
    average: 0,
  };

  _start = () => {
    this.render_statements(this.state.index_OF_statement);

    let statement_timer = setInterval(() => {
      this.render_statements(this.state.index_OF_statement);
    }, 2000);
    this.setState({statement_timer});

    this.setState({isPressed: true}, () => {
      let timer = setInterval(() => {
        var num = (Number(this.state.seconds_Counter) + 1).toString(),
          count = this.state.minutes_Counter;

        if (Number(this.state.seconds_Counter) == 59) {
          count = (Number(this.state.minutes_Counter) + 1).toString();
          num = '00';
        }

        this.setState({
          minutes_Counter: count.length == 1 ? '0' + count : count,
          seconds_Counter: num.length == 1 ? '0' + num : num,
        });
      }, 1000);
      this.setState({timer});
    });
  };
  render_statements = () => {
    if (this.state.index_OF_statement < this.state.statments.length - 1) {
      this.state.index_OF_statement = this.state.index_OF_statement + 1;
    }
    var statment = this.state.statments[this.state.index_OF_statement];
    let index = [Math.floor(Math.random() * 6) + 1];
    let index_Colors = [Math.floor(Math.random() * 6) + 1];
    var isRed = Math.floor(Math.random() * 3) + 1;
    console.log(this.state.isRed);
    this.setState({
      string: statment,
      index: index,
      index_Colors: index_Colors,
      color: this.state.colors1[index_Colors],
      color2: this.state.colors2[index_Colors],
      isRed: isRed,
    });
    console.log(this.state.isPressed)
    // this.check_index_of_statement();
  };
  move = () => {
    var min = Number(this.state.minutes_Counter);
    var sec = Number(this.state.seconds_Counter);
    var millisecodn = sec * 1000 + min * 60 * 1000;
    this.state.timer_array.push(millisecodn);
    this.setState({
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
    this.render_statements(this.state.index_OF_statement);
  };
  check_index_of_statement = () => {
    if (this.state.index_OF_statement === 5) {
      var isPressed = 3;

      this.state.timer_array.forEach(elem => (this.state.average += elem));
      this.setState({
        minutes_Counter: '00',
        seconds_Counter: '00',
        isPressed: isPressed,
        average: average,
      });
      console.log(this.state.isPressed)

    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.isPressed === 2 ? (
          <View>
            <Text style={{textAlign: 'center', fontSize: 40, margin: 20}}>
              {this.state.minutes_Counter} : {this.state.seconds_Counter}
            </Text>

            {this.state.isRed === 1 ? (
              <Text
                style={{
                  color: this.state.color,
                  textAlign: 'center',
                  fontSize: 35,
                  marginTop: 140,
                  marginBottom: 70,
                }}>
                {this.state.string.split(' ').map((x, ind) => (
                  <Text
                    onPress={this.state.index == ind ? this.move : this.move1}
                    style={{
                      color: this.state.index == ind ? 'red' : this.state.color,
                    }}>
                    {x + ' '}
                  </Text>
                ))}
              </Text>
            ) : this.state.isRed === 2 ? (
              <Text
                style={{
                  color: this.state.color,
                  textAlign: 'center',
                  fontSize: 35,
                  marginTop: 140,
                  marginBottom: 70,
                }}>
                {this.state.string.split(' ').map((x, ind) => (
                  <Text
                    style={{
                      color:
                        this.state.index == ind
                          ? this.state.color2
                          : this.state.color,
                    }}>
                    {x + ' '}
                  </Text>
                ))}
              </Text>
            ) : (
              <Text
                style={{
                  color: this.state.color,
                  textAlign: 'center',
                  fontSize: 35,
                  marginTop: 140,
                  marginBottom: 70,
                }}>
                {this.state.string}
              </Text>
            )}
          </View>
        ) : this.state.isPressed === 1 ? (
          <View style={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 0,
              }}>
              <ImageBackground
                source={this.state.icon1}
                style={{width: '100%', height: '100%'}}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.textStyle}>Welcome</Text>
                  <View style={styles.buttonContainer}>
                    <Button title="Start" onPress={this._start} />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.textStyle}>{this.state.average}</Text>
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

    paddingTop: 10,
    color: 'powderblue',
  },
  textStyle: {
    color: 'blue',
    fontSize: 90,
    textAlign: 'center',
    margin: 25,
    marginBottom: 30,
    fontWeight: '600',
  },
});
