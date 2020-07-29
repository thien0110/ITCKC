
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
