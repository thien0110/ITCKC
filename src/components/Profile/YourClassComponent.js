import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions,FlatList} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import {objectIsNull,arrayIsEmpty} from '../../res/Functions';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Loading from '../customs/Loading';
import {ScrollView} from 'react-native-gesture-handler';
import SubjectsBlock from '../customs/SubjectsBlock';

export default class YourClassComponent extends Component {
    componentDidMount(){
      const input={maLopHoc:"1", hocKi:'1'}
      this.props.getYourClassAction(input)
    }
  showBody() {
      
    const data = this.props.data;
    let dataList = [];
    if (!arrayIsEmpty(data)) {
      dataList = data;
    }
    return (
      <FlatList
        data={dataList}
        style={{paddingHorizontal: 15, marginTop:10}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <SubjectsBlock
              onPress={() => {
                this.props.navigation.navigate('Subject', {item});
              }}
              name={item.tenLopHocPhan}
              numberOf={item.soLuongSV}
              teacherName={item.maGiaoVien}
              marginBottom={15}></SubjectsBlock>
          );
        }}></FlatList>
    );
  }
  render() {
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
          title={'Lớp của bạn'}
          titleColor={Colors.white}></HeaderNavigation>
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
// const dataList = [
//     {
//       subjectCode: '0001',
//       name: 'Toán rời rạc',
//       nameAcronym: 'TTR',
//       subjectType: 'Lý thuyết',
//       numberOf:'101',
//       semester: 'Hoc ky 2',
//       teacherName: 'Nguyễn Vũ Dzũng',
//     },
//     {
//       subjectCode: '0002',
//       name: 'Thiết kế web',
//       nameAcronym: 'THTKW',
//       subjectType: 'Thực hành',
//       numberOf:'101',
//       semester: 'Học kỳ 2',
//       teacherName: 'Lữ Cao Tiến',
//     },
//     {
//       subjectCode: '0003',
//       name: 'Thiết kế web',
//       nameAcronym: 'LTTKW',
//       subjectType: 'Lý thuyết',
//       numberOf:'101',
//       semester: 'Học kỳ 2',
//       teacherName: 'Vũ Đình Bảo',
//     },
//     {
//       subjectCode: '0004',
//       name: 'Đồ họa ứng dụng',
//       nameAcronym: 'DHUD',
//       subjectType: 'Lý thuyết',
//       numberOf:'101',
//       semester: 'Học kỳ 2',
//       teacherName: 'Lữ Cao Tiến',
//     },
//     {
//       subjectCode: '0004',
//       name: 'Đồ họa ứng dụng',
//       nameAcronym: 'DHUD',
//       subjectType: 'Lý thuyết',
//       numberOf:'101',
//       semester: 'Học kỳ 2',
//       teacherName: 'Lữ Cao Tiến',
//     },
//     {
//       subjectCode: '0004',
//       name: 'Đồ họa ứng dụng',
//       nameAcronym: 'DHUD',
//       subjectType: 'Lý thuyết',
//       numberOf:'101',
//       semester: 'Học kỳ 2',
//       teacherName: 'Lữ Cao Tiến',
//     },
//     {
//       subjectCode: '0004',
//       name: 'Đồ họa ứng dụng',
//       nameAcronym: 'DHUD',
//       subjectType: 'Lý thuyết',
//       numberOf:'101',
//       semester: 'Học kỳ 2',
//       teacherName: 'Lữ Cao Tiến',
//     },
//   ]