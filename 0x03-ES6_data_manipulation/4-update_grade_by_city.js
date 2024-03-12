export default function updateStudentGradeByCity(arrOfObjects, city, newGrades) {
  if (Array.isArray(arrOfObjects) && typeof city === 'string') {
    const updateGrade = arrOfObjects.filter((item) => item.location === city).map((item) => ({
      id: item.id,
      firstName: item.firstName,
      location: item.location,
      grade: (newGrades.find((grade) => grade.studentId === item.id) || { grade: 'N/A' }).grade,
    }));
    return updateGrade;
  }
  return [];
}
