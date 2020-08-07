import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Loading from '../customs/Loading';
import Images from '../../res/Images';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubjectsBlock from '../customs/SubjectsBlock';
import {
  objectIsNull,
  arrayIsEmpty,
  sortArrayObject,
  sortSemester,
} from '../../res/Functions';
import {userProfile} from '../../config'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class LearningInfoComponent extends Component {
  state = {
    Semestery: '1',
    Name: '1',
    subjects: [{}],
  };
  componentDidMount() {
    this.props.getSubjectAction();
  }
  Semester(Name) {
    return (
      <View>
        <Picker
          selectedValue={this.state.Semestery}
          style={{width: 135, fontSize: 15}}
          mode={'dialog'}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({Semestery: itemValue});
          }}>
          <Picker.Item label="Học kỳ 1" value="1" />
          <Picker.Item label="Học kỳ 2" value="2" />
          <Picker.Item label="Học kỳ 3" value="3" />
          <Picker.Item label="Học kỳ 4" value="4" />
          <Picker.Item label="Học kỳ 5" value="5" />
          <Picker.Item label="Học kỳ 6" value="6" />
        </Picker>
      </View>
    );
  }

  NameSort() {
    return (
      <View>
        <Picker
          selectedValue={this.state.Name}
          style={{width: 100}}
          mode={'dialog'}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Name: itemValue})
          }>
          <Picker.Item label="A - Z" value="1" />
          <Picker.Item label="Z - A" value="2" />
        </Picker>
      </View>
    );
  }

  ShowSort() {
    return (
      <View
        style={{
          alignItems: 'center',
          // height:windowHeight/12,
          paddingHorizontal: 15,
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <Text>Sắp xếp theo: </Text>
        {this.NameSort()}
        {this.Semester()}
      </View>
    );
  }
  showBody() {
    const data = this.props.data;
    let finalData = [];
    if (!arrayIsEmpty(data)) {
      if (this.state.Name == 1) {
        finalData = data.sort(sortArrayObject('name'));
        finalData = data.filter(
          (item) => item.semester === this.state.Semestery,
        );
      } else {
        finalData = data.sort(sortArrayObject('name', 'desc'));
        finalData = data.filter(
          (item) => item.semester === this.state.Semestery,
        );
      }
    }
    return (
      <FlatList
        data={finalData}
        style={{paddingHorizontal: 15}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <SubjectsBlock
              onPress={() => {
                this.props.navigation.navigate('Subject', {item});
              }}
              name={item.name}
              numberOf={item.numberOf}
              teacherName={item.teacherName}
              marginBottom={15}></SubjectsBlock>
          );
        }}></FlatList>
    );
  }
  render() {
    console.warn("malh",userProfile.maLopHoc)
    const {isFetching, data} = this.props;
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.background,
          flex: 1,
        }}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.backgroundBlue}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'E-learning'}
          titleColor={Colors.white}></HeaderNavigation>
        {this.ShowSort()}
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
