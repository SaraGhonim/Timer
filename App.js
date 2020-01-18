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
import i1 from './assets/i1.jpeg';
import i2 from './assets/i2.png';
import i3 from './assets/i3.jpeg';

export default class App extends Component {
  state = {
    isPressed: 1,
    isRed: 1,
    icon1: i1,
    timer: null,
    minutes_Counter: '00',
    seconds_Counter: '00',
    statments: [
      'المحافظة على البيئة ضؤوؤة ملحة',
      'رأيت هدهد جميل على الشجرة',
      'فناء المدرسة ملى بالأشجار الرائعة',
      'أقبل التلميذ من المحاضرة حزينا ',
      'تسعى مصر للتقدم فى مجال الصناعة ',
      'الصياد فى البحر أولاده يلعبون معه',
      'سافر أبي إلى الحج هذا العام',
      'اشترك الولد مع ابيه فى العمل',
      'تلوث المياة يؤدى إلى هلاك البشرية',
      'نبيل يلعب مع اخوة مصطفى بالعجلة',
      'ممارسة الرياضة للجسم و القرأة للعقل',
      'القارب الجديد يهتز بشدة فى المياة',
      'أسرة عمى أسرة متعانة و مستقرة',
      'تمشى أمى للبيت بسرهة و لهفة',
      'التماثيل فى الاقصر تجلب السياح',
      ' تقع الازهار فى فصل الصيف',
      'لا تتعب نفسك من أجل شخص لا يستحق',
      'تعتنى الأم بصغارها و تخاف عليه',
      'حضر الرئيس راكبا سيارته صباحا',
      'حافظ على نظافة المكان المتواجد فيه',
    ],
    string: '',
    color: '',
    color2: '',
    colors1: [
      'blue',
      '#7a42f4',
      '#4b0082',
      '#ffd420',
      'black',
      'orange',
      'pink',
    ],
    colors2: [
      'brown',
      'black',
      'blue',
      'orange',
      '#ffd420',
      '#7a42f4',
      'purple',
      '#4b0082',
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
      }, 6000);
    
    this.setState({ statement_timer });

    this.setState({ isPressed: 2 }, () => {
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
      this.setState({ timer });
    });
  };
  render_statements = () => {
    if (this.state.index_OF_statement < this.state.statments.length - 1) {
      this.state.index_OF_statement = this.state.index_OF_statement + 1;
    }
    if (this.state.index_OF_statement === 7) {
      this.check_index_of_statement();
      clearInterval(this.state.timer);
      clearInterval(this.state.statement_timer);
      console.log('clear the interval')
    }
    var random_statment_index = Math.floor(Math.random() * 19) + 1;
    var statment = this.state.statments[random_statment_index];
    let index = [Math.floor(Math.random() * 6) + 1];
    let index_Colors = [Math.floor(Math.random() * 6) + 1];
    var isRed = Math.floor(Math.random() * 3) + 1;
    console.log('minutes in interval', this.state.minutes_Counter);
    console.log('second in interval', this.state.seconds_Counter);
    console.log('red in interval', this.state.isRed);
    console.log('timer in interval', this.state.timer);
    console.log('statment timer in interval', this.state.statement_timer);

    this.setState({
      string: statment,
      index: index,
      index_Colors: index_Colors,
      color: this.state.colors1[index_Colors],
      color2: this.state.colors2[index_Colors],
      isRed: isRed,
      minutes_Counter: '00',
      seconds_Counter: '00'
    });

  };

  move = () => {
    var min = Number(this.state.minutes_Counter);
    var sec = Number(this.state.seconds_Counter);
    var millisecodn = sec * 1000 + min * 60 * 1000;
    this.state.timer_array.push(millisecodn);
    // this.setState({
    //   minutes_Counter: '00',
    //   seconds_Counter: '00',
    // });
    this.render_statements(this.state.index_OF_statement);
  };

  check_index_of_statement = () => {
    if (this.state.index_OF_statement === 7) {

      var isPressed = 3;
      var average = 0;
      this.state.timer_array.forEach(elem => (average += elem));
      this.setState({
        minutes_Counter: '00',
        seconds_Counter: '00',
        isPressed: isPressed,
        average: average,
      });
    }
  };

  home = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            width: wp('100%'), height: hp('100%'),
            backgroundColor: '#006b8b',
          }}>
          <View style={styles.buttonContainer}>
            {/* <Text style={styles.textStyle}>Welcome</Text> */}
            <View
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./assets/i2.png')}
                style={styles.imageStyle}
              />
            </View>
            <TouchableOpacity
              onPress={this._start}
              style={styles.loginScreenButton}
              underlayColor="#fff">
              <Text style={styles.loginText}>Start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>)
  }


  resetTimer = () => {
    // console.log('Stop the timer');
    // console.log('min',this.state.minutes_Counter);
    // console.log('second',this.state.seconds_Counter);
    // console.log('average', this.state.average);
    // console.log('timer', this.state.timer);
    // console.log('timerStatment', this.state.statement_timer);
    this.setState({
      isPressed: 1,
      timer: null,
      statement_timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      index_OF_statement: 0,
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        {this.state.isPressed === 2 ? (
          <View>
            <ImageBackground
              source={require('./assets/i6.jpg')}
              style={{
                width: wp('100%'), height: hp('100%')
              }}>
              <Text style={{ textAlign: 'center', fontSize: 40, margin: 20, color: '#000' }}>
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
                        color:
                          this.state.index == ind ? 'red' : this.state.color,
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
            </ImageBackground>
          </View>
        ) : this.state.isPressed === 1 ? (
          this.home()) : (
              <View>
                <ImageBackground
                  style={{
                    width: wp('100%'), height: hp('100%'),
                    backgroundColor: '#ffff',
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
              </View>
            )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    color: 'black',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
  buttonContainer: {
    margin:wp('5%'),
    color: 'black',
    marginTop: hp('5%'),
    marginBottom: wp('5%'),
    marginVertical: wp('5%'),

    paddingTop: 10,
    // color: 'powderblue',
  },
  loginScreenButton: {
    marginRight: wp('5%'),
    marginLeft:wp('5%'),
    marginTop: wp('30%'),
    paddingTop: wp('5%'),
    paddingBottom: wp('4%'),
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textStyle: {
    color: '#ffff',
    fontSize: 60,
    textAlign: 'center',
    margin:wp('5%'),
    marginBottom: wp('5%'),
    fontWeight: 'bold',
    fontFamily: 'Cochin',
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
  imageStyle: {
    height:hp('30%'),
    width: wp('60%'),
  },
});
