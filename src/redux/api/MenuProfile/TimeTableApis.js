const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL} from '../../../config';

export function getTimeTableApi(input) {
  return fetch(
    `${API_URL}tkb/malophoc/${input.maLopHoc}/hocki/${input.hocKi}`,
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
      // console.warn('responseJson', responseJson);
      return responseJson;
    })
    .catch((error) => {
      // console.warn(error)
      return {resultCode: -1, message: messageError};
    });
}
