
import * as Keychain from "react-native-keychain";

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

export const rememberUser = async (myLogin) => {
  try {
    await Keychain.setGenericPassword(myLogin.username, myLogin.password); //set thông tin đăng nhập
  } catch (error) {}
};

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
export const sortArrayObject =(key, order = 'asc')=> {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// singers.sort(compare);