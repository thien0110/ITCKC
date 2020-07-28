import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Loading from '../customs/Loading';
import Images from '../../res/Images';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubjectsBlock from '../customs/SubjectsBlock';
import {objectIsNull, arrayIsEmpty} from '../../res/Functions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class LearningInfoComponent extends Component {
  componentDidMount() {
    this.props.getSubjectAction();
  }
  showBody() {
    const data = this.props.data;
    let dataList=[]
    if (!arrayIsEmpty(data)) {
      dataList = data;
    }
    return (
      <FlatList
        data={dataList}
        style={{flex: 1, padding: 15}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <SubjectsBlock
              onPress={() => {
                this.props.navigation.navigate('Subject', {item});
              }}
              name={item.name}
              semester={item.semester}
              teacherName={item.teacherName}
              marginBottom={10}></SubjectsBlock>
          );
        }}></FlatList>
    );
  }
  render() {
    const {isFetching, data} = this.props;
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.background,
          flex: 1,
        }}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.backgroundBlue}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'Thông tin học tập'}
          titleColor={Colors.white}></HeaderNavigation>

        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
