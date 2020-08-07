import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import HeaderNavigation from '../customs/HeaderNavigation';
import ItemSlideShow from '../customs/ItemSlideShow';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../../res/Images';


export default class ItCenterComponent extends Component {
  componentDidMount(){
    this.props.getItCenterInfoAction();
  }
  showBody() {
    const {data} = this.props;
    if (data && data.length) {
      return (
        <View style={{flex: 1, paddingTop: 15}}>
          <FlatList
            data={data}
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
    }}
  render() {
    return (
      <View style={{flex: 1,}}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.backgroundBlue}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'Trung tâm tin học'}
          titleColor={Colors.white}></HeaderNavigation>
          <View style={{flex:1, }}>
          {this.showBody()}
          </View>
       
      </View>
    );
  }
}
