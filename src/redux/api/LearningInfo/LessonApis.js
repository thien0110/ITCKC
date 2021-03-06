const messageError = 'Không thể kết nối tới server.';
const fakeApi = false;
import {API_URL,userProfile} from '../../../config';
export function getLessonApi(input) {
  // console.warn(input)
  return fetch(
    `${API_URL}baigiang/${input}/lop-hoc-phan`,
    {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userProfile.token,
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
