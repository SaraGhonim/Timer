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
import {set} from 'react-native-reanimated';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.render_statements = this.render_statements.bind(this);
    this.move = this.move.bind(this);
    this.create_random_uniqe = this.create_random_uniqe.bind(this);

    this.check_index_of_statement = this.check_index_of_statement.bind(this);

    this.state = {
      isPressed: 2,
      isClicked: false,
      isRed: [1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 1, 1, 1, 1],
      red: 2,
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      statments: [
        'ان المحافظة على البيئة نظيفة ضرورة ملحة',
        'لقد رأيت هدهد جميل على الشجرة ليلة أمس',
        'إن فناء المدرسة ملى بالأشجار الرائعةستعجبك كثيرا',
        'أقبل التلميذ من المحاضرة حزينا ولا أعلم السبب ',
        'تسعى مصر للتقدم فى مجال الصناعة والزراعة والسياحة',
        'الصياد فى البحر أولاده يلعبون معه وهو يسعى للرزق',
        'سافر أبي وأمي وأخي  إلى الحج هذا العام',
        'هذا الولد متحمل للمسئولية اشترك الولد مع ابيه فى العمل',
        'يجب ان نحافظ على المياه ،تلوث المياة يؤدى إلى هلاك البشرية',
        'اشترى الأب العجلة ونبيل يلعب مع اخوة مصطفى بها ',
        'ممارسة الرياضة للجسم والقراءة للعقل مفيدة جدا',
        'القارب الجديد يهتز بشدة فى المياةانا خائف',
        'أسرة عمى أسرة متعاونة ومستقرة انا احبهم جدا',
        'تمشى الأم للبيت بسرعة ولهفة لترى أبناءها',
        'التماثيل فى الاقصر تجلب السياح لذا يجب المحافظة عليها',
        ' تقع الازهار فى فصل الخريف و تزدهر فى فصل الربيع',
        'تعتنى الأم بصغارها وتخاف عليهم وتوفر لهم كل ما تقدر عليه',
        'حضر الرئيس راكبا سيارته صباحا ومعه كثير من الحراس',
        'أسرة عمى أسرة متعاونة ومستقرة انا احبهم جدا',
        'يجب ان نحافظ على المياه ،تلوث المياة يؤدى إلى هلاك البشرية',
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
      number_of_wrong_answers: 0,
      button_color: '#006b8b',
      index_OF_statement: 0,
      average: 0,
      ranNums: [],
      isCalculated:false,
    };
  }
  create_random_uniqe = () => {
    var nums = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
      ],
      ranNums1 = [],
      i = nums.length,
      j = 0;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums1.push(nums[j]);
      this.state.ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
  };
  async componentDidMount() {
    this.create_random_uniqe();
    this.render_statements();
    const interval =
  1000 * parseInt(this.props.navigation.state.params.interval);

    // let statement_timer = setInterval(() => {
    //   this.render_statements();
    //   console.log('red in interval', this.state.red);
    // }, 5000);

    // this.setState({statement_timer});

   

    let timer = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;

      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
      // console.log(this.state.isClicked)
      // console.log(this.state.red)

      // if (this.state.isClicked === false && this.state.red !== 1) {
      //   this.setState({isClicked: true},()=>{

      //     setTimeout(() => {
      //       this.render_statements(this.state.index_OF_statement);
      //       console.log(interval);
      //       this.setState({isClicked: false});
      //     }, interval);
       
      //   })
        
      //   // console.log(this.state.isClicked)
      //   // console.log(this.state.red)
      // }

      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState({timer});
  }

  render_statements = () => {
    if (this.state.index_OF_statement < this.state.statments.length - 1) {
      var index_OF_statement = this.state.index_OF_statement + 1;
      this.setState({index_OF_statement: index_OF_statement});
    }

    var random_statment_index = this.state.ranNums[
      this.state.index_OF_statement
    ];
    var statment = this.state.statments[random_statment_index];
    let index = [Math.floor(Math.random() * 6) + 1];
    let index_Colors = [Math.floor(Math.random() * 6) + 1];
    var index_Red = this.state.ranNums[this.state.index_OF_statement];

    console.log('this is the number of red', this.state.isRed[index_Red]);

    this.setState({
      string: statment,
      index: index,
      index_Colors: index_Colors,
      color: this.state.colors1[index_Colors],
      color2: this.state.colors2[index_Colors],
      index_Red: index_Red,
      red: this.state.isRed[index_Red],
      minutes_Counter: '00',
      seconds_Counter: '00',
    });

    if (this.state.index_OF_statement >= 8) {
      // setTimeout(() => {
      //   this.check_index_of_statement();
      //   clearInterval(this.state.timer);
      //   clearInterval(this.state.statement_timer);
      //   console.log('clear the interval');
      // }, 5000);

      this.check_index_of_statement();
      clearInterval(this.state.timer);
      clearInterval(this.state.statement_timer);
    }
  };
  check_index_of_statement = () => {
    var average = 0;
    this.state.timer_array.forEach(elem => (average += elem));
    this.setState(
      {
        minutes_Counter: '00',
        seconds_Counter: '00',
        isPressed: 3,
        average: average,
        string: '',
      },
      () => {
        //   this.props.changeState(this.state.isPressed, this.state.average);
        console.log();
      },
    );
  };
  move = () => {
    console.log('the red',this.state.red)
    console.log('is clicked',this.state.isClicked)

    this.setState({isPressed: 2});
    this.setState({isClicked: true}, () => {

      const interval =
      1000 * parseInt(this.props.navigation.state.params.interval);
    
      console.log(this.state.isClicked);
      if (this.state.red === 1) {

        var min = Number(this.state.minutes_Counter);
        var sec = Number(this.state.seconds_Counter);
        var millisecodn = sec * 1000 + min * 60 * 1000;
        
        if(this.state.isCalculated === false)
        {this.state.timer_array.push(millisecodn);
          this.setState({isCalculated:true})
        console.log(this.state.timer_array);
        }
        setTimeout(() => {
          this.render_statements(this.state.index_OF_statement);
          this.setState({isCalculated:false})

        }, interval);
      } else {
        var number_of_wrong_answers = this.state.number_of_wrong_answers + 1;
        this.setState({isPressed: 1});

        this.setState(
          {number_of_wrong_answers: number_of_wrong_answers},
          () => {
            console.log(
              'red not equell 1 he made mistake the button will turn red no word is red ',
              this.state.red,
            );
             setTimeout(() => {
               this.render_statements(this.state.index_OF_statement);
             }, interval);
          },
        );
      }
  



    });

    this.setState({isClicked: false});

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

          <View style={{margin: 10}}>
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
                    style={{
                      color:
                        this.state.index[0] === ind ? 'red' : this.state.color,
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
                        this.state.index[0] == ind
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

          {this.state.isPressed === 3 ? (
            <View>
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={() =>  this.props.navigation.navigate
                  ('Results', {
                      average: this.state.average,
                  })}>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: 'white',
                    fontSize: 20,
                  }}>
                  {' '}
                  Show Results
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={this.move}
                style={styles.buttonContainer2}>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: 'white',
                    fontSize: 20,
                  }}>
                  {' '}
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{margin: 30}}>
            <TouchableOpacity
              style={{
                backgroundColor:
                  this.state.red !== 1 && this.state.isPressed === 1
                    ? 'red'
                    : '#006b8b',
                paddingTop: 5,
                paddingBottom: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                marginTop: 10,
                marginLeft: 50,
                marginRight: 50,
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  paddingBottom: 5,
                  color: 'white',
                  fontSize: 20,
                }}>
                {' '}
                {this.state.number_of_wrong_answers}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer2: {
    // backgroundColor:this.state.button_color ,
    backgroundColor: '#006b8b',
    paddingTop: 5,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 0,
    margin: 20,
    alignItems: 'center',
    marginBottom: 5,
  },
});
