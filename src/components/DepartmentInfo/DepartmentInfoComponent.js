import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import HeaderNavigation from '../customs/HeaderNavigation';
import ItemSlideShow from '../customs/ItemSlideShow';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../../res/Images';

import Loading from '../customs/Loading';

export default class DepartmentInfoComponent extends Component {
  componentDidMount(){
    this.props.getDepartmentInfoAction();
  }
  showBody() {
    const {data,getDepartmentInfoAction, isFetching} = this.props;
    if (data && data.length) {
      return (
        <View style={{flex: 1, paddingTop: 15}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            onRefresh={()=>getDepartmentInfoAction()}
                refreshing={isFetching}
            renderItem={({item}) => {
              return (
                <ItemSlideShow
                  item={item}
                  onPress={(item) => {
                    this.props.navigation.navigate('PostDetail', {item: item});
                  }}
                />
              );
            }}
          />
        </View>
      );
    }}
    render() {
      const {isFetching, data} = this.props;
        return (
            <View style={{flex: 1,}}>
            <HeaderNavigation
              iconLeft={Images.iconBack}
              color={Colors.backgroundBlue}
              onClickLeft={() => {
                this.props.navigation.goBack();
              }}
              title={'Thông tin khoa'}
              titleColor={Colors.white}></HeaderNavigation>
              {this.showBody()}
              {isFetching && <Loading></Loading>}
          </View>
        )
    }
}
