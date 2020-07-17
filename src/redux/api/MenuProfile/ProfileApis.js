const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {API_URL} from '../../../config';
export function editProfileApi(input) {
  console.warn('inputapi', input);
  if (fakeApi) {
    return {
      resultCode: 1,
      message: 'Cập nhật thông tin thành công!',
      data: null,
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

export function getProfileApi(input) {
  if (fakeApi) {
    return {
      resultCode: 200,
      message: 'Get thông tin thành công!',
      data: 
        {
          _id: '5efe0fb6f30afb6ea1ceeaf4',
          maSinhVien: '0306171301',
          ho: 'Lê',
          ten: 'Văn Thiện',
          gioiTinh: 'Nam',
          ngaySinh: '1999-10-01T10:12:42.288Z',
          diaChiThuongTru: '123ADC',
          diaChiTamTru: '12356CL',
          sdt: '03061713012',
          email: '0306171301@caothang.edu.vn',
          cmnd:'231265553',
          hoTenCha: 'Lê Văn A',
          hoTenMe: 'Lê Văn B',
          sdtCha: '0306171302',
          sdtMe: '030617101',
          nguoiTao: 'mã giáo viên',
          nguoiChinhSua: 'mã giáo viên',
          ngayChinhSua: '1999-10-01T10:12:42.288Z',
        },
    };
  } else {
    return fetch(API_URL + 'get_profile', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        maSinhVien: input.studentCode,
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
