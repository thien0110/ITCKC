import React, {Component} from 'react';
import {Text, View,FlatList, SafeAreaView} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../../res/Images';
import Loading from '../customs/Loading';
import ItemSlideShow from '../customs/ItemSlideShow';
import {objectIsNull, stringIsEmpty, arrayIsEmpty,SplitDate} from '../../res/Functions';

export default class AlumniComponent extends Component {
  componentDidMount() {
    this.props.getItCenterInfoAction();
  }
  showBody() {
    const {data} = this.props;
    let dataList = [];
    if (!arrayIsEmpty(data)) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].loaiBaiViet === 'LBV02') dataList.push(data[i]);
      }
    }
    // console.warn(dataList)
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
    const {isFetching} =this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.backgroundBlue}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'Cựu sinh viên'}
          titleColor={Colors.white}></HeaderNavigation>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {this.showBody()}
          {isFetching && <Loading></Loading>}
        </View>
      </SafeAreaView>
    );
  }
}
