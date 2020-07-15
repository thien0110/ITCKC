import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../res/Images';
import SlideShow from './customs/SlideShow';
import Loading from './customs/Loading';
import FlatListHorizontal from './customs/FlatListHorizontal';
import Block from './customs/Block';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MenuComponent extends Component {
  componentDidMount() {
    this.props.getMenuNewsAction();
  }
  showNews(heading, data) {
    return (
      <View>
        <Text style={{fontWeight: 'bold', marginLeft: 15}}>{heading}</Text>
        <FlatListHorizontal data={data}></FlatListHorizontal>
      </View>
    );
  }
  showBody() {
    const data =this.props.data;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <SlideShow data={data}></SlideShow>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              paddingHorizontal: 15,
              marginBottom: 7.5,
            }}>
            <Block
              onPress={() => {
                this.props.navigation.navigate('TabSchool');
              }}
              title={'Thông tin nhà trường'}
              iconName={Images.iconSchool}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('TabSchool');
              }}
              title={'Hoạt động ngoại khóa'}
              iconName={Images.iconExercise}
              marginBottom={15}
              marginLeft={15}
              marginRight={15}></Block>

            <Block
              onPress={() => {
                this.props.navigation.navigate('LearningInfo');
              }}
              title={'Thông tin học tập'}
              iconName={Images.iconBooks}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('TabSchool');
              }}
              title={'Thông tin khoa'}
              iconName={Images.iconIt}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('TabSchool');
              }}
              title={'Thông tin việc làm'}
              iconName={Images.iconProject}
              marginLeft={15}
              marginRight={15}></Block>
            <Block
              onPress={() => {
                this.props.navigation.navigate('TabSchool');
              }}
              title={'Cựu sinh viên'}
              iconName={Images.iconTeam}></Block>
          </View>
          {this.showNews('Thông tin từ khoa', data)}
          {this.showNews('Hôm nay ăn gì?', data)}
          {this.showNews('Thời sự hôm nay?', data)}
        </ScrollView>
      </View>
    );
  }
  render() {
    // const {itemId} = this.props.route.params;
    // console.warn(itemId, 'menu');
    const {isFetching} =this.props;
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.background,
          flex: 1,
        }}>
        <HeaderNavigation
          iconRight={Images.iconBell}
          haveSearch={true}
          color={Colors.navigation}
          onClickRight={()=>{this.props.navigation.navigate('Noti');}}></HeaderNavigation>
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
