import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Article from '../customs/Article';

import FlatListHorizontal from '../customs/FlatListHorizontal';
export default class SchoolInfoComponent extends Component {
    
    showNews(heading, data) {
        return (
          <View>
            <Text style={{fontWeight: 'bold', marginLeft: 15}}>{heading}</Text>
            <FlatListHorizontal data={data}></FlatListHorizontal>
          </View>
        );
      }
  showBody() {
      const data= [
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
      ]
    return (
      <View style={{flex: 1,}}>
        {this.showNews('Học phí', data)}
        {this.showNews('Bảo hiểm', data)}
        {this.showNews('Khác', data)}
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={'Thông tin nhà trường'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
          <ScrollView style={{marginTop:15}}>
        {this.showBody()}</ScrollView>
      </View>
    );
  }
}
