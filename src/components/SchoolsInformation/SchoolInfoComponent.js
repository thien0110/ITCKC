import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Article from '../customs/Article';

import Loading from '../customs/Loading';
import {objectIsNull} from '../../res/Functions';

import {FlatListHorizontal} from '../customs/FlatListHorizontal';
export default class SchoolInfoComponent extends Component {
  componentDidMount() {
    this.props.getSchoolInfoAction();
  }
  showNews(heading, data) {
    return (
      <View>
        <Text style={{fontWeight: 'bold', marginLeft: 15}}>{heading}</Text>
        <FlatListHorizontal
          data={data}
          onPress={(item) => {
            this.props.navigation.navigate('PostDetail', {item: item});
          }}></FlatListHorizontal>
      </View>
    );
  }
  showBody() {
    const {data} = this.props;
    if (!objectIsNull(data)) {
      return (
        <View style={{flex: 1}}>
          {this.showNews('Học phí', data)}
          {this.showNews('Bảo hiểm', data)}
          {this.showNews('Khác', data)}
        </View>
      );
    } else return <Text>Không kết nối được tới Server</Text>;
  }
  render() {
    const {isFetching} = this.props;
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
        <ScrollView style={{marginTop: 15}}>{this.showBody()}</ScrollView>
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
