import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import ItemSlideShow from '../customs/ItemSlideShow';

import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../../res/Images';

export default class WorkInfoComponent extends Component {
  componentDidMount() {
    this.props.getItCenterInfoAction();
  }
  showBody() {
    const {data} = this.props;
    let dataList =[];
    for(let i=0;i<data.length;i++){
      if(data[i].loaiBaiViet==='LBV02')
      dataList.push(data[i]);
    }
    console.warn(dataList)
    if (dataList && dataList.length) {
      return (
        <View style={{flex: 1, paddingTop: 15}}>
          <FlatList
            data={dataList}
            keyExtractor={(item, index) => 'key' + index}
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
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.backgroundBlue}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'Thông tin việc làm'}
          titleColor={Colors.white}></HeaderNavigation>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 25, color: Colors.gray2}}>
            {' '}
            Chức năng đang phát triển!{' '}
          </Text> */}
          {this.showBody()}
        </View>
      </View>
    );
  }
}
