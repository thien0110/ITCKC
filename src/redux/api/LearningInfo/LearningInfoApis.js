const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL} from '../../../config';
export function getSubjectApi(input) {
  return fetch(
    `${API_URL}lophocphan/android/maLopHoc/${input}`,
    {
      method: 'GET',
      headers: new Headers({
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
      // console.warn('er',error)
      return {resultCode: -1, message: messageError};
    });
}
