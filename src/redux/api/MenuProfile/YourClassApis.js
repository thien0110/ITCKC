const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL} from '../../../config';

export function getYourClassApi(input) {
  return fetch(
    `${API_URL}lophocphan/ctdt/${input.maLopHoc}/hocKi/${input.hocKi}`,
    {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    },
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {resultCode: -1, message: messageError};
    });
}
