const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {API_URL} from '../../../config';
export function editProfileApi(input) {
  console.warn("inputapi", input)
  if (fakeApi) {
    return {
      resultCode: 1,
      message:'Cập nhật thông tin thành công!',
      data:null
    };
  } else {
    return fetch(API_URL + 'edit_profile', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        firstName: input.firstName,
        lastName: input.lastName,
        sex: input.sex,
        permanentAddress: input.permanentAddress,
        temporaryAddress: input.temporaryAddress,
        phoneNumber: input.phoneNumber,
        birthDay: input.birthDay,
        idCode: input.idCode,
        fatherName: input.fatherName,
        motherName: input.motherName,
        fatherPhoneNumber: input.fatherPhoneNumber,
        motherPhoneNumber: input.motherPhoneNumber,
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
