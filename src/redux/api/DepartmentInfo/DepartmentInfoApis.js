//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
import {API_URL} from '../../../config';
export function getDepartmentInfoApi(input) {
  return fetch(API_URL + 'cnttTinTuc/danhsachtintuc', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + "token",
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      // console.warn('responseJson', responseJson);
      return responseJson;
    })
    .catch((error) => {
      // console.warn(error)
      return {resultCode: -1, message: messageError};
    });
}
