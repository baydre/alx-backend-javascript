export default function getStudentsByLocation(arrOfObjects, city) {
  if (Array.isArray(arrOfObjects)) {
    const getLocation = arrOfObjects.filter((item) => item.location === city);
    return getLocation;
  }
  return [];
}
