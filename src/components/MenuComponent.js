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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const dummyData = [
  {
    heading:'Sài gòn, hôm nay ăn gì?',
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    heading:'Thông tin nhà trường?',
    title: 'Food inside a Bowl, Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    heading:'Trùm cuối khao 60k?',
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
  showBlock(onPress, title, iconName, marginBottom, marginLeft, marginRight) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: (windowWidth - 60) / 3,
            height: (windowWidth - 60) / 3,
            borderRadius: 15,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            padding: 15,
            shadowColor: Colors.black,
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <Image
            source={iconName}
            style={{
              width: 40,
              height: 40,

              resizeMode: 'contain',
            }}></Image>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showNews(heading, data){
    return(
      <View>
      <Text style={{fontWeight:'bold', marginLeft:15}}>{heading}</Text>
      <FlatListHorizontal data={data}></FlatListHorizontal>
      </View>
    )
    
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
            paddingHorizontal:15,
            marginBottom:7.5,
          }}>
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Thông tin nhà trường',
            Images.iconSchool,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Hoạt động ngoại khóa',
            Images.iconExercise,
            15,
            15,
            15,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('LearningInfo');
            },
            'Thông tin học tập',
            Images.iconBooks,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Thông tin khoa',
            Images.iconIt,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Thông tin việc làm',
            Images.iconProject,
            0,
            15,
            15,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Cựu sinh viên',
            Images.iconTeam,
          )}
        </View>
        {this.showNews("Thông tin từ khoa",dummyData )}
        {this.showNews("Hôm nay bạn ăn gì?",dummyData )}
        {this.showNews("Hôm nay bạn ăn gì?",dummyData )}
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
          color={Colors.white}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
