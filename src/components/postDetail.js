import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HeaderNavigation from '../components/customs/HeaderNavigation';
import Images from '../res/Images';
import {arrayIsEmpty, objectIsNull, stringIsEmpty} from '../res/Functions';

import Colors from '../res/Colors';

// import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

export default class postDetail extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        // 'Head',
        // 'Head2',
        // 'Head3',
        // 'Head4',
        // 'Head5',
        // 'Head6',
        // 'Head7',
        // 'Head8',
        // 'Head9',
      ],
      // widthArr: [60, 60, 80, 100, 120, 140, 160, 180, 200],
    };
  }
  coverImg() {
    return <View>{/* <Image soure={}
            ></Image> */}</View>;
  }

  contentPost() {
    return (
      <View>
        <Image source={datanews.data[0].anhBia}></Image>
      </View>
    );
  }
  bodyVideo() {
    return (
      <ScrollView>
        <Image
          source={{uri: datanews.data[0].anhBia}}
          style={{
            width: windowWidth,
            height: windowWidth / 3,
            resizeMode: 'cover',
          }}></Image>
        <View style={{padding: windowWidth * (5 / 100)}}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              TUYỂN SINH CAO ĐẲNG CÔNG NGHỆ THÔNG TIN CHÍNH QUY NĂM 2020
            </Text>
            <Text style={{fontSize: 15}}>
              Khoa Công nghệ Thông tin trường Cao đẳng Kỹ thuật Cao Thắng thông
              báo tuyển sinh hệ Cao Đẳng Công Nghệ Thông Tin Chính Quy năm 2020
              trên toàn quốc.
            </Text>
          </View>
         
          <View>
            {/* <WebView source={{ uri: 'https://reactnative.dev/' }} /> */}
          </View>
          <View>
            <Text>I. ĐIỀU KIỆN ĐĂNG KÝ</Text>
            <Text>
              Thí sinh tốt nghiệp THPT; xét tuyển dựa vào kết quả các môn thi
              của thí sinh trong kỳ thi THPT quốc gia năm 2020 tương ứng với các
              tổ hợp môn xét tuyển (A00, A01, D01); kỳ thi đánh giá năng lực do
              Đại học Quốc gia TP. HCM tổ chức; học bạ THPT – 03 học kỳ (HK 1, 2
              lớp 11 & HK 1 lớp 12).
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  bodyTable() {
    return (
      <ScrollView>
        <Image
          source={{uri: datanews.data[0].anhBia}}
          style={{
            width: windowWidth,
            height: windowWidth / 3,
            resizeMode: 'cover',
          }}></Image>
        <View style={{padding: windowWidth * (5 / 100)}}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              TUYỂN SINH CAO ĐẲNG CÔNG NGHỆ THÔNG TIN CHÍNH QUY NĂM 2020
            </Text>
            <Text style={{fontSize: 15}}>
              Khoa Công nghệ Thông tin trường Cao đẳng Kỹ thuật Cao Thắng thông
              báo tuyển sinh hệ Cao Đẳng Công Nghệ Thông Tin Chính Quy năm 2020
              trên toàn quốc.
            </Text>
          </View>
          {/* <View style={{paddingBottom: 15}}>
                <View style={styles.container}>
                  <ScrollView horizontal={true}>
                    <View>
                      <Table
                        borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
                        <Row
                          data={state.tableHead}
                          widthArr={state.widthArr}
                          style={styles.header}
                          textStyle={styles.text}
                        />
                      </Table>
                      <View style={{}}>
                        <Table
                          borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
                          {tableData.map((rowData, index) => (
                            <Row
                              key={index}
                              data={rowData}
                              widthArr={state.widthArr}
                              style={[
                                styles.row,
                                index % 2 && {backgroundColor: '#F7F6E7'},
                              ]}
                              textStyle={styles.text}
                            />
                          ))}
                        </Table>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View> */}
          <View>
            <Text>I. ĐIỀU KIỆN ĐĂNG KÝ</Text>
            <Text>
              Thí sinh tốt nghiệp THPT; xét tuyển dựa vào kết quả các môn thi
              của thí sinh trong kỳ thi THPT quốc gia năm 2020 tương ứng với các
              tổ hợp môn xét tuyển (A00, A01, D01); kỳ thi đánh giá năng lực do
              Đại học Quốc gia TP. HCM tổ chức; học bạ THPT – 03 học kỳ (HK 1, 2
              lớp 11 & HK 1 lớp 12).
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  bodyImg(data) {
    return (
      <ScrollView>
        <Image
          source={{uri: datanews.data[0].anhBia}}
          style={{
            width: windowWidth,
            height: windowWidth / 3,
            resizeMode: 'cover',
          }}></Image>
        <View style={{padding: windowWidth * (5 / 100)}}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              TUYỂN SINH CAO ĐẲNG CÔNG NGHỆ THÔNG TIN CHÍNH QUY NĂM 2020
            </Text>
            <Text style={{fontSize: 15}}>
              Khoa Công nghệ Thông tin trường Cao đẳng Kỹ thuật Cao Thắng thông
              báo tuyển sinh hệ Cao Đẳng Công Nghệ Thông Tin Chính Quy năm 2020
              trên toàn quốc.
            </Text>
          </View>
          {/* <View style={{paddingBottom: 15}}>
                <View style={styles.container}>
                  <ScrollView horizontal={true}>
                    <View>
                      <Table
                        borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
                        <Row
                          data={state.tableHead}
                          widthArr={state.widthArr}
                          style={styles.header}
                          textStyle={styles.text}
                        />
                      </Table>
                      <View style={{}}>
                        <Table
                          borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
                          {tableData.map((rowData, index) => (
                            <Row
                              key={index}
                              data={rowData}
                              widthArr={state.widthArr}
                              style={[
                                styles.row,
                                index % 2 && {backgroundColor: '#F7F6E7'},
                              ]}
                              textStyle={styles.text}
                            />
                          ))}
                        </Table>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View> */}
          <View>
            <Text>I. ĐIỀU KIỆN ĐĂNG KÝ</Text>
            <Text>
              Thí sinh tốt nghiệp THPT; xét tuyển dựa vào kết quả các môn thi
              của thí sinh trong kỳ thi THPT quốc gia năm 2020 tương ứng với các
              tổ hợp môn xét tuyển (A00, A01, D01); kỳ thi đánh giá năng lực do
              Đại học Quốc gia TP. HCM tổ chức; học bạ THPT – 03 học kỳ (HK 1, 2
              lớp 11 & HK 1 lớp 12).
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  render() {
    const state = this.state;
    const tableData = [];
    if (!objectIsNull(state)) {
      for (let i = 0; i < 12; i += 1) {
        const rowData = [];
        for (let j = 0; j < 5; j += 1) {
          rowData.push(`${i}${j}`);
        }
        tableData.push(rowData);
      }
    }
    return (
      <View style={{flex: 1}}>
        <HeaderNavigation
          title={'Bài viết'}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconRight={Images.icontabmenu}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {/* {this.contentPost()}; */}
        <View style={{flex: 1}}>
          {this.bodyVideo()}
         
        </View>
      </View>
    );
  }
}
const datanews = {
  message: 'Lấy thành công',
  data: [
    {
      _id: '518cbb1389da79d3a25453f9',
      loaiTinTuc: 'Học phí',
      DanhMuc: 'Trường',
      tieuDe: 'Tiêu đề bài viết',
      moTaNgan: 'Mô tả ngắn',
      noiDung: 'lijkj',
      anhBia: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
      nguoiViet: 'maGV trong bảng Giáo Viên',
      created_at: 'DateTime',
      updated_at: 'DateTime',
      noiBat: 'true(nổi bật)',
    },
  ],
};
const styles = StyleSheet.create({
  container: {padding: 16, paddingTop: 30},
  header: {height: 50, backgroundColor: Colors.backgroundBlue},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});
