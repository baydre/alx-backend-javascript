export default function getListStudentsIds(arrOfObjects) {
  // if args ![..], return []
  if (Array.isArray(arrOfObjects)) {
    const getId = arrOfObjects.map((item) => item.id);
    return getId;
  }
  return [];
}
