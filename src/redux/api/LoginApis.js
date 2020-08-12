//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL} from '../../config';
export function loginApi(input) {
  // console.warn('input', input)
  if (fakeApi) {
    return {
      message: 'Đăng nhập thành công !',
      data: {
        mssv: '0306171301',
        email: '0306171301@gmail.com',
        role: 'SV',
        maLopHoc: '30061711',
        token: '123456789',
      },
    };
  } else {
    return fetch(API_URL + 'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: input.username,
        password: input.password,
        loaiTaiKhoan:'3'
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
}
export function forgetPasswordApi(input) {
  return fetch(API_URL + 'reset-password', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      email: input.email,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {resultCode: -1, message: messageError};
    });
}
