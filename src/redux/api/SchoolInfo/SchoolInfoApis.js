//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
import {API_URL,userProfile} from '../../../config';
export function getSchoolInfoApi(input) {
 
    return fetch(API_URL+'cnttTinTuc/danhsachtintuckhac', {
     
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + "token",
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
