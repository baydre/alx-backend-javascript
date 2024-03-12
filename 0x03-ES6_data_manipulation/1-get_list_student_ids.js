export default function getListStudentsIds(arrOfObjects) {
  // if args ![..], return []
  // const getId = id.map(getListStudentsIds);
  if (Array.isArray(arrOfObjects)) {
    const getId = arrOfObjects.map((item) => item.id);
    return getId;
  }
  return [];
}
