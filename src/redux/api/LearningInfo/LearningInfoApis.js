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
          numberOf:'101',
          semester: '2',
          teacherName: 'Nguyễn Vũ Dzũng',
        },
        {
          subjectCode: '0002',
          name: 'Lập trình C#',
          nameAcronym: 'LTC#',
          subjectType: 'Thực hành',
          numberOf:'101',
          semester: '5',
          teacherName: 'Nguyến Đức Chuẩn',
        },
        {
          subjectCode: '0003',
          name: 'Thiết kế web',
          nameAcronym: 'LTTKW',
          subjectType: 'Lý thuyết',
          numberOf:'101',
          semester: '2',
          teacherName: 'Vũ Đình Bảo',
        },
        {
          subjectCode: '0004',
          name: 'Tin học ứng dụng',
          nameAcronym: 'THUD',
          subjectType: 'Lý thuyết',
          numberOf:'101',
          semester: '1',
          teacherName: 'Lữ Cao Tiến',
        },
        {
          subjectCode: '0004',
          name: 'Anh Văn A3',
          nameAcronym: 'AVA3',
          subjectType: 'Lý thuyết',
          numberOf:'101',
          semester: '4',
          teacherName: 'Lữ Cao Tiến',
        },
        {
          subjectCode: '0004',
          name: 'Lập trình PHP cơ bản',
          nameAcronym: 'LTPHPCB',
          subjectType: 'Lý thuyết',
          numberOf:'101',
          semester: '3',
          teacherName: 'Nguyễn Thanh Tuấn',
        },
        {
          subjectCode: '0004',
          name: 'React Native',
          nameAcronym: 'RN',
          subjectType: 'Lý thuyết',
          numberOf:'101',
          semester: '6',
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
