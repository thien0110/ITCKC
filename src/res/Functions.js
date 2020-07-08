const objectIsNull = (object) => {
  if (object === null || object === undefined || object === '(null)') {
    return true;
  } else {
    return false;
  }
};
const stringIsEmpty = (string) => {
  if (objectIsNull(string) || string === '') {
    return true;
  } else {
    return false;
  }
};
const arrayIsEmpty = (array) => {
  if (objectIsNull(array) || array.length === 0) {
    return true;
  } else {
    return false;
  }
};
export {stringIsEmpty, arrayIsEmpty, objectIsNull};
