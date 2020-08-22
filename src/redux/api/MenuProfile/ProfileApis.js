const messageError = 'Không thể kết nối tới server.';
import {API_URL,userProfile} from '../../../config';
export function editProfileApi(input) {
  // console.warn("input1",input)
  
    return fetch(API_URL + 'sinhvien', {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userProfile.token,
      }),
      body: JSON.stringify({
        tokens: '12341234',
        role: 'SV',
        sdt: input.newPhone,
        maSinhVien:input.maSinhVien,
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

  export function changePasswordApi(input) {
    
      return fetch(API_URL + 'change-password', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + userProfile.token,
        }),
        body: JSON.stringify({
          mssv: input.mssv,
          oldPass: input.oldPass,
          newPass: input.newPass,
          newPassConfirm:input.confirmNewPass,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.warn('responseJson', responseJson);
          return responseJson;
        })
        .catch((error) => {
          // console.warn('error', error);
          return {resultCode: -1, message: messageError};
        });
    }
  

export function getProfileApi(input) {
    return fetch(API_URL+'sinhvien/'+input, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userProfile.token,
      }),
      // body: JSON.stringify({
      //   maSinhVien: input.studentCode,
      // }),
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
