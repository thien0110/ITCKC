import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,SafeAreaView
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Images from '../../res/Images';
import {
  objectIsNull,
  stringIsEmpty,
  arrayIsEmpty,
  SplitDate,
} from '../../res/Functions';
import Loading from '../customs/Loading';

const windowWidth = Dimensions.get('window').width;
export default class WorkingComponent extends Component {
  componentDidMount(){
    const {item} = this.props.route.params;
    this.props.getWorkingAction(item.maLopHocPhan)
  }
  shareBlock() {
    const {data}=this.props
    if(!arrayIsEmpty(data)){ 
      return (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
              return (
                <View style={styles.viewStyle}>
                  <View style={{padding: 10, marginBottom: 0}}>
                    <Text style={{fontSize: 18, marginLeft: 10}}>
                      Bài tập: {item.tieuDe}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                      Đã đăng: {SplitDate(item.ngayTao)}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                      {item.type}Ngày hết hạn: {item.deadLine}
                    </Text>
                    {/* <TextInput
                      style={{color: Colors.gray2, fontSize: 15, marginLeft: 10}}
                      placeholder="Thêm nhận xét..."></TextInput> */}
                  </View>
                </View>
              );
            }}></FlatList>
        </View>
      );
    }else
    return (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: Colors.gray2}}>
          Chưa có bài tập mới....
        </Text>
      </View>
    );
   
  }
  showBody() {
    return <View>{this.shareBlock()}</View>;
  }
  render() {
    const {item} = this.props.route.params;
    const {isFetching} =this.props;
    var titleHeader = '';
    if (!objectIsNull(item)) {
      titleHeader = item.name;
    }
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={titleHeader}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{padding: 15, overflow: 'hidden'}}>{this.showBody()}</View>
        {isFetching && <Loading></Loading>}
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  viewStyle: {
    alignContent: 'center',
    width: windowWidth - (windowWidth * 8) / 100,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ddd',
    // shadowColor: '#000',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
  },
});
