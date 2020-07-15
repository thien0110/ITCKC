import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Images from '../../res/Images';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubjectsBlock from '../customs/SubjectsBlock';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class LearningInfoComponent extends Component {
  showBody() {
    const data = [
      {
        subjectCode: '0001',
        name: 'Toán rời rạc',
        nameAcronym: 'TTR',
        subjectType: 'Lý thuyết',
        semester: 'Hoc ky 2',
        teacherName: 'Nguyễn Vũ Dzũng',
      },
      {
        subjectCode: '0002',
        name: 'Thiết kế web',
        nameAcronym: 'THTKW',
        subjectType: 'Thực hành',
        semester: 'Học kỳ 2',
        teacherName: 'Lữ Cao Tiến',
      },
      {
        subjectCode: '0003',
        name: 'Thiết kế web',
        nameAcronym: 'LTTKW',
        subjectType: 'Lý thuyết',
        semester: 'Học kỳ 2',
        teacherName: 'Vũ Đình Bảo',
      },
      {
        subjectCode: '0004',
        name: 'Đồ họa ứng dụng',
        nameAcronym: 'DHUD',
        subjectType: 'Lý thuyết',
        semester: 'Học kỳ 2',
        teacherName: 'Lữ Cao Tiến',
      },
      {
        subjectCode: '0004',
        name: 'Đồ họa ứng dụng',
        nameAcronym: 'DHUD',
        subjectType: 'Lý thuyết',
        semester: 'Học kỳ 2',
        teacherName: 'Lữ Cao Tiến',
      },
      {
        subjectCode: '0004',
        name: 'Đồ họa ứng dụng',
        nameAcronym: 'DHUD',
        subjectType: 'Lý thuyết',
        semester: 'Học kỳ 2',
        teacherName: 'Lữ Cao Tiến',
      },
      {
        subjectCode: '0004',
        name: 'Đồ họa ứng dụng',
        nameAcronym: 'DHUD',
        subjectType: 'Lý thuyết',
        semester: 'Học kỳ 2',
        teacherName: 'Lữ Cao Tiến',
      },
    ];
    return (
      <FlatList
        data={data}
        style={{flex: 1, padding: 15}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <SubjectsBlock
              onPress={() => {}}
              name={item.name}
              semester={item.semester}
              teacherName={item.teacherName}
              marginBottom={10}></SubjectsBlock>
          );
        }}></FlatList>
    );
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.background,
          flex: 1,
        }}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.navigation}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'Thông tin học tập'}
          titleColor={Colors.white}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   classType:{
//     fontSize: 20,fontWeight: 'bold', marginBottom:5
//   }
// });
