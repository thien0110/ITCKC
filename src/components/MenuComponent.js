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
import FlatListHorizontal from './customs/FlatListHorizontal';
import Block from './customs/Block';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const dummyData = [
  {
    heading: 'Sài gòn, hôm nay ăn gì?',
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    heading: 'Thông tin nhà trường?',
    title: 'Food inside a Bowl, Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    heading: 'Trùm cuối khao 60k?',
    title: 'Vegatable Salad',
    url:
      'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];
export default class MenuComponent extends Component {
  componentDidMount() {}

  showNews(heading, data) {
    return (
      <View>
        <Text style={{fontWeight: 'bold', marginLeft: 15}}>{heading}</Text>
        <FlatListHorizontal data={data}></FlatListHorizontal>
      </View>
    );
  }
  showBody() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <SlideShow data={dummyData}></SlideShow>
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
          {this.showNews('Thông tin từ khoa', dummyData)}
          {this.showNews('Hôm nay bạn ăn gì?', dummyData)}
          {this.showNews('Hôm nay bạn ăn gì?', dummyData)}
        </ScrollView>
      </View>
    );
  }
  render() {
    // const {itemId} = this.props.route.params;
    // console.warn(itemId, 'menu');
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
      </View>
    );
  }
}
