const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL} from '../../../config';
export function getLessonApi(input) {
  // console.warn(input)
  return fetch(
    `${API_URL}chude/${input}/lop-hoc-phan`,
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
      return {resultCode: -1, message: messageError};
    });
}
