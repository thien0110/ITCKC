import React, {Component} from 'react';
import {Text, View, Image, ScrollView,FlatList} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Article from '../customs/Article';

import Loading from '../customs/Loading';
import {objectIsNull} from '../../res/Functions';
import ItemSlideShow from '../customs/ItemSlideShow';
import {FlatListHorizontal} from '../customs/FlatListHorizontal';
export default class SchoolInfoComponent extends Component {
  componentDidMount() {
    this.props.getSchoolInfoAction();
  }
  // showNews(heading, data) {
  //   return (
  //     <View>
  //       <Text style={{fontWeight: 'bold', marginLeft: 15}}>{heading}</Text>
  //       <FlatListHorizontal
  //         data={data}
  //         onPress={(item) => {
  //           this.props.navigation.navigate('PostDetail', {item: item});
  //         }}></FlatListHorizontal>
  //     </View>
  //   );
  // }
  showBody() {
    const {data,getSchoolInfoAction, isFetching} = this.props;
    if (!objectIsNull(data)) {
      return (
            <View style={{flex: 1, paddingTop: 15}}>
              <FlatList
                data={data}
                keyExtractor={(item, index) => 'key' + index}
                onRefresh={()=>getSchoolInfoAction()}
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
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
