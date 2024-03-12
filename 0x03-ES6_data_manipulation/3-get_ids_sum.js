export default function getStudentIdsSum(arrOfObjects) {
  if (Array.isArray(arrOfObjects)) {
    const initialValue = 0;
    const getIdSum = arrOfObjects.reduce((a, b) => a + b.id, initialValue);
    return getIdSum;
  }
  return [];
}
