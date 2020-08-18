import * as Keychain from 'react-native-keychain';

export const objectIsNull = (object) => {
  if (object === null || object === undefined || object === '(null)') {
    return true;
  } else {
    return false;
  }
};
export const stringIsEmpty = (string) => {
  if (objectIsNull(string) || string === '') {
    return true;
  } else {
    return false;
  }
};
export const arrayIsEmpty = (array) => {
  if (objectIsNull(array) || array.length === 0) {
    return true;
  } else {
    return false;
  }
};
export const objectIsEmpty = (v) => {
  return Object.keys(v).length === 0;
};
export const rememberUser = async (myLogin) => {
  try {
    await Keychain.setGenericPassword(myLogin.username, myLogin.password); //set thông tin đăng nhập
  } catch (error) {}
};

export const SplitDate = (date) => { //Change ngày giờ datetime sang ngày tháng năm bt
  var newDate =date.split('T',8)
  return newDate[0];
};
export function objectIsEqual(objA, objB) { //So sánh 2 obj
  // Tạo các mảng chứa tên các property
  var aProps = Object.getOwnPropertyNames(objA);
  var bProps = Object.getOwnPropertyNames(objB);
  // Nếu độ dài của mảng không bằng nhau,
  // thì 2 objects đó không bằnh nhau.
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    // Nếu giá trị của cùng một property mà không bằng nhau,
    // thì 2 objects không bằng nhau.
    if (objA[propName] !== objB[propName]) {
      return false;
    }
  }
  // Nếu code chạy đến đây,
  // tức là 2 objects được tính lằ bằng nhau.
  return true;
}

export const getRememberedUser = async () => {
  try {
    const credentials = await Keychain.getGenericPassword(); // get thông tin đăng nhập
    if (credentials != false) {
      return {
        username: credentials.username,
        password: credentials.password,
      };
    } else {
      return null;
    }
  } catch (error) {}
};

export const forgetUser = async () => {
  try {
    await Keychain.resetGenericPassword(); // xóa thông tin đăng nhập
  } catch (error) {}
};
function change_alias(alias) { // change VI-->EN
  var str = alias;
  str = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toUpperCase();
  return str;
}
export const sortArrayObject = (key, order = 'asc') => { // sắp xếp theo chữ cái a-z, Z-A
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? change_alias(a[key]) : a[key];
    const varB = typeof b[key] === 'string' ? change_alias(b[key]) : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};
