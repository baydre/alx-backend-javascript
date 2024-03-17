/* eslint-disable */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = []
  for (let idx in array) {
    newArray.push(appendString + idx);
  }

  return newArray;
}
