//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {API_URL} from '../../config';
export function menuApi(input) {
  if (fakeApi) {
    return {
        resultCode: 1,
        message: "Get Thành Công",
        data: [
            {
              id:"518cbb1389da79d3a25453f9",
              title: '[THÔNG BÁO] LỊCH THI LẦN 2 – TUẦN 47 – 48 – 49',
              description:
                'Khoa CNTT xin thông báo thời gian và địa điểm thi lần 2 các môn diễn ra trong tuần 47 – 48 – 49 như sau:',
              url: 'https://cntt.caothang.edu.vn/wp-content/uploads/2018/03/2-554x399.jpg',
              time:'2020-10-01T10:12:42.288Z',
              type:'1',
            },
            {
              id:"518cbb1389da79d3a25453f9",
              title: '[TUYỂN DỤNG] CÔNG TY TNHH NEXON NETWORKS VINA',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              url: 'https://cntt.caothang.edu.vn/wp-content/uploads/2020/07/61953176_1084846471725859_1854760882085560320_n-554x674.jpg',
              time:'2020-10-01T10:12:42.288Z',
              type:'2',
            },
            {
              id:"518cbb1389da79d3a25453f9",
              title: 'Anise Aroma Art Bazar',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
              time:'2020-10-01T10:12:42.288Z',
              type:'3',
            },
          ],
    };
  } else {
    return fetch(API_URL+'get_data_noi_bat_all', {
     
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + "token",
      }),
      body: JSON.stringify({
        mssv: input.mssv,
        type:input.type,
        status:input.status,
        keyword: input.keyword,
        sap_xep:input.sap_xep,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.warn('responseJson', responseJson);
        return responseJson;
      })
      .catch((error) => {
        return {resultCode: -1, message: messageError};
      });
  }
}
