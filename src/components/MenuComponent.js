import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Images from '../res/Images';
import Loading from './customs/Loading';
import {FlatListHorizontal} from './customs/FlatListHorizontal';
import Block from './customs/Block';
import {arrayIsEmpty} from '../res/Functions';
import AsyncStorage from '@react-native-community/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notiState: [],
    };
  }

  componentDidMount() {
    this.props.getHotPostItAction();
    this.props.getMenuNewsAction();
    this.props.getNotiAction();
    AsyncStorage.getItem('@seenKey').then((value) => {
      const seen = JSON.parse(value);
      // console.warn(seen)
      this.setState({
        notiState: seen,
      });
    });
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {    
      AsyncStorage.getItem('@seenKey').then((value) => {
        const seen = JSON.parse(value);
        // console.warn(seen)
        this.setState({
          notiState: seen,
        });
      });
    });
  }
  showNews(heading, data) {
    return (
      <View>
        <Text style={{fontWeight: 'bold', marginLeft: 15, fontSize: 20}}>
          {heading}
        </Text>
        <FlatListHorizontal
          data={data}
          onPress={(item) => {
            this.props.navigation.navigate('PostDetail', {item: item});
          }}></FlatListHorizontal>
      </View>
    );
  }
  showBody() {
    const {dataHotKhoa, data} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              paddingHorizontal: 15,
              marginBottom: 7.5,
              marginTop: 15,
            }}>
            <Block
              onPress={() => {
                this.props.navigation.navigate('SchoolInfo');
              }}
              title={'Thông tin nhà trường'}
              iconName={Images.iconSchool}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('ItCenter');
              }}
              title={'Trung tâm tin học'}
              iconName={Images.iconTTTH}
              marginBottom={15}
              marginLeft={15}
              marginRight={15}></Block>

            <Block
              onPress={() => {
                this.props.navigation.navigate('LearningInfo');
              }}
              title={'E-Learning'}
              iconName={Images.iconElearning}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('DepartmentInfo');
              }}
              title={'Thông tin khoa'}
              iconName={Images.iconIt}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('WorkInfo');
              }}
              title={'Thông tin việc làm'}
              iconName={Images.iconProject}
              marginLeft={15}
              marginRight={15}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('Alumni');
              }}
              title={'Cựu sinh viên'}
              iconName={Images.iconTeam}></Block>
          </View>
          {!arrayIsEmpty(dataHotKhoa) && (
            <View>
              {this.showNews('Thông tin từ khoa', dataHotKhoa)}
              {this.showNews('Thông tin từ phòng ban', data)}
              {this.showNews('Thông tin từ lớp học phần', dataHotKhoa)}
              {this.showNews('Thông tin từ trung tâm tin học', data)}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
  render() {
    // const {itemId} = this.props.route.params;
    // console.warn(itemId, 'menu');
    // console.warn('menu');
    const {isFetching, dataNoti} = this.props;
    const {notiState} = this.state;
    return (
      <SafeAreaView
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.background,
          flex: 1,
        }}>
        <HeaderNavigation
          iconRight={Images.iconBell}
          isNoti={true}
          haveSearch={true}
          onClickSearch={() => {
            this.props.navigation.navigate('Search');
          }}
          color={Colors.backgroundBlue}
          badgeValue={
            !arrayIsEmpty(dataNoti) &&
            (!arrayIsEmpty(notiState)
              ? dataNoti.length - notiState.length
              : dataNoti.length)
          }
          onClickRight={() => {
            this.props.navigation.navigate('Noti', {dataNoti});
          }}></HeaderNavigation>
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </SafeAreaView>
    );
  }
}
// const data = [
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b1',
//   },
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b2',
//   },
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b3',
//   },
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b4',
//   },
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b5',
//   },
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b6',
//   },
//   {
//     tieuDe: 'Weekly Report Available',
//     moTaNgan:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     thoiGianDangBai: 'bây giờ',
//     maBaiViet: 'b7',
//   },
// ];
