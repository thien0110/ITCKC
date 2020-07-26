//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {API_URL} from '../../config';
export function loginApi(input) {
  if (fakeApi) {
    return {
      resultCode: 1,
      message: 'Đăng nhập thành công !',
      data: {
        username: 'Thienle',
        password: '123',
        token: '123456789'
      },
    };
  } else {
    return fetch(API_URL+'login', {
      
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        username: input.username,
        password: input.password,
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
