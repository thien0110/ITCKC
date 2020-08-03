import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
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
  suggestItem(value) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({value});
          this.props.searchAction(value);
        }}
        style={{
          backgroundColor: Colors.grayOpacity,
          borderRadius: 30,
          padding: 10,
          marginRight: 15,
          marginBottom: 15,
        }}>
        <Text style={{color: Colors.gray2}}>{value}</Text>
      </TouchableOpacity>
    );
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
                <SlideShowItem
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
    } else
      return (
        <View style={{flexDirection: 'row', padding: 15, flexWrap: 'wrap'}}>
          {this.suggestItem('Cơm gà')}
          {this.suggestItem('Cơm thịt kho mắm ruốc')}
          {this.suggestItem('Canh chua cá lóc')}
          {this.suggestItem('Pizza')}
          {this.suggestItem('Bún thịt nướng')}
          {this.suggestItem('Xem điểm Cao Thắng')}
        </View>
      );
  }
  render() {
    const {data, message, isFetching, searchAction, navigation} = this.props;
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
