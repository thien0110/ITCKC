//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
import {API_URL} from '../../config';
export function searchApi(input) {
  // console.warn(input)
  
    return fetch(API_URL+'cnttTinTuc/search='+input, {
     
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        //Authorization: 'Bearer ' + "token",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.warn('responseJson', responseJson);
        return responseJson;
      })
      .catch((error) => {
        // console.warn('res', error);
        return {resultCode: -1, message: messageError};
      });
  }

