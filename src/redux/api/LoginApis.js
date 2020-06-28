//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {APILogin} from '../../datas/datas';
export function loginApi(input) {
  if (fakeApi) {
    return {
      APILogin
    };
  } else {
    return fetch('/login', {
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
        console.warn('responseJson', responseJson);
        return responseJson;
      })
      .catch((error) => {
        return {resultCode: -1, message: messageError};
      });
  }
}
