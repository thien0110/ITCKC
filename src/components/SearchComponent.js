import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity,FlatList} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Images from '../res/Images';
import SlideShowItem from './customs/ItemSlideShow';
import Loading from './customs/Loading';
const window = Dimensions.get('window');

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  componentWillUnmount() {
    this.props.formatData();
  }

  showBody() {
    const {data} =this.props;
    if (data && data.length) {
      return (
        <View style={{flex:1, paddingTop:15}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
              return <SlideShowItem item={item} />;
            }}
          />
        </View>
      );
    } else return null;
  }
  render() {
    const {
      data,
      message,
      isFetching,
      searchAction,
      navigation,
    } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          searching={true}
          color={Colors.navigation}
          buttonRight={true}
          textButtonRight={'Đóng'}
          valueSearch={this.state.value}
          onClickButtonRight={() => {
            navigation.goBack();
          }}
          onChangeTextSearch={(text) => {
            this.setState({value: text});
          }}
          onSearch={() => {
            searchAction(this.state.value);
          }}></HeaderNavigation>
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
