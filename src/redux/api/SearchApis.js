//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL} from '../../config';
export function searchApi(input) {
  // console.warn(input)
  if (fakeApi) {
    return {
        resultCode: 1,
        message: "Get Thành Công",
        data: [
          {
            id:"518cbb1389da79d3a25453f1",
            title: '[THÔNG BÁO] LỊCH THI LẦN 2 – TUẦN 47 – 48 – 49',
            description:
              'Khoa CNTT xin thông báo thời gian và địa điểm thi lần 2 các môn diễn ra trong tuần 47 – 48 – 49 như sau:',
            url: 'https://cntt.caothang.edu.vn/wp-content/uploads/2018/03/2-554x399.jpg',
            time:'2020-10-01T10:12:42.288Z',
            type:'1',
            urlContent:'https://cntt.caothang.edu.vn/thong-bao-lich-thi-lan-2-cdth-18-tuan-47-48/'
          },
          {
            id:"518cbb1389da79d3a25453f2",
            title: '[TUYỂN DỤNG] CÔNG TY TNHH NEXON NETWORKS VINA',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            url: 'https://cntt.caothang.edu.vn/wp-content/uploads/2020/07/61953176_1084846471725859_1854760882085560320_n-554x674.jpg',
            time:'2020-10-01T10:12:42.288Z',
            type:'2',
            urlContent:'https://cntt.caothang.edu.vn/thong-bao-danh-sach-va-lich-thi-tuyen-chon-doi-tuyen-olympic-tin-hoc-cao-thang-2020/'
          },
          {
            id:"518cbb1389da79d3a25453f3",
            title: 'Anise Aroma Art Bazar',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
            time:'2020-10-01T10:12:42.288Z',
            type:'3',
            urlContent:'https://cntt.caothang.edu.vn/thong-bao-lich-on-tap-tot-nghiep-cao-dang-nghe-2017/'
          },
          {
            id:"518cbb1389da79d3a25453f4",
            title: '[THÔNG BÁO] LỊCH THI LẦN 2 – TUẦN 47 – 48 – 49',
            description:
              'Khoa CNTT xin thông báo thời gian và địa điểm thi lần 2 các môn diễn ra trong tuần 47 – 48 – 49 như sau:',
            url: 'https://cntt.caothang.edu.vn/wp-content/uploads/2018/03/2-554x399.jpg',
            time:'2020-10-01T10:12:42.288Z',
            type:'1',
            urlContent:'https://cntt.caothang.edu.vn/thong-bao-vv-thuc-hien-do-an-tot-nghiep-cao-dang-nganh-khoa-16/'
          }
          ],
    };
  } else {
    return fetch(API_URL+'cnttTinTuc/search='+input, {
     
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        //Authorization: 'Bearer ' + "token",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.warn('responseJson', responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.warn('res', error);
        return {resultCode: -1, message: messageError};
      });
  }
}
