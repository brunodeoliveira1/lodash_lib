const _ = {
  clamp (number, lower, upper) {
    return Math.min(Math.max(number, lower), upper);
  },
  inRange (number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    } else if (startValue > endValue) {
      const endValuefixed = endValue;
      endValue = startValue;
      startValue = endValuefixed;
    }
    if (number < startValue || number >= endValue) {
      return false;
    } else if (number >= startValue && number < endValue) {
      return true;
    }
  },
  words (string) {
    return string.split(' ');
  },
  pad (string, length) {
    const stringLength = string.length;
    if (stringLength > length) {
      return string;
    }
    const paddingLength = length - stringLength;
    let paddingLeft = 0;
    let paddingRight = 0;
    if (paddingLength % 2 !== 0) {
      paddingRight += Math.ceil(paddingLength / 2);
      paddingLeft += paddingLength - paddingRight;
    } else {
      paddingRight += paddingLength / 2;
      paddingLeft += paddingRight;
    }
    const space = ' ';
    const paddingRightSpace = space.repeat(paddingRight);
    const paddingLeftSpace = space.repeat(paddingLeft);
    return paddingLeftSpace + string + paddingRightSpace;
  },
  has (obj, key) {
    if (obj[key] === undefined) {
      return false;
    } else {
      return true;
    };
  },
  invert (obj) {
  const invertedObj = {};
  Object.keys(obj).map(el => invertedObj[obj[el]] = el );
  return invertedObj;
  },
  findKey (obj, pred) {
    for (let key in obj) {
      let value = obj[key];
      let predicateReturnValue = pred(value);
      if (predicateReturnValue) {
        return key;
      }
    return undefined;
    };
  },
  drop (arr, num=1) {
    let newArray = [];
    for (let i = num; i < arr.length; i++) {
      newArray.push(arr[i]);
    }
    return newArray;
  },
  dropWhile(arr, pred) {
    const cb = (element, index) => {
      return !pred(element, index, arr);
    };
    let dropNumber = arr.findIndex(cb);
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  chunk (array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};