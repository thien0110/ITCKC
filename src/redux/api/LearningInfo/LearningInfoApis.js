const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {API_URL} from '../../../config';


export function getSubjectApi(input) {
  if (fakeApi) {
    return {
      resultCode: 200,
      message: 'Get thông tin thành công!',
      data:  [
        {
          subjectCode: '0001',
          name: 'Toán rời rạc',
          nameAcronym: 'TTR',
          subjectType: 'Lý thuyết',
          semester: 'Hoc ky 2',
          teacherName: 'Nguyễn Vũ Dzũng',
        },
        {
          subjectCode: '0002',
          name: 'Thiết kế web',
          nameAcronym: 'THTKW',
          subjectType: 'Thực hành',
          semester: 'Học kỳ 2',
          teacherName: 'Lữ Cao Tiến',
        },
        {
          subjectCode: '0003',
          name: 'Thiết kế web',
          nameAcronym: 'LTTKW',
          subjectType: 'Lý thuyết',
          semester: 'Học kỳ 2',
          teacherName: 'Vũ Đình Bảo',
        },
        {
          subjectCode: '0004',
          name: 'Đồ họa ứng dụng',
          nameAcronym: 'DHUD',
          subjectType: 'Lý thuyết',
          semester: 'Học kỳ 2',
          teacherName: 'Lữ Cao Tiến',
        },
        {
          subjectCode: '0004',
          name: 'Đồ họa ứng dụng',
          nameAcronym: 'DHUD',
          subjectType: 'Lý thuyết',
          semester: 'Học kỳ 2',
          teacherName: 'Lữ Cao Tiến',
        },
        {
          subjectCode: '0004',
          name: 'Đồ họa ứng dụng',
          nameAcronym: 'DHUD',
          subjectType: 'Lý thuyết',
          semester: 'Học kỳ 2',
          teacherName: 'Lữ Cao Tiến',
        },
        {
          subjectCode: '0004',
          name: 'Đồ họa ứng dụng',
          nameAcronym: 'DHUD',
          subjectType: 'Lý thuyết',
          semester: 'Học kỳ 2',
          teacherName: 'Lữ Cao Tiến',
        },
      ]
    }
  } else {
    return fetch(API_URL + 'get_subject', {
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
