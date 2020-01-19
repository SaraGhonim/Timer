import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import i1 from '../assets/i1.jpeg';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.render_statements = this.render_statements.bind(this);
    this.move = this.move.bind(this);
    this.create_random_uniqe = this.create_random_uniqe.bind(this);

    this.check_index_of_statement = this.check_index_of_statement.bind(this);

    this.state = {
      isPressed: 2,
      isRed: [1,1,1,1,1,3,1,1,1,2,3,1,2,1,3,1,1,2,1,1,1,1],
      red:2,
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      statments: [
        'المحافظة على البيئة ضرورة ملحة',
        'رأيت هدهد جميل على الشجرة',
        'فناء المدرسة ملى بالأشجار الرائعة',
        'أقبل التلميذ من المحاضرة حزينا ',
        'تسعى مصر للتقدم فى مجال الصناعة ',
        'الصياد فى البحر أولاده يلعبون معه',
        'سافر أبي إلى الحج هذا العام',
        'اشترك الولد مع ابيه فى العمل',
        'تلوث المياة يؤدى إلى هلاك البشرية',
        'نبيل يلعب مع اخوة مصطفى بالعجلة',
        'ممارسة الرياضة للجسم والقراءة للعقل',
        'القارب الجديد يهتز بشدة فى المياة',
        'أسرة عمى أسرة متعاونة ومستقرة',
        'تمشى أمى للبيت بسرعة ولهفة',
        'التماثيل فى الاقصر تجلب السياح',
        ' تقع الازهار فى فصل الصيف',
        'لا تتعب نفسك من أجل شخص لا يستحق',
        'تعتنى الأم بصغارها وتخاف عليهم ',
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
      ranNums:[],
    };
  }
  create_random_uniqe=()=>{

     var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
     ranNums1 = [],
     i = nums.length,
     j = 0;
     while (i--) {
     j = Math.floor(Math.random() * (i+1));
     ranNums1.push(nums[j]);
     this.state.ranNums.push(nums[j]);
     nums.splice(j,1);
     console.log(ranNums1); }}

  componentDidMount() {
    this.create_random_uniqe();
    this.render_statements();

    let statement_timer = setInterval(() => {
      this.render_statements();
      console.log('red in interval', this.state.red);

    }, 5000);

    this.setState({statement_timer});

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
  }

  render_statements = () => {
    if (this.state.index_OF_statement < this.state.statments.length - 1) {
      this.state.index_OF_statement = this.state.index_OF_statement + 1;
    }
    if (this.state.index_OF_statement === 7) {
      this.check_index_of_statement();
      clearInterval(this.state.timer);
      clearInterval(this.state.statement_timer);
      console.log('clear the interval');
    }

    
    var random_statment_index = this.state.ranNums[this.state.index_OF_statement];
    var statment = this.state.statments[random_statment_index];
    let index = [Math.floor(Math.random() * 6) + 1];
    let index_Colors = [Math.floor(Math.random() * 6) + 1];
    var index_Red = this.state.ranNums[this.state.index_OF_statement];
   
    this.setState({
      string: statment,
      index: index,
      index_Colors: index_Colors,
      color: this.state.colors1[index_Colors],
      color2: this.state.colors2[index_Colors],
      index_Red:index_Red,
      red: this.state.isRed[index_Red],
      minutes_Counter: '00',
      seconds_Counter: '00',
    });

  };
  check_index_of_statement = () => {
    if (this.state.index_OF_statement === 7) {
      var isPressed = 3;
      var average = 0;
      this.state.timer_array.forEach(elem => (average += elem));
      this.setState(
        {
          minutes_Counter: '00',
          seconds_Counter: '00',
          isPressed: isPressed,
          average: average,
        },
        () => {
          this.props.changeState(this.state.isPressed, this.state.average);
        },
      );
    }
  };
  move = () => {
    var min = Number(this.state.minutes_Counter);
    var sec = Number(this.state.seconds_Counter);
    var millisecodn = sec * 1000 + min * 60 * 1000;
    this.state.timer_array.push(millisecodn);

    this.render_statements(this.state.index_OF_statement);
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
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              margin: 20,
              color: '#000',
            }}>
            {this.state.minutes_Counter} : {this.state.seconds_Counter}
          </Text>
          {this.state.red === 1 ? (
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
          ) : this.state.red === 2 ? (
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
    );
  }
}
