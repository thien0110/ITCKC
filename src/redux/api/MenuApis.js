const messageError = 'Không thể kết nối tới server.';
import {API_URL,userProfile} from '../../config';
export function menuApi(input) {
  return fetch(API_URL + 'cntt/baivietquantrong', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userProfile.token,
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

export function hotPostsItApi(input) {
  return fetch(API_URL + 'cntt/all', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userProfile.token,
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
export function notiApi(input) {
  return fetch(API_URL + 'cnttTinTuc/danhsachthongbaocntt', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + userProfile.token,
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

